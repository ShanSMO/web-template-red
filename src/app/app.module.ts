import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutsModule} from './modules/layouts/layouts.module';
import {StudentRegistrationModule} from './modules/student-registration/student-registration.module';
import {AttendanceModule} from './modules/attendance/attendance.module';
import {TeacherModule} from './modules/teacher/teacher.module';
import {TemplatesModule} from './modules/templates/templates.module';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    StudentRegistrationModule,
    AttendanceModule,
    TeacherModule,
    TemplatesModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
