### ng-template

```
html

<div style='position:fixed;left:0;bottom:0;'>
    <ng-template #input>
        <input type="text" style="border: 1px solid #000;">
    </ng-template>
    <input type="text" #ipt style="border: 1px solid #000;">
</div>


ts

import {
  Router,
} from '@angular/router';
import { Component, ViewEncapsulation, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer, ViewContainerRef, TemplateRef } from '@angular/core';
import { AppService } from './app.service';
import { QuestionService } from '../components/question/question.service';
import { CommunicationService } from '../components/communication';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import Rx from 'rxjs/Rx';
class Hero {
  id: number;
  name: string;
}
require('./app.component.css');
declare var $: any;
@Component({
  selector: 'support-app',
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  intoNavPage: string = '';
  constructor(
    public appService: AppService,
    public questionService: QuestionService,
    public communicationService: CommunicationService,
    private router: Router,
    public renderer: Renderer
  ) {
  }
  ngOnInit() {
    // this.questionService.init();
    this.communicationService.init();
  }

// 获取template标记
  @ViewChild('input') InputRef: TemplateRef<any>;

  @ViewChild('input', { read: ViewContainerRef }) InputVcRef: ViewContainerRef;

  ngAfterViewInit() {
    console.log(this.InputRef);
    console.log(this.InputVcRef);
    //添加不显示的ng-template元素到DOM中
    this.InputVcRef.createEmbeddedView(this.InputRef);
  }

}

```

### 配合ng-container使用

```
<ng-template #input>
  <input type="text" style="border: 1px solid #000;">
</ng-template>

<ng-container *ngTemplateOutlet="input"></ng-container>
```

ng-template 视图容器在试图中默认不显示，需要添加到视图中

ng-container 逻辑容器，在视图中显示，用于划分DOM结构节点
