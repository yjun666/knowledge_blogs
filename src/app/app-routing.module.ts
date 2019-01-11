import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MarkdownComponent } from './view/markdown/markdown.component';
import { AuthGuard } from './auth';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },  // 不需要加  '/', 默认写法
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      // {
      //   path: '',
      //   component: MarkdownComponent
      // },
      {
        path: 'markdown',
        component: MarkdownComponent,
        data: { animation: 'HomePage' }
      },
      {
        path: 'iframe',
        component: MarkdownComponent,
        data: { animation: 'AboutPage' }
      },
      {
        path: 'demo',
        component: MarkdownComponent,
        data: { animation: 'FilterPage' }
      },
      // {
      //   path: '**',
      //   component: MarkdownComponent
      // }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },  // 通配符路由,其它不存在的跳转到404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule { }
