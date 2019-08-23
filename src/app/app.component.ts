import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AdService } from './components/ad-banner/ad.service';
import { LoggerService } from './shared/services/logger.service';

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
    public loggerService: LoggerService,
  ) { }

  ngOnInit() {
    this.loggerService.log((x) => { console.log(123123); });
    this.ads = this.adService.getAds();
  }

  ngAfterViewInit(): void {

  }
}
