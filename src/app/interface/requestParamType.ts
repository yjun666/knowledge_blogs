/**
 * 查询接口参数类型定义
 */
export interface Search {
  id: number;  // id id
  name: string; // name 名字
}
/**
 * 删除接口参数类型定义
 */
export interface Delete {
  id: string; // id
}
/**
 * 创建接口参数类型定义
 */
export interface Create {
  content: string; // 名称
}
/**
 * 登陆接口参数类型定义
 */
export interface Login {
  client_id: string;
  client_secret: string;
  grant_type: string;
  scope: string;
  username: string;
  password: string;
}
/**
 * 查询接口参数类型定义
 */
export interface Query {
  q: string;
}
