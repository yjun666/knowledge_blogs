import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Heros } from './herosType';
import { LoggerService } from '../../../shared/services/logger.service';
import { GetJsonService } from '../../../shared/services/getJson.service';

@Component({
  selector: 'app-hero',
  templateUrl: `./hero.component.html`,
  styleUrls: [`./hero.component.scss`]
})
export class HeroComponent implements OnInit {
  heros: Array<Heros> = [{ id: 123, name: '123', value: 123, content: '123111', age: 12 }];
  testAppEllipsisMultiline = `阿斯顿发善良的空间焕发了可视电话将法拉盛快
  点恢复拉开升级换代饭卡精华水淀粉阿斯顿发空间哈善良的空间发挥阿斯顿发阿斯顿发
  阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发asdfasdflaksjdf
  lajsdflkjasdlfkajsdf阿拉山口大家发拉卡上的减肥啦空间受到法律框架阿斯顿
  发阿斯顿发sadly就阿斯顿浪费空间`; // 测试多行文本显示省略号三个.  ,js控制

  constructor(
    private heroService: HeroService,
    private getJson: GetJsonService,
    private loggerService: LoggerService
  ) { }


  ngOnInit() {
    console.log('Fetching heros...');
  }
  getHeros() {
    this.heroService.getHeros()
      .subscribe(res => {
        this.heros = res.data;
        console.log(res);
      });
    // this.getJson.searchHero({ id: 123, name: 'asdfasdf' })
    //   .subscribe((res: any) => {
    //     this.heros = res.data;
    //   });
  }


  /**
   * 创建英雄
   */
  public createHero(content, name, value, age) {
    const param = {
      content: content.value,
      // id: 'mnbvcxz' + parseInt(String(Math.random() * 1000000000000), 10),
      // name: name.value,
      // value: value.value,
      // age: age.value,
    };
    this.getJson.createHero(param)
      .subscribe((data) => {
        this.getHeros();
      });
  }
  public deleteHero(id: string) {
    this.getJson.deleteHero({ id })
      .subscribe((data) => {
        this.getHeros();
      });
  }
}
