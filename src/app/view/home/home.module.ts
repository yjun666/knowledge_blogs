import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { HeaderModule } from '../../components/shared/header/header.module';

import { RouterService } from '../../services/router.service';
import { GetJsonService } from '../../services/getJson.service';


const adminRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'markdown',
        // component: MarkdownComponent,
        loadChildren: () => import('./markdown/markdown.module').then(m => m.MarkdownModule),
        data: {
          animation: 'HomePage',
          name: 'markdown',
          routeName: '/home/markdown'
        }
      },
      {
        path: 'requestTest',
        loadChildren: () => import('./request/request.module').then(m => m.RequestModule),
        data: {
          animation: 'AboutPage',
          name: 'requestTest',
          routeName: '/home/requestTest'
        }
      },
      {
        path: 'rxjs',
        loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule),
        data: {
          animation: 'RxjsPage',
          name: 'rxjs',
          routeName: '/home/rxjs'
        }
      },
      {
        path: 'lodash',
        loadChildren: () => import('./lodash/lodash.module').then(m => m.LodashModule),
        data: {
          animation: 'LodashPage',
          name: 'lodash',
          routeName: '/home/lodash'
        }
      },
      {
        path: 'hero',
        loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
        data: {
          animation: 'HeroPage',
          name: 'hero',
          routeName: '/home/hero'
        }
      },
      {
        path: '',
        redirectTo: '/home/markdown',
        pathMatch: 'prefix'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    // 不能注入markdown等module，否则只输入home组件时，markdown直接找到跟组件，不渲染home组件
    // MarkdownModule,
    // RequestModule,
    // RxjsModule,
    // LodashModule,
    // HeroModule,

    HeaderModule,

    RouterModule.forChild(adminRoutes)
  ],
  providers: [
    RouterService,
    GetJsonService
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
