import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AdService } from './components/shared/ad-banner/ad.service';
import { RouterService } from './services/router.service';

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
  ) { }

  ngOnInit() {
    console.log('123123asdfasdfasd');
    this.ads = this.adService.getAds();
  }

  ngAfterViewInit(): void {

  }
}
