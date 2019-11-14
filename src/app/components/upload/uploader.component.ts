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
    fileList = []; // 文件files
    // 文件list列表
    userFeedBackData: { uploadFileList: Array<any> } = {
        uploadFileList: []
    }; // 已经添加的文件列表

    // 调用接口的订阅对象
    uploadSubscribeObj = {};

    constructor(
        private uploaderService: UploaderService,
        public http: HttpClient
    ) { }

    // 点击选择文件按钮
    public selectFileBtn() {
        this.getFile(() => {
            return this.selectFileCallback(this);
        }, this);
    }

    // 动态生成input进行文件选择
    private getFile(callback, vm) {
        vm.fileList = [];
        vm.fileList.length = 0;

        {
            // 删除上传文件生成的所有input
            const uploadFileOnlyIdList = Array.from(document.querySelectorAll('#uploadFileOnlyId'));
            for (const [key, value] of Object.entries(uploadFileOnlyIdList)) {
                document.body.removeChild(value);
            }
        }

        const ipt = document.createElement('input');
        ipt.accept = '.xlsx,.xls,.png,.jpg,.jpeg';

        ipt.id = 'uploadFileOnlyId';
        ipt.title = '';
        ipt.type = 'file';
        ipt.name = 'file';
        document.body.appendChild(ipt);

        ipt.click();
        const that = this;
        // tslint:disable-next-line: space-before-function-paren
        ipt.onchange = function () {
            const self: any = this;
            console.log(self.files[0]);
            vm.fileList.push(self.files[0]);
            // tslint:disable-next-line:no-unused-expression
            callback && callback(vm);
        };
    }

    // 选择文件回调事件
    private selectFileCallback(vm) {
        const files = this.fileList[0];
        // console.log(files, Object.prototype.toString.apply(files));
        const curTime = new Date().getTime();
        const obj = Object.assign({}, {
            id: 'id' + String(Math.random() * 100000000000) + '_' + curTime,
            file: files,
            fileName: files.name,
            fileSize: files.size,
            progress: '0%'
        });
        // console.log(obj);
        // console.log(files.name, files.size, files.type, files.lastModified);
        vm.userFeedBackData.uploadFileList.push(obj);
        console.log(vm.userFeedBackData.uploadFileList);
        this.upload(obj); // 上传接口，上传文件
    }

    // 获取当前上传文件的进度事件
    private getEventMessage(event: HttpEvent<any>, progressFn: (T) => void, fn: (T) => void) {
        // console.log(event);
        // console.log(event.type, '====', HttpEventType.Sent, HttpEventType.UploadProgress, HttpEventType.Response);
        switch (event.type) {
            case HttpEventType.Sent:
                // return `开始上传文件`;
                break;
            // 正在上传
            case HttpEventType.UploadProgress:
                const percentDone = Math.round(100 * event.loaded / event.total);
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

    // 上传文件
    private upload(param) {
        // const vm = this;
        if (param.file) {
            // const apiUrl = environment.apiUrl; // 开发时所有接口的域名
            // console.log(apiUrl);
            const file = param.file;

            const formdata = new FormData();
            formdata.append('fileInfo', file);

            // 设置headers
            const newHeaders: object = Object.assign({}, { reportProgress: true });
            // 设置请求参数
            const req = new HttpRequest('POST', `http://localhost:3000/upload/file`, formdata, newHeaders);

            // 文件上传接口
            this.uploadSubscribeObj[param.id] = this.http.request(req).pipe(
                map(event => this.getEventMessage(event, (data) => {
                    // 监听进度条事件
                    param.progress = data;
                }, (data) => {
                    // 文件上传完成事件
                    // console.log(data);
                    // param.remoteFileName = data.data;
                }))
            ).subscribe((data) => {
                console.log(data);
            }, (err) => { });




            // 使用ajax实现进度条加载成功，angular待调试---调试时需要打开network的慢网速模拟状态，可以看到进度条的打印
            // $.ajax({
            //     url: 'http://localhost:3000/upload/file',
            //     type: 'post',
            //     dataType: 'json',
            //     data: formdata,
            //     processData: false,
            //     contentType: false,
            //     xhr: function () {
            //         const xhr = new XMLHttpRequest();
            //         xhr.upload.addEventListener('progress', function (e) {
            //             console.log(e);
            //             const progressRate = (e.loaded / e.total) * 100 + '%';
            //             console.log('%c progressRate', 'color:blue', progressRate);
            //             param.progress = progressRate;
            //             $('.progress > div').css('width', progressRate);
            //         });
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

    // 删除当前添加的文件
    public delFile(id) {
        this.userFeedBackData.uploadFileList.map((x, xIndex) => {
            if (x.id === id) {
                this.uploadSubscribeObj[id].unsubscribe(); // 取消当前上传
                this.userFeedBackData.uploadFileList.splice(xIndex, 1);
            }
        });
    }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
