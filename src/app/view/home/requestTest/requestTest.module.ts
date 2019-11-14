import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RequestTestComponent } from './requestTest.component';
import { RequestTestDetailsModule } from '../../../components/requestTestDetails/requestTestDetails.module';
import { UploaderModule } from '../../../components/upload/uploader.module';

const routes: Routes = [
    {
        path: '',
        component: RequestTestComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
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
