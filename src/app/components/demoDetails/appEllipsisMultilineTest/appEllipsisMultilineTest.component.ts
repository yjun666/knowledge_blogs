import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-ellipsismultiline-test',
  template: `
  <!-- 多行文本溢出省略----start -->
  <div class="test_appEllipsisMultiline" [appEllipsisMultiline]='testAppEllipsisMultiline'>{{testAppEllipsisMultiline}}
  </div>
  <!-- 多行文本溢出省略----end -->
  <!-- 多行文本溢出省略----start -->
  <p nz-paragraph nzEllipsis [nzEllipsisRows]="3">
    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design
    language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
    applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by
    Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a
    design language for background applications, is refined by Ant UED Team.
  </p>
  <!-- 多行文本溢出省略----end-->`
})

export class EllipsismultilineComponent implements OnInit {
  testAppEllipsisMultiline = `阿斯顿发善良的空间焕发了可视电话将法拉盛快
  点恢复拉开升级换代饭卡精华水淀粉阿斯顿发空间哈善良的空间发挥阿斯顿发阿斯顿发
  阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发asdfasdflaksjdf
  lajsdflkjasdlfkajsdf阿拉山口大家发拉卡上的减肥啦空间受到法律框架阿斯顿
  发阿斯顿发sadly就阿斯顿浪费空间`; // 测试多行文本显示省略号三个.  ,js控制
  constructor() { }

  ngOnInit() { }
}
