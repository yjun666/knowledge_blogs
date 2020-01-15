import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTestComponent } from './requestTest.component';
import { httpInterceptorProviders } from '../../../shared/interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: [RequestTestComponent],
  providers: [httpInterceptorProviders],
  exports: [RequestTestComponent],
  bootstrap: [RequestTestComponent]
})
export class RequestTestModule { }
