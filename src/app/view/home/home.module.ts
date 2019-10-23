import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


import { MarkdownComponent } from '../markdown/markdown.component';
import { RequestTestComponent } from '../requestTest/requestTest.component';
import { RxjsComponent } from '../rxjs/rxjs.component';
import { LodashComponent } from '../lodash/lodash.component';
import { HeroComponent } from '../hero/hero.component';

import { MarkdownModule } from '../markdown/markdown.module';
import { RequestTestModule } from '../requestTest/requestTest.module';
import { RxjsModule } from '../rxjs/rxjs.module';
import { LodashModule } from '../lodash/lodash.module';
import { HeroModule } from '../hero/hero.module';

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

import { AppTitleHoverShowModule } from '../../shared/directives';


const adminRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'markdown',
                loadChildren: () => import('../markdown/markdown.module').then(m => m.MarkdownModule),
                // component: MarkdownComponent,
                data: { animation: 'HomePage' }
            },
            {
                path: 'requestTest',
                loadChildren: () => import('../requestTest/requestTest.module').then(m => m.RequestTestModule),
                // component: RequestTestComponent,
                data: { animation: 'AboutPage' }
            },
            {
                path: 'rxjs',
                loadChildren: () => import('../rxjs/rxjs.module').then(m => m.RxjsModule),
                // component: RxjsComponent,
                data: { animation: 'RxjsPage' }
            },
            {
                path: 'lodash',
                loadChildren: () => import('../lodash/lodash.module').then(m => m.LodashModule),
                // component: LodashComponent,
                data: { animation: 'LodashPage' }
            },
            {
                path: 'hero',
                loadChildren: () => import('../hero/hero.module').then(m => m.HeroModule),
                // component: HeroComponent,
                data: { animation: 'HeroPage' }
            },
            { path: '', redirectTo: 'markdown', pathMatch: 'prefix' },
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

        AppTitleHoverShowModule,

        MarkdownModule,
        RequestTestModule,
        RxjsModule,
        LodashModule,
        HeroModule,

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
