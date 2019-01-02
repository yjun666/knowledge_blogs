import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUpdateService } from './app-update.service';
import { AppService } from './app.service';

// view 文件
import { HomeComponent, HomeService } from './view/home';

// components
import { SideBarComponent, SidebarService } from './components/sidebar';
import { ContentDetailsComponent, ContentDetailsService } from './components/contentDetails';

// directives
import { AppMarkedDirective } from './directives/marked.directive';



const components = [HomeComponent, SideBarComponent, ContentDetailsComponent];
const directives = [AppMarkedDirective];
const services = [AppUpdateService, AppService, HomeService, SidebarService, ContentDetailsService];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...directives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule { }
