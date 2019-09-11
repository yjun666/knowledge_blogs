import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';
import { MockHeroService } from './mock_hero.service';



import { AppMarkedModule, AppTitleHoverShowModule, EllipsisMultilineDirectiveModule } from '../../directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        AppMarkedModule,
        AppTitleHoverShowModule,
        EllipsisMultilineDirectiveModule,
    ],
    providers: [
        {
            provide: HeroService, useClass: MockHeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService,人工手动创建mock数据时需要与后台数据格式一致
            // provide: HeroService, useClass: HeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService
        },
        {
            provide: 'apiUrl',
            useValue: 'http://localhost:3000/list/searchHero'
        }
    ],
    declarations: [
        HeroComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HeroModule { }
