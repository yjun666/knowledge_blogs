// 通过base64 重新cookie方法
// 设置cookie
import Cookies from 'js-cookie';
import { Base64 } from 'js-base64';
import { environment } from '../../environments/environment';

// 方法定义
let setCookie = (key: string, value: any, options?: object): any => { };
let getCookie = (key: string): any => { };
let removeCookie = (key: string): any => { };

// 方法重写
{
  setCookie = (key: string, value: any, options?: object) => {
    const newKey: string = environment.encrypt ? Base64.encode(key) : key;
    const newValue: any = environment.encrypt ? Base64.encode(value) : value;
    Cookies.set(newKey, newValue, options);
  };

  // getCookie = (name: string) => {
  getCookie = (key: string) => {
    const newKey: string = environment.encrypt ? Base64.encode(key) : key;
    // console.log(Cookies.get(newKey), newKey);
    if (Cookies.get(newKey)) {
      // console.log(Base64.decode(Cookies.get(newKey)));
      return Base64.decode(Cookies.get(newKey));
    }
    return null;
  };

  removeCookie = (key: string) => {
    const newKey: string = environment.encrypt ? Base64.encode(key) : key;
    try {
      Cookies.remove(newKey);
    } catch (error) {
      console.log(error);
    }
  };
}

export { setCookie, getCookie, removeCookie };
