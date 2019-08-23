import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { HeroService } from './hero.service';


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    animations: []
})
export class HeroComponent implements OnInit, AfterViewInit {
    modules: string[] = [];
    heros: Array<{ id: number; name: string }> = [];
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        public heroService: HeroService,
    ) { }

    ngOnInit() {
        this.heros = this.heroService.getHeros();
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
    }

    ngAfterViewInit(): void { }
}
