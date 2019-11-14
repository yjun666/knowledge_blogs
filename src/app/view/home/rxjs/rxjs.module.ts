import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import { RxjsDetailsModule } from '../../../components/rxjsDetails/rxjsDetails.module';

const routes: Routes = [
    {
        path: '',
        component: RxjsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
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
