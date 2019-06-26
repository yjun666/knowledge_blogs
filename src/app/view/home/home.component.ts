import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations';
import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
    modules: string[] = [];
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        public preloadStrategy: SelectivePreloadingStrategyService
    ) { }

    ngOnInit() {
        this.modules = this.preloadStrategy.preloadedModules;
        console.log(slideInAnimation);
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
    }

    getAnimationData(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
