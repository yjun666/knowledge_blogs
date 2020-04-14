import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [],
  exports: [
    SearchComponent
  ],
})
export class SearchModule { }
