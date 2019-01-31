import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUpdateService } from './app-update.service';
import { AppService } from './app.service';

// view 文件
import { HomeComponent, HomeService } from './view/home';
import { LoginComponent, LoginService } from './view/login';
import { MarkdownComponent, MarkdowService } from './view/markdown';


// components
import { SideBarComponent, SidebarService } from './components/sidebar';
import { MarkdownDetailsComponent, MarkdownDetailsService } from './components/markdownDetails';
import { HeaderService, HeaderComponent } from './components/header';

// directives
import { AppMarkedDirective, AppTitleHoverShowDirective } from './directives';

// auth
import { AuthGuard } from './auth';

// interceptor拦截器
import { httpInterceptorProviders } from '../app/interceptor';

// module
import { AlertModule } from './components/alert/alert.module';

const modules = [AlertModule];

const components = [
  HomeComponent,
  SideBarComponent,
  MarkdownDetailsComponent,
  LoginComponent,
  HeaderComponent,
  MarkdownComponent
];
const directives = [
  AppMarkedDirective,
  AppTitleHoverShowDirective
];
const services = [
  AppUpdateService,
  AppService,
  HomeService,
  SidebarService,
  MarkdownDetailsService,
  LoginService,
  AuthGuard,
  HeaderService,
  MarkdowService,
  httpInterceptorProviders
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
