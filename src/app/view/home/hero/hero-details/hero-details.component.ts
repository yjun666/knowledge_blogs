import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { Heros } from '../herosType';
import { GetJsonService } from '../../../../services/getJson.service';

// import { switchMap } from 'rxjs/operator/switchMap';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-hero-details',
  templateUrl: `./hero-details.component.html`,
  styleUrls: [`./hero-details.component.scss`]
})
export class HeroDetailsComponent implements OnInit {
  curHero: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private getJson: GetJsonService,
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe((data) => {
      // console.log(data.get('id'));
      // console.log(this.heroService.heros);
      // console.log(this.heroService.getHero(data.get('id')));
      this.curHero = this.heroService.getHero(data.get('id'));
    });
  }

}
