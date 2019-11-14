import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { MarkdownModule } from './markdown/markdown.module';
import { RequestTestModule } from './requestTest/requestTest.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { LodashModule } from './lodash/lodash.module';
import { HeroModule } from './hero/hero.module';

import { HeaderModule } from '../../components/header/header.module';

import { AppTitleHoverShowModule } from '../../shared/directives';


const adminRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'markdown',
                loadChildren: () => import('./markdown/markdown.module').then(m => m.MarkdownModule),
                data: { animation: 'HomePage' }
            },
            {
                path: 'requestTest',
                loadChildren: () => import('./requestTest/requestTest.module').then(m => m.RequestTestModule),
                data: { animation: 'AboutPage' }
            },
            {
                path: 'rxjs',
                loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule),
                data: { animation: 'RxjsPage' }
            },
            {
                path: 'lodash',
                loadChildren: () => import('./lodash/lodash.module').then(m => m.LodashModule),
                data: { animation: 'LodashPage' }
            },
            {
                path: 'hero',
                loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
                data: { animation: 'HeroPage' }
            },
            { path: '', redirectTo: 'markdown', pathMatch: 'prefix' },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        AppTitleHoverShowModule,
        MarkdownModule,
        RequestTestModule,
        RxjsModule,
        LodashModule,
        HeroModule,

        HeaderModule,

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
