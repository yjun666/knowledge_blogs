import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { RequestTestComponent } from './requestTest.component';
import { RequestTestDetailsModule } from '../../../components/requestTestDetails/requestTestDetails/requestTestDetails.module';
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

    RequestTestDetailsModule,
    UploaderModule
  ],
  declarations: [
    RequestTestComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RequestTestModule { }
