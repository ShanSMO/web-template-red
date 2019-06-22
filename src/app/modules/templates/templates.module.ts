import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRedComponent } from './template-red/template-red.component';
import { TemplateLayoutComponent } from './template-layout/template-layout.component';
import {RouterModule} from '@angular/router';
import { TemplateButtonsComponent } from './template-buttons/template-buttons.component';
import {DashboardsModule} from './dashboards/dashboards.module';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { EmailBoxComponent } from './email-box/email-box.component';
import { ChartsGraphsComponent } from './charts-graphs/charts-graphs.component';

@NgModule({
  declarations: [TemplateRedComponent, TemplateLayoutComponent, TemplateButtonsComponent, ChatBoxComponent, EmailBoxComponent, ChartsGraphsComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardsModule
  ]
})
export class TemplatesModule { }
