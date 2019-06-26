import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RequestTestComponent } from './requestTest.component';
import { RequestTestDetailsModule, UploaderModule } from '../../components/component.module';



const adminRoutes: Routes = [
    {
        path: '',
        component: RequestTestComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RequestTestDetailsModule, UploaderModule,
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        RequestTestComponent
    ],
    exports: [
        RouterModule
    ]
})
export class RequestTestModule { }
