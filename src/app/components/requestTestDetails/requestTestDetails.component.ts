import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '../../shared/services/message.service';

declare const $;
@Component({
    selector: 'app-request-test',
    templateUrl: './requestTestDetails.component.html',
    styleUrls: ['./requestTestDetails.component.scss']
})
export class RequestTestDetailsComponent implements OnInit, AfterViewInit {
    title = 'knowledgeBlogs';
    constructor(
        private http: HttpClient,
        private router: Router,
        public messageService: MessageService,
    ) { }
    ngOnInit() {
        document.cookie = 'alsdkjf=asdfasdf';
        const headers = new HttpHeaders();
        console.log(headers);
        {
            // // get调用方式跨域携带cookie---------start
            // // 通过配置代理在开发环境跨域访问
            // this.http.get('/1.0/machine-learning/app/project/getProjectById?projectId=ed9fc3f3c18d430dba51ccdf4dbb885c', {
            //   headers,
            //   withCredentials: true, // 解决跨域请求不能携带cookie的问题
            //   observe: 'response',  // 加入该参数可获取完整的响应体
            // }).subscribe((data) => {
            //   console.log(data);
            // });
            this.http.get('https://npmsearch.com/query')
                .subscribe((data) => {
                    console.log(data);
                });
            // get调用方式跨域携带cookie---------end
        }
        {
            // get调用方式跨域携带cookie---------start
            this.http.get('http://localhost:3000/search', {
                headers,
                withCredentials: true, // 解决跨域请求不能携带cookie的问题
                observe: 'response',  // 加入该参数可获取完整的响应体
            }).subscribe((data) => {
                console.log(data, 'asldkjf;asdjf;asjkdf;lakjsdf;lkjas;dlfkjalj;a;a;a;a;');
            });
            // get调用方式跨域携带cookie---------end
        }
        // {
        //   // jsonp跨域调用方式---------start
        //   this.http.jsonp('http://localhost:3000/search', 'callback=test22').subscribe((data) => {
        //     console.log(data, 'test22');
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
        //     crossDomain: true,
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

    ngAfterViewInit(): void {

    }
}
