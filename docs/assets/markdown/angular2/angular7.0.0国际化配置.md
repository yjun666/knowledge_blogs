### 国际化配置

1. 安装 `@ngx-translate/core": "^11.0.1"`、`@ngx-translate/http-loader": "^4.0.0"` 依赖包
2. 开发 `language-translation.module` module文件 并在app.module中引入
3. 在assets下添加 `assets/i18n` 文件夹，配置需要国际化的json文件
4. 在需要的module中或者app.module 中引入 `import { TranslateModule } from '@ngx-translate/core';` 并注入到module中
5. 切换语言时使用 `this.translate.use(language);` language 为 `language-translation.module` module中注入的名称即i18n文件夹下的语言文件名称

ts中写法
```
import { TranslateService } from '@ngx-translate/core';
class XXXXXX{
    constructor(
            private http: HttpClient,
            private router: Router,
            private loginService: LoginService,
            private translate: TranslateService,
    ) { }

    public changeLang(language: string) {
        this.translate.use(language);
    }
}
```

---
```
html 中写法
<a href="javascript:void(0)" (click)="changeLang('en')"> // 点击切换语言时的写法及参数
    {{ 'English' | translate }} // 国际化时单词的写法 translate为内置的管道
</a>
```