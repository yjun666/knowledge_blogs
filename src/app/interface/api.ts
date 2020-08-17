// 总的都有哪些接口,定义为any类型，设置方法或者设置配置参数时必须有的
export interface Api {
  readonly search: any;
  readonly create: any;
  readonly delete: any;
  readonly login: any;
}

// 接口的配置 需要有 请求方式，请求地址
export class ApiConfig implements Api {
  readonly search: { method: string, url: string };
  readonly create: { method: string, url: string };
  readonly delete: { method: string, url: string };
  readonly login: { method: string, url: string };
}

