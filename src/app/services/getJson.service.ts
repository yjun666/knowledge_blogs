import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from '../config/api/api';
import { Api, ApiParamConfig } from '../interface/api';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class GetJsonService {
  api: Api = API_CONFIG;
  constructor(
    private http: HttpClient
  ) {
    // this.search({ id: 123, name: 'asdfasdf' })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  public login(param: ApiParamConfig['login']) {
    return this.post(this.api.login.url, param);
  }

  // 查询list列表所有内容
  public search(param: ApiParamConfig['search']): Observable<object> {
    // const headers = new HttpHeaders().set();
    const options = {
      headers: {
        Authorization: 'asdf-asd-fa-sdf-asdf-sdf-123123',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      reportProgress: false,
      responseType: 'json',
    };

    return this.get(this.api.search.url, param, options).pipe(retry(3));
  }
  // 创建
  public create(param: ApiParamConfig['create']): Observable<object> {
    return this.post(this.api.create.url, { content: '12312313' }).pipe(retry(3));
  }
  /**
   * 删除
   */
  public delete(param: ApiParamConfig['delete']) {
    return this.get(this.api.delete.url, param);
  }

  query() { }


  /**
   * @param url 地址栏
   * @param param 参数
   * @param options 其他配置，请求头等内容
   */
  private get(url, param, options?) {
    options = options ? options : {};
    const req = Object.assign(
      {},
      {
        params: param
      },
      {
        ...options
      });
    console.log(req, ...options);
    return this.http.get(url, req);
  }
  /**
   * @param url 地址栏
   * @param param 参数
   * @param options 其他配置，请求头等内容
   */
  private post(url, param, options?) {
    options = options ? options : {};
    const req = Object.assign(
      {},
      {
        ...options
      });
    console.log(req, ...options);
    return this.http.post(url, param, options);
  }
}
