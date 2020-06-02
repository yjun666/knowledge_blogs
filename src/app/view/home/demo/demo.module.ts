import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { DemoComponent } from './demo.component';
import { EllipsismultilineComponent } from '../../../components/demoDetails/appEllipsisMultilineTest/appEllipsisMultilineTest.component';
import { RequestTestComponent } from '../../../components/demoDetails/requestTest/requestTest.component';
import { UploaderComponent } from '../../../components/demoDetails/upload/uploader.component';

import { EllipsisMultilineDirectiveModule } from '../../../directives';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    NzCheckboxModule,
    NzTypographyModule,
    CommonModule,
    EllipsisMultilineDirectiveModule
  ],
  declarations: [
    DemoComponent,
    UploaderComponent,
    RequestTestComponent,
    EllipsismultilineComponent
  ],
  providers: [],
  exports: [
    DemoComponent,
    RouterModule
  ]
})
export class DemoModule { }
