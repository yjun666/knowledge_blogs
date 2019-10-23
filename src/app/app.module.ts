import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUpdateService } from './app-update.service';
import { AppService } from './app.service';

import { environment } from '../environments/environment';
console.log(environment);
const isLog = environment.isLog; // 根据环境配置是否开启打印

// auth
import { AuthGuard } from './shared/auth';

// interceptor拦截器
import { httpInterceptorProviders } from './shared/interceptor';

// module
import { AlertModule } from './components/alert/alert.module';
import { ADModule } from './components/ad-banner/ad.module';
import { LanguageTranslationModule } from '../app/shared/modules/language-translation/language-translation.module';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
// service
import { MessageService } from './shared/services/message.service';
import { RequestCacheWithMap } from './shared/services/request-cache.service';
import { LoginService } from './shared/services/login.service';
import { LoggerService } from './shared/services/logger.service';
import { UploaderService } from './shared/services/uploader.service';
import { ShardMethodService } from './shared/services/share-method.service';
import { SelectivePreloadingStrategyService } from './shared/services/selective-preloading-strategy.service';

const modules = [
  AlertModule,
  HttpClientJsonpModule,
  ADModule,
  LanguageTranslationModule
];

const components = [];
const directives = [];


const services = [
  AppUpdateService,
  AppService,
  LoginService,
  AuthGuard,
  httpInterceptorProviders,
  MessageService,
  RequestCacheWithMap,
  UploaderService,
  SelectivePreloadingStrategyService,
  ShardMethodService,
  {
    provide: LoggerService,
    // 输入参数控制是否开启打印
    useFactory: (selectivePreloadingStrategyService) => {
      return new LoggerService(isLog, selectivePreloadingStrategyService); // 使用useFactory 给服务添加参数
    },
    deps: [SelectivePreloadingStrategyService] // deps 中参数为传入useFactory方法的实参,如果该服务需要其他的服务依赖，那么从此处可以注入
  },
  { provide: NZ_I18N, useValue: zh_CN }
];


@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...directives
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...modules
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
