import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RequestTestComponent } from './requestTest.component';
import { RequestTestDetailsModule, UploaderModule } from '../../components/component.module';



@NgModule({
    imports: [
        CommonModule,
        RequestTestDetailsModule, UploaderModule
    ],
    declarations: [
        RequestTestComponent
    ],
    exports: [
        RouterModule
    ]
})
export class RequestTestModule { }
