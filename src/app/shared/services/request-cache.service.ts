import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { MessageService } from './message.service';

// 缓存请求的参数类型
export interface RequestCacheEntry {
  url: string; // 请求的地址
  response: HttpResponse<any>; // 完整的响应体
  lastRead: number; // 接口的存储时间
}

// 当前做缓存的类需要的方法及参数类型
export abstract class RequestCache {
  abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined; // 获取缓存的接口请求，返回值是响应体
  abstract put(req: HttpRequest<any>, response: HttpResponse<any>): void; // 设置缓存的接口请求，需要请求体和响应体，返回只为void
}

const maxAge = 30000; // maximum cache age (ms)

@Injectable()
export class RequestCacheWithMap implements RequestCache {
  cache = new Map<string, RequestCacheEntry>();
  constructor(private messenger: MessageService) { }
  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);
    // 如果缓存不存在那么直接返回undefined
    if (!cached) {
      return undefined;
    }
    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : ''; // 如果已经过期了返回
    this.messenger.add(
      `Found ${expired}cached response for "${url}".`);
    return isExpired ? undefined : cached.response; // 如果已经过期了返回undefined，否则返回已经保存的响应体
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams; // 获取请求地址
    this.messenger.add(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry); // 设置缓存

    // remove expired cache entries
    const expired = Date.now() - maxAge; // 设置过期时间

    this.cache.forEach(entry1 => {
      if (entry1.lastRead < expired) {  // 删除过期的接口
        this.cache.delete(entry1.url);
      }
    });

    this.messenger.add(`Request cache size: ${this.cache.size}.`);
  }
}
