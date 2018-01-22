import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SampleOneComponent } from './sample-one/sample-one.component';

const routes: Routes = [
  {
    path: 'sample-one',
    component: SampleOneComponent,
    data: {
      header: 'Sample One'
    }
  },
  {
    path: '',
    redirectTo: 'sample-one'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SampleOneComponent]
})
export class SamplesModule { }
