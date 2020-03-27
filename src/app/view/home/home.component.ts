import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './routerAnimation';
import { RouterService } from '../../services/router.service';
import { GetJsonService } from '../../services/getJson.service';
import { SelectivePreloadingStrategyService } from '../../services/selective-preloading-strategy.service';


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
    public routerService: RouterService,
    public preloadStrategy: SelectivePreloadingStrategyService,
    private route: ActivatedRoute,
    private getJson: GetJsonService,
    private http: HttpClient,
    private router: Router,
  ) {
    this.modules = this.preloadStrategy.preloadedModules; // 赋值当前所有预加载的路由，可打印到页面查看当前所有预加载的路由
  }

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      console.log(data.params);
    });
  }

  ngAfterViewInit(): void { }

  getAnimationData(outlet: RouterOutlet) {
    // console.log(outlet, outlet.activatedRouteData, outlet.activatedRouteData.animation);
    return this.routerService.getRouterData(outlet) && this.routerService.getRouterData(outlet).animation || '';
  }
}
