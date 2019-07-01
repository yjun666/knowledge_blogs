import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AdService } from './shared/services/ad.service';

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
  ) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  ngAfterViewInit(): void {

  }
}
