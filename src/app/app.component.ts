import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import { Router } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
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
    const headers = new HttpHeaders();
    console.log(headers);
    {
      // get调用方式跨域携带cookie---------start
      // 通过配置代理在开发环境跨域访问
      this.http.get('/1.0/machine-learning/app/project/getProjectById?projectId=4d812b56cb5c47bcb4c1cbf5e99bdf7f', {
        headers,
        withCredentials: true, // 解决跨域请求不能携带cookie的问题
        observe: 'response',  // 加入该参数可获取完整的响应体
      }).subscribe((data) => {
        console.log(data);
      });
      // get调用方式跨域携带cookie---------end
    }
    // {
    //   // get调用方式跨域携带cookie---------start
    //   this.http.get('http://localhost:3000/search', {
    //     headers,
    //     withCredentials: true, // 解决跨域请求不能携带cookie的问题
    //     observe: 'response',  // 加入该参数可获取完整的响应体
    //   }).subscribe((data) => {
    //     console.log(data);
    //   });
    //   // get调用方式跨域携带cookie---------end
    // }
    // {
    //   // jsonp跨域调用方式---------start
    //   const test = (data) => { console.log(data); };
    //   this.http.jsonp('http://localhost:3000/search', 'callback=test').subscribe((data) => {
    //     console.log(data);
    //   });
    //   // jsonp跨域调用方式---------end
    // }
    // {
    //   // ajax中get调用跨域携带cookie----------start
    //   $.ajax({
    //     type: 'GET',
    //     url: 'http://localhost:3000/search',
    //     // 允许携带证书
    //     xhrFields: {
    //       withCredentials: true
    //     },
    //     // 允许跨域
    //     // crossDomain: true,
    //     success: () => {
    //       // alert('success');
    //     },
    //     error: (err) => {
    //       console.error(err);
    //     }
    //   });
    //   // ajax中get调用跨域携带cookie----------end
    // }
  }
}
