import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './routerAnimation';
import { SelectivePreloadingStrategyService } from '../../shared/services/selective-preloading-strategy.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        slideInAnimation
    ]
})
export class HomeComponent implements OnInit, AfterViewInit {
    modules: string[] = [];
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        public preloadStrategy: SelectivePreloadingStrategyService
    ) {
        this.modules = this.preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
    }

    ngAfterViewInit(): void { }

    getAnimationData(outlet: RouterOutlet) {
        // console.log(outlet, outlet.activatedRouteData, outlet.activatedRouteData['animation']);
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
