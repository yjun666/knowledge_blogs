import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { add, sub, mul, divide } from './utils/decimal';

import { AdService } from './components/shared/ad-banner/ad.service';
import { RouterService } from './services/router.service';
import { UpdataSubjectService } from './services/subject.service';

declare const $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'knowledgeBlogs';
  ads: any[];
  constructor(
    private http: HttpClient,
    private router: Router,
    public adService: AdService,
    public routerService: RouterService,
    public updataSubjectService: UpdataSubjectService,
  ) { }

  ngOnInit() {
    console.log('123123asdfasdfasd');
    this.ads = this.adService.getAds();
    this.getRouterData();
  }


  ngAfterViewInit(): void {
    this.demoDecimal();
  }

  /**
   * 获取路由数据
   */
  private getRouterData() {
    this.updataSubjectService.routerData.subscribe(data => {
      console.log(data);
    })
  }

  demoDecimal() {
    const a = 9.95;
    const b = 8.03;
    console.log(add(a, b),
      sub(a, b),
      mul(a, b),
      divide(a, b));

  }
}
