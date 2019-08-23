import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';
import { MockHeroService } from './mock_hero.service';



import { AppMarkedModule, AppTitleHoverShowModule } from '../../directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        AppMarkedModule,
        AppTitleHoverShowModule,
    ],
    providers: [{
        provide: HeroService, useClass: MockHeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService
    }],
    declarations: [
        HeroComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HeroModule { }
