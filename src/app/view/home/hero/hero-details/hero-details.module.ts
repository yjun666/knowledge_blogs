import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterService } from '../../../../services/router.service';
import { HeroDetailsComponent } from './hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [
    RouterService,
  ],
  declarations: [
    HeroDetailsComponent,
  ],
  exports: [
    RouterModule,
    HeroDetailsComponent
  ]
})
export class HeroDetailsModule { }
