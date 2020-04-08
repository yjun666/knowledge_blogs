// 缓存请求，以便于减少请求次数---------摘抄自官网
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHeaders, HttpRequest, HttpResponse,
  HttpInterceptor, HttpHandler
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

import { RequestCacheWithMap } from '../services/request-cache.service';
// const searchUrl = 'https://npmsearch.com/query';

const searchUrl = ['/list/searchHero', '/list/search'];
// const searchUrl = '/list/searchHero';

@Injectable()
export class CachingInterceptorService implements HttpInterceptor {
  constructor(private cache: RequestCacheWithMap) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cachable.
    if (!isCachable(req)) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);

    console.log(req.headers, req.headers.get('x-refresh'));
    // cache-then-refresh
    if (req.headers.get('x-refresh')) {
      const results$ = sendRequest(req, next, this.cache);
      console.log(this.cache, req.url);
      return cachedResponse ?
        results$.pipe(startWith(cachedResponse)) :
        results$;
    }
    console.log(this.cache, req.url);
    // cache-or-fetch
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}

/** Is this request cachable? */
function isCachable(req: HttpRequest<any>) {
  // Only GET requests are cachable
  return req.method === 'GET' &&
    // Only npm package search is cachable in this app
    searchUrl.some(x => req.url.indexOf(x) !== -1);
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCacheWithMap): Observable<HttpEvent<any>> {

  // No headers allowed in npm search request
  // const noHeaderReq = req.clone({ headers: new HttpHeaders() });
  return next.handle(req).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }
    })
  );
}
