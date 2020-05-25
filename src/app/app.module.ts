import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { environment } from '../environments/environment';
console.log(environment);
const isLog = environment.isLog; // 根据环境配置是否开启打印

// auth
import { AuthGuard } from './guard';

// interceptor拦截器
import { httpInterceptorProviders } from './interceptor';

// module
import { ADModule } from './components/shared/ad-banner/ad.module';
import { LanguageTranslationModule } from './modules/language-translation/language-translation.module';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
// service
import { MessageService } from './services/message.service';
import { RequestCacheWithMap } from './services/request-cache.service';
import { UploaderService } from './services/uploader.service';
import { RouterService } from './services/router.service';
import { ShardMethodService } from './services/share-method.service';
import { UpdataSubjectService } from './services/subject.service';
import { GetJsonService } from './services/getJson.service';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

const modules = [
  HttpClientJsonpModule,
  ADModule,
  LanguageTranslationModule
];

const components = [];
const directives = [];


const services = [
  AppService,
  AuthGuard,
  httpInterceptorProviders,
  MessageService,
  RequestCacheWithMap,
  UploaderService,
  SelectivePreloadingStrategyService,
  ShardMethodService,
  RouterService,
  UpdataSubjectService,
  GetJsonService,
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
