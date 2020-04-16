import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { SearchModule } from '../../../components/demo/search/search.module';

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
    SearchModule,
    NzCheckboxModule,
    CommonModule
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