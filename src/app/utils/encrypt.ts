import { Base64 } from 'js-base64';
import { environment } from '../../environments/environment';

let setEncryptValue = (value: any): any => { }
let getEncryptValue = (value: any): any => { }
{
  // 设置值是否加密 私有方法 不导出
  setEncryptValue = (value: any) => {
    return environment.encrypt ? Base64.encode(value) : value;
  }
  getEncryptValue = (value: any) => {
    return environment.encrypt ? Base64.decode(value) : value;
  }
}

export {
  setEncryptValue,
  getEncryptValue
}
