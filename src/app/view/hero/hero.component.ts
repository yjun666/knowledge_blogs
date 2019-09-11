import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Heros } from './herosType';
import { LoggerService } from '../../shared/services/logger.service';

@Component({
  selector: 'app-hero',
  templateUrl: `./hero.component.html`,
  styleUrls: [`./hero.component.scss`]
})
export class HeroComponent implements OnInit {
  heros: Array<Heros>;

  constructor(private heroService: HeroService,
    private loggerService: LoggerService) { }
  testAppEllipsisMultiline = '阿斯顿发善良的空间焕发了可视电话将法拉盛快点恢复拉开升级换代饭卡精华水淀粉阿斯顿发空间哈善良的空间发挥阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发asdfasdflaksjdflajsdflkjasdlfkajsdf阿拉山口大家发拉卡上的减肥啦空间受到法律框架阿斯顿发阿斯顿发sadly就阿斯顿浪费空间'; // 测试多行文本显示省略号三个.  ,js控制

  ngOnInit() {
    this.loggerService.log(() => { console.log('Fetching heros...'); });
    this.heroService.getHeros()
      .subscribe(res => {
        this.heros = res.data;
        console.log(this.heros);
        console.log(res);
      });
  }
}
