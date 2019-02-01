import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

declare const $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'knowledgeBlogs';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }
}
