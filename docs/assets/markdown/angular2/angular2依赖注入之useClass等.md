#### angular2依赖注入之useClass等
```
useClass
<!-- app.module 中依赖注入时，本地调试使用mock数据 -->
providers: [{
    provide: HeroService, useClass: MockHeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService
}],
```

```
useFactory
<!-- 注入服务时可添加参数，例如loggerService在开发时传入true开启打印，发布时改为false可关闭打印 -->
providers: [
    ...services,
    {
        // 输入参数控制是否开启打印
        provide: LoggerService,
        useFactory: (selectivePreloadingStrategyService) => {
        return new LoggerService(true, selectivePreloadingStrategyService); // 使用useFactory 给服务添加参数
        },
        deps: [SelectivePreloadingStrategyService] // deps 中参数为传入useFactory方法的实参,如果该服务需要其他的服务依赖，那么从此处可以注入
    }
],
```

```
useValue

<!-- 如下代码使用Inject @Inject('apiUrl') 注入一个参数可使用useValue在modules注入服务时传入参数-->

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Heros, MockHeroData } from './herosType';
import { LoggerService } from '../../shared/services/logger.service';

@Injectable()
export class HeroService {
    heros: Array<Heros>;
    constructor(private loggerService: LoggerService,
        private http: HttpClient,
        @Inject('apiUrl') private apiUrl) { }

    getHeros(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}


providers: [
    {
        // provide: HeroService, useClass: MockHeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService,人工手动创建mock数据时需要与后台数据格式一致
        provide: HeroService, useClass: HeroService // 使用useclass进行mock数据与heroService中数据进行切换，当本地调试时可使用mock数据，使用线上数据时改为HeroService
    },
    {
        <!-- 使用useValue 方式注入参数 -->
        provide: 'apiUrl',
        useValue: 'http://localhost:3000/list/searchHero'
    }
],
declarations: [
    HeroComponent
],
exports: [
    RouterModule
]

    
```