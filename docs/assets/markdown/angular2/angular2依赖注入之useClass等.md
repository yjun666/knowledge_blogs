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
    
```