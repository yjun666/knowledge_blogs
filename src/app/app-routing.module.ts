import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MarkdownComponent } from './view/markdown/markdown.component';
import { RequestTestComponent } from './view/requestTest/requestTest.component';
import { RxjsComponent } from './view/rxjs/rxjs.component';
import { LodashComponent } from './view/lodash/lodash.component';
import { AuthGuard } from './auth';
import { SelectivePreloadingStrategyService } from './shared/services/selective-preloading-strategy.service';
const routes: Routes = [
  // { path: 'login', component: LoginComponent },  // 不需要加  '/', 默认写法
  {
    path: 'login',
    loadChildren: './view/login/login.module#LoginModule',
    // component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    data: { preload: true }, // 路由欲加载
    loadChildren: './view/home/home.module#HomeModule',
    // component: HomeComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: './view/login/login.module#LoginModule',
  },  // 通配符路由,其它不存在的跳转到404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    })
  ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule { }
