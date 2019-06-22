import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlankLayoutComponent} from './modules/layouts/blank-layout/blank-layout.component';
import {ContainerLayoutComponent} from './modules/layouts/container-layout/container-layout.component';
import {StudentLayoutComponent} from './modules/student-registration/student-layout/student-layout.component';
import {StudentRegistrationComponent} from './modules/student-registration/student-registration/student-registration.component';
import {StudentListComponent} from './modules/student-registration/student-list/student-list.component';
import {AttendanceModuleLayoutComponent} from './modules/attendance/attendance-module-layout/attendance-module-layout.component';
import {AttendanceComponent} from './modules/attendance/attendance/attendance.component';
import {TeacherModuleLayoutComponent} from './modules/teacher/teacher-module-layout/teacher-module-layout.component';
import {TeacherListComponent} from './modules/teacher/teacher-list/teacher-list.component';
import {TeacherRegistrationComponent} from './modules/teacher/teacher-registration/teacher-registration.component';
import {TemplateLayoutComponent} from './modules/templates/template-layout/template-layout.component';
import {TemplateRedComponent} from './modules/templates/template-red/template-red.component';
import {TemplateButtonsComponent} from './modules/templates/template-buttons/template-buttons.component';
import {DashboardAComponent} from './modules/templates/dashboards/dashboard-a/dashboard-a.component';
import {EmailBoxComponent} from './modules/templates/email-box/email-box.component';
import {ChatBoxComponent} from './modules/templates/chat-box/chat-box.component';

const routes: Routes = [
  {
    path: 'templates', component: TemplateLayoutComponent, children: [
    {path: 'red-template', component: TemplateRedComponent, children: [
      {path: 'buttons', component: TemplateButtonsComponent},
      {path: 'dashboard-a', component: DashboardAComponent},
      {path: 'mail-box', component: EmailBoxComponent},
      {path: 'chat-box', component: ChatBoxComponent}
    ]},
    ]
  },
  {path: 'registration2', component: StudentRegistrationComponent},
    {path: '', component: BlankLayoutComponent, children: [
      {path: 'login', component: BlankLayoutComponent},

    ]},
    {path: '', component: ContainerLayoutComponent, children: [
      {path: 'home', component: StudentLayoutComponent},
      {path: 'student', component: StudentLayoutComponent, children: [
        {path: 'list', component: StudentListComponent},
        {path: 'registration', component: StudentRegistrationComponent}
      ]},
      {path: 'attendance', component: AttendanceModuleLayoutComponent, children: [
        {path: 'list', component: AttendanceComponent}
      ]},
      {path: 'teacher', component: TeacherModuleLayoutComponent, children: [
        {path: 'list', component: TeacherListComponent},
        {path: 'registration', component: TeacherRegistrationComponent}
      ]}
    ]},
    {path: '**', component: BlankLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
