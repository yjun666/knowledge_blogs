import { setCookie, getCookie, removeCookie } from './cookie';
import { add, sub, mul, divide } from './decimal';
import {
  setEncryptValue,
  getEncryptValue
} from './encrypt';
import {
  trim,
  downloadAsXLS,
  timeago,
  isArray,
  isUndefined,
  isString,
  isObject,
  isBoolean,
  isNumber,
  isNull,
  isDate,
  isSomeType,
  getSum,
  getDifferenceVal,
  dateFormat,
  getParentEle,
  keepFloatDecimal
} from './function';

import { setStorage, getStorage, removeStorage } from './storage';
import { uuidv1, uuidv3, uuidv4, uuidv5 } from './uuid';




export function demo() {
  const a = 9.95;
  const b = 8.03;
  console.log(
    add(a, b),
    sub(a, b),
    mul(a, b),
    divide(a, b));

  console.log('');
  console.log('');
  console.log(dateFormat(new Date(), 'y-M'));
  console.log('keepFloatDecimal', keepFloatDecimal(10.1198, 100));
  console.log('keepFloatDecimal', keepFloatDecimal(10.12, 100));
  console.log('keepFloatDecimal', keepFloatDecimal(10.125, 100));
  console.log('keepFloatDecimal', keepFloatDecimal(10.1, 100));
  console.log('');
  console.log('');
  console.log('uuidv1', uuidv1());
  console.log('uuidv4', uuidv4());
  console.log('uuidv3', uuidv3('中国'), uuidv3('美国'), uuidv3('中国'));
  console.log('uuidv5', uuidv5('中国'), uuidv5('美国'), uuidv5('中国'));



}
