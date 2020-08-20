import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { DemoComponent } from './demo.component';
import { EllipsismultilineComponent } from '../../../components/demoDetails/appEllipsisMultilineTest/appEllipsisMultilineTest.component';
import { RequestTestComponent } from '../../../components/demoDetails/requestTest/requestTest.component';
import { UploaderComponent } from '../../../components/demoDetails/upload/uploader.component';
import { LineEhcartComponent } from '../../../components/demoDetails/echarts/line-echart/line-echart.component';

import { ReadExcelToJsonComponent } from '../../../components/demoDetails/readExcelToJson/read-excel-to-json.component';

import { SvgComponent } from '../../../components/demoDetails/svg/svg.component';

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
    NgxEchartsModule.forRoot({
      echarts,
    }),
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
    EllipsismultilineComponent,
    LineEhcartComponent,
    ReadExcelToJsonComponent,
    SvgComponent
  ],
  providers: [],
  exports: [
    DemoComponent,
    RouterModule
  ]
})
export class DemoModule { }
