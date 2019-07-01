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
import { AuthGuard } from './auth';

// interceptor拦截器
import { httpInterceptorProviders } from '../app/interceptor';

// module
import { AlertModule } from './components/alert/alert.module';
import { ADModule } from './components/ad-banner/ad.module';

// service
import { MessageService } from './shared/services/message.service';
import { AdService } from './shared/services/ad.service';
import { RequestCache, RequestCacheWithMap } from './shared/services/request-cache.service';

const modules = [AlertModule, HttpClientJsonpModule, ADModule];

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
  AdService
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
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
