import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard } from './shared/auth';
import { SelectivePreloadingStrategyService } from './shared/services/selective-preloading-strategy.service';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    data: { preload: true }, // 路由欲加载
    loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule)
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
