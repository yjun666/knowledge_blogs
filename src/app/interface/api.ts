export interface Api {
  readonly search: any;
  readonly create: any;
  readonly delete: any;
  readonly query: any;
  readonly login: any;
}

// 参数类型定义
export interface ApiParamConfig {
  search: {
    id: number;
    name: string;
  };
  delete: {
    id: string;
  };
  create: {
    content: string;
  };
  login: {
    client_id: string;
    client_secret: string;
    grant_type: string;
    scope: string;
    username: string;
    password: string;
  };
  query: {
    query: string;
  };
}
