/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SetAuthorInterceptorService } from './setAuthor.service';
import { LoggingInterceptor } from './loggingInterceptor.service';
import { CachingInterceptorService } from './cacheReq.service';
import { UploadInterceptor } from './uploadInterceptor.service';
import { HandleErrorInterceptorService } from './handleError.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SetAuthorInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptorService, multi: true },
];
