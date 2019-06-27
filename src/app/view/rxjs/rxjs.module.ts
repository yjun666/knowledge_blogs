import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import { RxjsDetailsModule } from '../../components/component.module';


@NgModule({
    imports: [
        CommonModule,
        RxjsDetailsModule
    ],
    declarations: [
        RxjsComponent
    ],
    exports: [
        RouterModule
    ]
})
export class RxjsModule { }
