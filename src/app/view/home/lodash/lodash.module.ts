import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LodashComponent } from './lodash.component';
import { LodashDetailsModule } from '../../../components/lodashDetails/lodashDetails.module';

const routes: Routes = [
    {
        path: '',
        component: LodashComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
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
