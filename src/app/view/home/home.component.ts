import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
    }

    getAnimationData(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
