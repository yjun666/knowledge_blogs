import { Component } from '@angular/core';
import { UploaderService } from '../../shared/services/uploader.service';
declare const $;
// angular 给的demo不准，好像是自己用延时器模拟的
@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    providers: [UploaderService]
})
export class UploaderComponent {
    message: string;

    constructor(private uploaderService: UploaderService) { }

    onPicked(input: HTMLInputElement) {
        const file = input.files[0];
        if (file) {
            // this.uploaderService.upload(file).subscribe(
            //     msg => {
            //         input.value = null;
            //         this.message = msg;
            //     }
            // );

            // 使用ajax实现进度条加载成功，angular待调试
            const formdata = new FormData();
            formdata.append('fileInfo', file);

            $.ajax({
                url: 'http://localhost:3000/upload/file',
                type: 'post',
                dataType: 'json',
                data: formdata,
                processData: false,
                contentType: false,
                xhr: function () {
                    const xhr = new XMLHttpRequest();
                    xhr.upload.addEventListener('progress', function (e) {
                        console.log(e);
                        const progressRate = (e.loaded / e.total) * 100 + '%';
                        console.log('%c progressRate', 'color:blue', progressRate);
                        $('.progress > div').css('width', progressRate);
                    });
                    return xhr;
                },
                success: () => {
                    console.log('%c success', 'color:red');
                },
                error: () => {
                    console.log('error');
                }
            });
        }


    }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
