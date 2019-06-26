import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import { RxjsDetailsModule } from '../../components/component.module';


const adminRoutes: Routes = [
    {
        path: '',
        component: RxjsComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RxjsDetailsModule,
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        RxjsComponent
    ],
    exports: [
        RouterModule
    ]
})
export class RxjsModule { }
