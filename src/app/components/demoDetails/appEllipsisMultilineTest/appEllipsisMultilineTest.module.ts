import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { EllipsisMultilineDirectiveModule } from '../../../directives/ellipsisMultiline.directive';

import { EllipsismultilineComponent } from './appEllipsisMultilineTest.component';

@NgModule({
  imports: [
    CommonModule,
    NzTypographyModule,
    EllipsisMultilineDirectiveModule,
  ],
  exports: [EllipsismultilineComponent],
  declarations: [EllipsismultilineComponent],
  providers: [],
})
export class EllipsismultilineModule { }
