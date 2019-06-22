import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { ContainerLayoutComponent } from './container-layout/container-layout.component';
import {TopNavigationModule} from "../top-navigation/top-navigation.module";
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [BlankLayoutComponent, ContainerLayoutComponent],
  imports: [
    CommonModule,
    TopNavigationModule,
    RouterModule
  ]
})
export class LayoutsModule { }
