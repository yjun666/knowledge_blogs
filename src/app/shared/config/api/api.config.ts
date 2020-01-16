export interface ApiCommon {
  readonly searchHero: any;
  readonly createHero: any;
  readonly deleteHero: any;
  readonly query: any;
  readonly login: any;
}

// 地址url类型定义
export class ApiUrlConfig implements ApiCommon {
  readonly searchHero: string;
  readonly createHero: string;
  readonly deleteHero: string;
  readonly query: string;
  readonly login: string;
}

// 参数类型定义
export class ApiParamConfig implements ApiCommon {
  searchHero: {
    id: number;
    name: string;
  };
  deleteHero: {
    id: string;
  };
  createHero: {
    content: string,
  };
  login: any;
  query: {
    query: string;
  };
}


