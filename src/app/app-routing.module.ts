import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { AuthGuard } from './auth';

const routes: Routes = [
  { path: '', component: LoginComponent },  // 不需要加  '/', 默认写法
  // { path: 'login', component: LoginComponent },  // 不需要加  '/', 默认写法
  { path: 'login', component: HomeComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },  // 不需要加  '/', 默认写法
  { path: '**', component: LoginComponent },  // 通配符路由,其它不存在的跳转到404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
