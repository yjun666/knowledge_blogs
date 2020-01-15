import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { RequestTestComponent } from './request.component';
import { RequestTestModule } from '../../../components/requestTestDetails/requestTest/requestTest.module';
import { UploaderModule } from '../../../components/requestTestDetails/upload/uploader.module';

const routes: Routes = [
  {
    path: '',
    component: RequestTestComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    NzCheckboxModule,

    RequestTestModule,
    UploaderModule
  ],
  declarations: [
    RequestTestComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RequestModule { }
