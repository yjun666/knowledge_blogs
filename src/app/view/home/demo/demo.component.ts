import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-demo',
  templateUrl: `./demo.component.html`,
  styleUrls: [`./demo.component.scss`]
})
export class DemoComponent implements OnInit {
  // checkbox 开关
  cb = {
    appEllipsisMultilineTest: true, // 多行文本超出显示省略号
    requestTest: false, // 请求接口调试、请求方式调试
    uploader: false, // 上传文件组件
  };
  constructor(
    public messageService: MessageService
  ) { }


  ngOnInit() {
    console.log('Fetching heros...');
  }

}
