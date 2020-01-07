import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTestDetailsComponent } from './requestTestDetails.component';
import { httpInterceptorProviders } from '../../../shared/interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: [RequestTestDetailsComponent],
  providers: [httpInterceptorProviders],
  exports: [RequestTestDetailsComponent],
  bootstrap: [RequestTestDetailsComponent]
})
export class RequestTestDetailsModule { }
