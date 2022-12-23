import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  signupForm: FormGroup;
  displayStyle = 'none';
  displayStyle1 = 'none';
  editRecordId = null;
  submitted = false;
  clicked = false;
  formData: any[] = [];

  details = {
    name: 'string',
    idee: 'string',
    id: 'string',
    description: 'string',
    date: 'string',
  };

  ngOnInit() {
    this.signupForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Id: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[1-9]+[0-9]*$'),
      ]),
      Description: new FormControl(null, Validators.required),
      Date: new FormControl(null, Validators.required),
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
    this.formData = this.formData.filter((data) => data.id !== user.idee);
    this.displayStyle1 = 'none';
  }
  onRowClick(user) {
    this.displayStyle1 = 'block';
    this.details.name = user.Name;
    this.details.id = user.Id;
    this.details.description = user.Description;
    this.details.date = user.Date;
    this.details.idee = user.id;
  }
}
