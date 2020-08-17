import { GetJsonService } from './services/getJson.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AdService } from './components/shared/ad-banner/ad.service';
import { RouterService } from './services/router.service';
import { UpdataSubjectService } from './services/subject.service';

import { demo } from './utils/demo';

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
    public getJsonService: GetJsonService,
  ) { }

  ngOnInit() {
    console.log('123123asdfasdfasd');
    this.ads = this.adService.getAds();
    this.getRouterData();
  }


  ngAfterViewInit(): void {
    demo();
    this.getJsonService.getCodeBySearch({code: 'B'}).subscribe((data:any)=>{
      console.log('getCodeBySearch', data);
    });
  }

  /**
   * 获取路由数据
   */
  private getRouterData() {
    this.updataSubjectService.routerData.subscribe(data => {
      console.log(data);
    })
  }
}
