import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // 不需要加  '/', 默认写法
  { path: 'home', component: HomeComponent },  // 不需要加  '/', 默认写法
  { path: '**', component: HomeComponent },  // 通配符路由,其它不存在的跳转到404
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
