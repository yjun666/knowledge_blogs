import { Base64 } from 'js-base64';
import { environment } from '../../environments/environment';

let setSessionStorage = (name: string, value: any) => { };
let getSessionStorage = (name: string) => { };
let removeSessionStorage = (name: string) => { };

{
  // 设置sessionStorage
  setSessionStorage = (name: string, value: any) => {
    name = environment.encrypt ? Base64.encode(name) : name;
    value = typeof value === 'string' ? value : JSON.stringify(value);
    value = environment.encrypt ? Base64.encode(value) : value;
    sessionStorage.setItem(name, value);
  };

  // 获取sessionStorage
  getSessionStorage = (name): any => {
    name = environment.encrypt ? Base64.encode(name) : name;
    let value = sessionStorage.getItem(name);
    value = value && environment.encrypt ? Base64.decode(value) : value;
    if (value && (value.indexOf('[') !== -1 || value.indexOf('{') !== -1)) {
      value = JSON.parse(value);
    }
    return value;
  };
  // 删除sessionStorage
  removeSessionStorage = (name) => {
    name = environment.encrypt ? Base64.encode(name) : name;
    sessionStorage.removeItem(name);
  };
}
