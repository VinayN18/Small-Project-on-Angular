import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  signupForm: FormGroup;
  displayStyle = 'none';
  displayStyle1 = 'none';
  editRecordId = null;
  submitted = false;
  clicked = false;
  formData: any[] = [];
  // genders = ['Male', 'Female', 'Other'];
  details = {
    name: 'string',
    id: 'string',
    email: 'string',
    mobile: 'string',
    date: 'string',
    city: 'string',
    state: 'string',
    country: 'string',
  };

  ngOnInit() {
    this.signupForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Mobile: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      Date: new FormControl(null, Validators.required),
      City: new FormControl(null, [
        Validators.required,
        Validators.maxLength(32),
      ]),
      State: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      Country: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }
  onClick() {
    this.displayStyle = 'none';
  }
  onSubmit() {
    // console.log(this.signupForm.value);
    this.submitted = true;
    if (this.editRecordId) {
      this.formData = this.formData.map((data) =>
        data.id === this.editRecordId ? this.signupForm.value : data
      );
      this.editRecordId = null;
    } else {
      const id = Date.now();
      const data = {
        id,
        ...this.signupForm.value,
      };
      this.formData.push(data);
    }
    this.signupForm.reset();
  }
  onbuttonclick() {
    this.clicked = true;
  }
  onClose() {
    this.displayStyle = 'none';
  }
  onOpen() {
    this.displayStyle = 'block';
  }
  // onEdit(user) {
  //   this.displayStyle = 'block';
  //   const { idee, ...data } = user;
  //   this.editRecordId = idee;
  //   this.Forms.setValue(data);
  // }

  onDataClose() {
    this.displayStyle1 = 'none';
  }
  onDelete(user) {
    this.formData = this.formData.filter((data) => data.id !== user.id);
    this.displayStyle1 = 'none';
  }
  onRowClick(user) {
    this.displayStyle1 = 'block';
    this.details.name = user.Name;
    this.details.email = user.Email;
    this.details.mobile = user.Mobile;
    this.details.date = user.Date;
    this.details.city = user.City;
    this.details.state = user.State;
    this.details.country = user.country;
    this.details.id = user.id;
  }
}
