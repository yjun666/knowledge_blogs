import { NgModule } from '@angular/core';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from '../../shared/services/ad.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [AdService],
    declarations: [
        AdBannerComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective
    ],
    exports: [
        AdBannerComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective
    ],

    entryComponents: [HeroJobAdComponent, HeroProfileComponent],

    bootstrap: [
    ]
})
export class ADModule {
    constructor() { }
}

