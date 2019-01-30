import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
declare const $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'knowledgeBlogs';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  ngOnInit() {
    document.cookie = 'alsdkjf=asdfasdf';
    // const headers = new HttpHeaders().set('Cookie', document.cookie);
    this.http.get('http://localhost:3000/search', {headers}).subscribe((data) => {
      console.log(data);
    });
    // $.ajax({
    //   type: 'GET',
    //   url: 'http://localhost:3000/search',
    //   // 允许携带证书
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   // 允许跨域
    //   crossDomain: true,
    //   success: () => {
    //     // alert('success');
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // });
  }
}
