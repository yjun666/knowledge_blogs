// 通过base64 重新cookie方法
// 设置cookie
import Cookies from 'js-cookie';
import { setEncryptValue, getEncryptValue } from './encrypt';

// 方法定义
let setCookie = (key: string, value: any, options?: object): any => { };
let getCookie = (key: string): any => { };
let removeCookie = (key: string): any => { };


// 方法重写
{
  setCookie = (key: string, value: any, options?: object) => {
    const newKey: string = setEncryptValue(key);
    const newValue: any = setEncryptValue(value);
    Cookies.set(newKey, newValue, options);
  };

  // getCookie = (name: string) => {
  getCookie = (key: string) => {
    const newKey: string = setEncryptValue(key);
    // console.log(Cookies.get(newKey), newKey);
    if (Cookies.get(newKey)) {
      // console.log(getEncryptValue(Cookies.get(newKey)));
      return getEncryptValue(Cookies.get(newKey));
    }
    return null;
  };

  removeCookie = (key: string) => {
    const newKey: string = setEncryptValue(key);
    try {
      Cookies.remove(newKey);
    } catch (error) {
      console.log(error);
    }
  };
}

export { setCookie, getCookie, removeCookie };
