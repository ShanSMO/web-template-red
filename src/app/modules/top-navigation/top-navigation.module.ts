import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [TopNavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavigationComponent
  ]
})
export class TopNavigationModule { }
