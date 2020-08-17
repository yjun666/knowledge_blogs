import { Api, ApiConfig } from '../interface/api';
import * as requestParamType from '../interface/requestParamType';

/**
 * @param Api 总的都有哪些接口，需要实现的方法，设置为any类型
 * @param requestParamType 接口的请求参数类型定义
 * @param ApiConfig 配置文件的参数类型定义
 */
export { requestParamType, Api, ApiConfig };

// api 定义
export const API_CONFIG: ApiConfig = {
  // 查询接口
  search: {
    method: 'get',
    url: '/list/search'
  },
  // 创建
  create: {
    method: 'post',
    url: '/list/create',
  },
  // 删除
  delete: {
    method: 'get',
    url: '/list/destroy',
  },
  // 登陆接口
  login: {
    method: 'post',
    url: '/oauth/rest_token',
  }
};

