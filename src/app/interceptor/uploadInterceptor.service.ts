// 摘抄自官网demo----http一栏,貌似只能模拟进度条播放，在newwork中看不到接口调用
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse,
  HttpEventType, HttpProgressEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Simulate server replying to file upload request */
@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/upload/file') === -1) {
      return next.handle(req);
    }
    const delay = 300; // TODO: inject delay?
    return createUploadEvents(delay);
  }
}

/** Create simulation of upload event stream */
function createUploadEvents(delay: number) {
  // Simulate XHR behavior which would provide this information in a ProgressEvent
  const chunks = 20;
  const total = 123456789101112131415;
  const chunkSize = Math.ceil(total / chunks);

  return new Observable<HttpEvent<any>>(observer => {
    // notify the event stream that the request was sent.
    observer.next({ type: HttpEventType.Sent });

    uploadLoop(0);

    function uploadLoop(loaded: number) {
      // N.B.: Cannot use setInterval or rxjs delay (which uses setInterval)
      // because e2e test won't complete. A zone thing?
      // Use setTimeout and tail recursion instead.
      setTimeout(() => {
        loaded += chunkSize;

        if (loaded > total) {
          const doneResponse = new HttpResponse({
            status: 201, // OK but no body;
          });
          console.log(doneResponse);
          observer.next(doneResponse);
          observer.complete();
          return;
        }

        const progressEvent: HttpProgressEvent = {
          type: HttpEventType.UploadProgress,
          loaded,
          total
        };
        observer.next(progressEvent);
        uploadLoop(loaded);
      }, delay);
    }
  });
}
