import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { slideInAnimation, routerTransition } from '../../animations/animation';
import { SelectivePreloadingStrategyService } from '../../shared/services/selective-preloading-strategy.service';
import {
    trigger, animateChild, group,
    transition, animate, style, query, state
} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('routerTransition', [
            state('void', style({})),
            state('*', style({})),
            transition(':enter', [
                style({ transform: 'translateY(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
            ])
        ])
    ]
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
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
    }

    getAnimationData(outlet: RouterOutlet) {
        console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']);
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
