import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API_CONFIG, Api, requestParamType } from '../api/api';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

@Injectable()
export class GetJsonService implements Api {
  api: Api = API_CONFIG;
  timeout = 2000;
  constructor(
    private http: HttpClient
  ) {
    // this.setRequest();
  }


  public login(param: requestParamType.Login) {
    const { method, url } = this.getApiParam('login');
    return this[method](url, param);
  }

  // 查询list列表所有内容
  public search(param: requestParamType.Search): Observable<object> {
    // const headers = new HttpHeaders().set();
    const options = {
      headers: {
        Authorization: 'asdf-asd-fa-sdf-asdf-sdf-123123',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      reportProgress: false,
      responseType: 'json',
    };
    const { method, url } = this.getApiParam('search');
    return this[method](url, param, options);
  }
  // 创建
  public create(param): Observable<object> {
    const { method, url } = this.getApiParam('create');
    return this[method](url, { content: '12312313' });
  }
  /**
   * 删除
   */
  public delete(param) {
    const { method, url } = this.getApiParam('delete');
    return this[method](url, param);
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
        observe: 'response'  // 加入该参数可获取完整的响应体
      },
      options
    );
    return this.http.get(url, req).pipe(
      timeout(this.timeout), // 超时
      catchError(e => { // 超时处理
        if (e.name === 'TimeoutError') {
          console.warn(`${e.name}`); // 处理超时
        }
        console.log(e);
        // tslint:disable-next-line: no-string-throw
        throw new Error(e);
      })
    );
  }
  /**
   * @param url 地址栏
   * @param param 参数
   * @param options 其他配置，请求头等内容
   */
  private post(url, param, options?) {
    options = options ? options : {};
    const req = Object.assign(
      {
        // headers: {
        //   'Content-Type': 'application/json;charset=UTF-8' // 默认json
        // },
        observe: 'response',  // 加入该参数可获取完整的响应体
      },
      options
    );
    return this.http.post(url, param, req).pipe(
      timeout(this.timeout), // 超时
      catchError(e => { // 超时处理
        if (e.name === 'TimeoutError') {
          console.warn(`${e.name}`); // 处理超时
        }
        console.log(e);
        // tslint:disable-next-line: no-string-throw
        throw new Error(e);
      })
    );
  }

  /**
   * 获取请求的url地址，减少开发http请求方法时多层级获取url地址
   * @param type 获取的是哪一个请求API的url地址
   */
  private getApiParam(type: string) {
    const method = this.api[type].method;
    const url = this.api[type].url;
    return { method, url };
  }

  /**
   * 两种设置请求方法，一种是下边这种根据配置文件进行动态设置，另一种是手动开发，上边那种
   */
  private setRequest() {
    for (const [key, value] of Object.entries(this.api)) {
      this[key] = (params, isFormData = false, options = {}) => {
        let newParams: any = {};
        if (params && isFormData) {
          newParams = new FormData();
          // tslint:disable-next-line: forin
          for (const i in params) {
            newParams.append(i, params[i]);
          }
        } else {
          newParams = params;
        }
        const { method, url } = value;
        return this[method](url, newParams, options);
      };
    }
  }
}
