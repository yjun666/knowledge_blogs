import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EllipsismultilineModule } from '../../../components/demoDetails/appEllipsisMultilineTest/appEllipsisMultilineTest.module';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

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
    CommonModule,
    EllipsismultilineModule
  ],
  declarations: [
    DemoComponent,
  ],
  exports: [
    DemoComponent,
    RouterModule
  ]
})
export class DemoModule { }
