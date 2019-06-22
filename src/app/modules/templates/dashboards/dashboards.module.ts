import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAComponent } from './dashboard-a/dashboard-a.component';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
  declarations: [DashboardAComponent],
  imports: [
    CommonModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#f1f1f1',
      switchColor: '#0a485b',
      defaultBgColor: '#30c4f1',
      defaultBoColor : '#0c809c',
      checkedLabel: 'Active',
      uncheckedLabel: 'Inactive'
    })
  ]
})
export class DashboardsModule { }
