import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ContentDetailsComponent, ContentDetailsService } from './components/contentDetails';
import { HeaderService, HeaderComponent } from './components/Header';

// directives
import { AppMarkedDirective, AppTitleHoverShowDirective } from './directives';

// auth
import { AuthGuard } from './auth';

// module
import { AlertModule } from './components/alert/alert.module';

const modules = [AlertModule];

const components = [
  HomeComponent,
  SideBarComponent,
  ContentDetailsComponent,
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
  ContentDetailsService,
  LoginService,
  AuthGuard,
  HeaderService,
  MarkdowService
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...directives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...modules
  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
