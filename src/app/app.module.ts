import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { DataServiceService } from './data-service.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'members', component: MembersComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    MembersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
