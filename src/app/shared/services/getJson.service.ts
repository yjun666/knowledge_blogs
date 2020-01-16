import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { API } from '../config/api/api';
import { ApiCommon, ApiParamConfig, ApiUrlConfig } from '../config/api/api.config';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { Observable } from 'rxjs';

@Injectable()
export class GetJsonService implements ApiCommon {
  api: ApiCommon = API;
  constructor(
    private http: HttpClient
  ) {
    // this.searchHero({ id: 123, name: 'asdfasdf' })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  public login(param: ApiParamConfig['login']) {
    return this.post(this.api.login, param);
  }

  // 查询list列表所有内容
  public searchHero(param: ApiParamConfig['searchHero']): Observable<object> {
    // const headers = new HttpHeaders().set();
    const options = this.setOptions({
      headers: {
        Authorization: 'asdf-asd-fa-sdf-asdf-sdf-123123',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      reportProgress: false,
      responseType: 'json',
    });

    return this.get(this.api.searchHero, param, options);
  }
  // 创建hero
  public createHero(param: ApiParamConfig['createHero']): Observable<object> {
    return this.post(this.api.createHero, { content: '12312313' });
  }
  /**
   * 删除
   */
  public deleteHero(param: ApiParamConfig['deleteHero']) {
    return this.get(this.api.deleteHero, param);
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

  /**
   * 设置请求头等参数配置
   * @param options 请求头配置
   */
  private setOptions(options: any) {
    const obj = {
      withCredentials: true,
      reportProgress: false,
      responseType: 'json',
      ...options,
    };
    return obj;
  }



}
