import { Component } from '@angular/core';
import { UploaderService } from '../../shared/services/uploader.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';
declare const $;
// angular 给的demo不准，好像是自己用延时器模拟的
@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.scss'],
    providers: [UploaderService]
})
export class UploaderComponent {
    message: string;
    uploadSubscribeObj = {};

    constructor(
        private uploaderService: UploaderService,
        public http: HttpClient
    ) { }

    // 获取当前上传文件的进度事件
    private getEventMessage(event: HttpEvent<any>, progressFn: Function, fn: Function) {
        // console.log(event);
        // console.log(event.type, '====', HttpEventType.Sent, HttpEventType.UploadProgress, HttpEventType.Response);
        switch (event.type) {
            case HttpEventType.Sent:
                // return `开始上传文件`;
                break;
            // 正在上传
            case HttpEventType.UploadProgress:
                const percentDone = Math.round(100 * event['loaded'] / event['total']);
                console.log(percentDone);
                progressFn(`${percentDone}%`);
                return `${percentDone}%`;
            // break;
            // 上传完毕
            case HttpEventType.Response:
                // 回调
                fn(event.body);
                return event.body;
            default:
                break;
            // return `文件上传`;
        }

    }


    onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            const formdata = new FormData();
            formdata.append('fileInfo', file);

            // 设置headers
            const newHeaders: object = Object.assign({}, { reportProgress: true });
            // 设置请求参数
            const req = new HttpRequest('POST', `http://localhost:3000/upload/file`, formdata, newHeaders);

            // 文件上传接口
            this.uploadSubscribeObj['test'] = this.http.request(req).pipe(
                map(event => this.getEventMessage(event, (data) => {
                    // 监听进度条事件
                    $('.progressUploadWraper > div').css('width', data);
                }, (data) => {
                    $('.progressUploadWraper > div').css('width', '100%');
                    // 文件上传完成事件
                    console.log(data);
                }))
            ).subscribe((data) => { }, (err) => { });


            // 使用ajax实现进度条加载成功，angular待调试
            // $.ajax({
            //     url: 'http://localhost:3000/upload/file',
            //     type: 'POST',
            //     cache: false,
            //     // data: {}, // 需要什么参数，自己配置
            //     data: formdata, // 文件以formData形式传入
            //     processData: false,
            //     // 必须false才会自动加上正确的Content-Type
            //     contentType: false,
            //     xhr: function () {
            //         const xhr = new XMLHttpRequest();
            //         // xhr.upload.addEventListener('progress', function (e) {
            //         //     console.log(e);
            //         //     const progressRate = (e.loaded / e.total) * 100 + '%';
            //         //     console.log('%c progressRate', 'color:blue', progressRate);
            //         //     $('.progressUploadWraper > div').css('width', progressRate);
            //         // });
            //         return xhr;
            //     },
            //     success: () => {
            //         console.log('%c success', 'color:red');
            //     },
            //     error: () => {
            //         console.log('error');
            //     }
            // });
        }
    }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
