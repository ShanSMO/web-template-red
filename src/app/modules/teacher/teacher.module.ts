import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { TeacherModuleLayoutComponent } from './teacher-module-layout/teacher-module-layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TeacherListComponent, TeacherRegistrationComponent, TeacherModuleLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TeacherModule { }
