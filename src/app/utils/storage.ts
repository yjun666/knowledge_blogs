import { setEncryptValue, getEncryptValue } from './encrypt';

let setStorage = (name: string, value: any) => { };
let getStorage = (name: string) => { };
let removeStorage = (name: string) => { };

{
  // 设置sessionStorage
  setStorage = (name: string, value: any) => {
    name = setEncryptValue(name);
    value = typeof value === 'string' ? value : JSON.stringify(value);
    value = setEncryptValue(value);
    sessionStorage.setItem(name, value);
  };

  // 获取sessionStorage
  getStorage = (name): any => {
    name = setEncryptValue(name); // 解密name值
    let value = sessionStorage.getItem(name); // 获取value
    if (value) {
      value = getEncryptValue(value); // 解密value值
    }
    // 如果是string json，那么parse
    if (value && (value.indexOf('[') !== -1 || value.indexOf('{') !== -1)) {
      value = JSON.parse(value);
    }
    return value;
  };
  // 删除sessionStorage
  removeStorage = (name) => {
    name = setEncryptValue(name);
    sessionStorage.removeItem(name);
  };
}

export { setStorage, getStorage, removeStorage };
