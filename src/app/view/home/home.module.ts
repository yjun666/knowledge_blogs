import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


import { MarkdownComponent } from '../markdown/markdown.component';
import { RequestTestComponent } from '../requestTest/requestTest.component';
import { RxjsComponent } from '../rxjs/rxjs.component';
import { LodashComponent } from '../lodash/lodash.component';

import { MarkdownModule } from '../markdown/markdown.module';
import { RequestTestModule } from '../requestTest/requestTest.module';
import { RxjsModule } from '../rxjs/rxjs.module';
import { LodashModule } from '../lodash/lodash.module';

import {
    MarkdownDetailsModule,
    AlertModule,
    HeaderModule,
    LodashDetailsModule,
    RequestTestDetailsModule,
    RxjsDetailsModule,
    SideBarModule,
    UploaderModule
} from '../../components/component.module';

import { AppMarkedModule, AppTitleHoverShowModule } from '../../directives/directives.module';


const adminRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'markdown',
                component: MarkdownComponent,
                data: { animation: 'HomePage' }
            },
            {
                path: 'requestTest',
                component: RequestTestComponent,
                data: { animation: 'AboutPage' }
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
                data: { animation: 'RxjsPage' }
            },
            {
                path: 'lodash',
                component: LodashComponent,
                data: { animation: 'LodashPage' }
            },
            {
                path: 'demo',
                component: MarkdownComponent,
                data: { animation: 'FilterPage' }
            },
            {
                path: '**',
                component: MarkdownComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,

        MarkdownDetailsModule,
        AlertModule,
        HeaderModule,
        LodashDetailsModule,
        RequestTestDetailsModule,
        RxjsDetailsModule,
        SideBarModule,
        UploaderModule,

        AppMarkedModule,
        AppTitleHoverShowModule,

        MarkdownModule,
        RequestTestModule,
        RxjsModule,
        LodashModule,

        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
