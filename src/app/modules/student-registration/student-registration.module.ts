import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import {RouterModule} from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [StudentRegistrationComponent, StudentLayoutComponent, StudentListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentRegistrationModule { }
