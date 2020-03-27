import { Api } from '../../interface/api';

// api 定义
export const API_CONFIG: Api = {
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
    method: 'post',
    url: '/list/destroy',
  },
  query: {
    method: 'get',
    url: 'https://npmsearch.com/query?q=vue',
  },
  // 登陆接口
  login: {
    method: 'post',
    url: 'http://10.110.147.33:8015/oauth/rest_token',
  }
};
