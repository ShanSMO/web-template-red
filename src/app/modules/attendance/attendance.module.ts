import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceModuleLayoutComponent } from './attendance-module-layout/attendance-module-layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AttendanceComponent, AttendanceModuleLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AttendanceModule { }
