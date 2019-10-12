import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUpdateService } from './app-update.service';
import { AppService } from './app.service';

// view 文件
// import { HomeComponent, HomeService } from './view/home';
// import { LoginComponent, LoginService } from './view/login';
// import { MarkdownComponent, MarkdowService } from './view/markdown';
// import { RequestTestComponent, RequestTestService } from './view/requestTest';
// import { RxjsComponent } from './view/rxjs';
// import { LodashComponent } from './view/lodash';


// components
// import { SideBarComponent, SidebarService } from './components/sidebar';
// import { MarkdownDetailsComponent, MarkdownDetailsService } from './components/markdownDetails';
// import { HeaderService, HeaderComponent } from './components/header';
// import { RequestTestDetailsService, RequestTestDetailsComponent } from './components/requestTestDetails';
// import { UploaderComponent, UploaderService } from './components/upload';
// import { RxjsDetailsComponent } from './components/rxjsDetails';
// import { LodashDetailsComponent } from './components/lodashDetails';

// directives
// import { AppMarkedDirective, AppTitleHoverShowDirective } from './directives';

// auth
import { AuthGuard } from './shared/auth';

// interceptor拦截器
import { httpInterceptorProviders } from './shared/interceptor';

// module
import { AlertModule } from './components/alert/alert.module';
import { ADModule } from './components/ad-banner/ad.module';
import { LanguageTranslationModule } from '../app/shared/modules/language-translation/language-translation.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// service
import { MessageService } from './shared/services/message.service';
import { AdService } from './components/ad-banner/ad.service';
import { RequestCache, RequestCacheWithMap } from './shared/services/request-cache.service';

const modules = [
  AlertModule,
  HttpClientJsonpModule,
  ADModule,
  LanguageTranslationModule,
  NgZorroAntdModule
];

const components = [
  // HomeComponent,
  // SideBarComponent,
  // MarkdownDetailsComponent,
  // LoginComponent,
  // HeaderComponent,
  // MarkdownComponent,
  // RequestTestDetailsComponent,
  // RequestTestComponent,
  // UploaderComponent,
  // RxjsComponent,
  // RxjsDetailsComponent,
  // LodashComponent,
  // LodashDetailsComponent
];
const directives = [
  // AppMarkedDirective,
  // AppTitleHoverShowDirective
];

import { LoginService } from './shared/services/login.service';
import { LoggerService } from './shared/services/logger.service';
import { UploaderService } from './shared/services/uploader.service';
import { SelectivePreloadingStrategyService } from './shared/services/selective-preloading-strategy.service';

const services = [
  AppUpdateService,
  AppService,
  // HomeService,
  // SidebarService,
  // MarkdownDetailsService,
  LoginService,
  AuthGuard,
  // HeaderService,
  // MarkdowService,
  httpInterceptorProviders,
  MessageService,
  RequestCacheWithMap,
  // RequestTestDetailsService,
  // RequestTestService,
  UploaderService,
  SelectivePreloadingStrategyService,
  // AdService,
  {
    provide: LoggerService,
    // 输入参数控制是否开启打印
    useFactory: (selectivePreloadingStrategyService) => {
      return new LoggerService(true, selectivePreloadingStrategyService); // 使用useFactory 给服务添加参数
    },
    deps: [SelectivePreloadingStrategyService] // deps 中参数为传入useFactory方法的实参,如果该服务需要其他的服务依赖，那么从此处可以注入
  },
  { provide: NZ_I18N, useValue: zh_CN }
];
import { environment } from '../environments/environment';
console.log(environment);
const isLog = environment.isLog;

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
