import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SideNavigationComponent
  ],
  exports: [
    SideNavigationComponent
  ]
})
export class SharedModule { }
