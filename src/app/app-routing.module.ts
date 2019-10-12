import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard } from './shared/auth';
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
