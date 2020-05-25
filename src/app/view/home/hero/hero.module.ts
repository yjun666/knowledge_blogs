import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';
import { MockHeroService } from './mock_hero.service';
import { RouterService } from '../../../services/router.service';
import { EllipsisMultilineDirectiveModule } from '../../../directives';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      {
        path: 'heroDetails',
        loadChildren: () => import('./hero-details/hero-details.module').then(m => m.HeroDetailsModule),
        // component: HeroDetailsComponent,
        data: {
          animation: '',
          name: 'heroDetails',
          routeName: '/home/hero/heroDetails'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    HttpClientModule,
    NzTypographyModule,
    EllipsisMultilineDirectiveModule,
  ],
  providers: [
    RouterService,
    {
      // provide: HeroService, useClass: MockHeroService
      // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService,人工手动创建mock数据时需要与后台数据格式一致
      provide: HeroService, useClass: HeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService
    },
    {
      provide: 'apiUrl',
      useValue: 'http://localhost:3000/list/search'
    }
  ],
  declarations: [
    HeroComponent,
    // HeroDetailsComponent
  ],
  exports: [
    RouterModule,
    // HeroDetailsComponent
  ]
})
export class HeroModule { }
