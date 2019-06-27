import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LodashComponent } from './lodash.component';
import { LodashDetailsModule } from '../../components/component.module';


@NgModule({
    imports: [
        CommonModule,
        LodashDetailsModule
    ],
    declarations: [
        LodashComponent
    ],
    exports: [
        RouterModule
    ]
})
export class LodashModule { }
