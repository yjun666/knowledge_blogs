import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent, HomeService } from './view/home';

// components
import { SideBarComponent, SidebarService } from './components/sidebar';
import { ContentDetailsComponent, ContentDetailsService } from './components/contentDetails';



const components = [HomeComponent, SideBarComponent, ContentDetailsComponent];
const directives = [];
const services = [HomeService, SidebarService, ContentDetailsService];

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
