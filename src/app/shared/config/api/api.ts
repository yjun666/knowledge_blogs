import { ApiUrlConfig, ApiParamConfig, ApiCommon } from './api.config';
import { environment } from '../../../../environments/environment';

// 集成 API 文档
export class Api {
  public api: ApiCommon;
  constructor() {
    this.api = this.getApi();
  }

  // 获取 过程是私有的，防止别人篡改接口
  private getApi(): ApiUrlConfig {
    const url = environment.apiUrl; // 谭俊东 test
    // const url = `http://10.112.95.137:8031`; // 谭俊东本地
    return {
      searchHero: `/list/search`, // 查询接口
      createHero: `/list/create`, // 创建
      deleteHero: `/list/destroy`, // 删除
      query: '',
      login: 'http://10.110.147.33:8015/oauth/rest_token' // 登陆接口
    };
  }
}

export const API: ApiUrlConfig = new Api().api;
