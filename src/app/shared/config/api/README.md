api.ts 请求地址集合

api.config.ts ts 强类型配置

- ApiCommon 公共的 api 的所有的请求接口的 interface
- ApiUrlConfig 请求地址的类型配置，可有可无，均为 string
- ApiParamConfig 请求参数的类型配置,调用时请求参数需要与定义的请求参数类型相同 实现了 ApiCommon 接口
