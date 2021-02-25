#### function 
```
import { add, sub, mul, divide } from './decimal';
import { KeepFloatDecimalType } from '../interface/common';

// 方法定义
// 去掉字符串的空格
let trim = (str: string, type: number): any => { };
// 下载为XLS表格
let downloadAsXLS = (res: any) => { };
// dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
let timeago = (dateTimeStamp: number) => { };

let isArray = (param: any) => { }; // 是否是数组类型
let isUndefined = (param: any) => { }; // 是否是undefined类型
let isString = (param: any) => { }; // 是否是string类型
let isObject = (param: any) => { }; // 是否是object类型
let isBoolean = (param: any) => { }; // 是否是boolean类型
let isNumber = (param: any) => { }; // 是否是number类型
let isNull = (param: any) => { }; // 是否是null类型
let isDate = (param: any) => { }; // 是否是date类型
let isSomeType = (type: string[], param) => { }; // 是否是多个类型中的其中一种类型
/**
 * 获取指定类型的父级元素,或者当前元素就是我们要找的元素
 * @param vDate 日期
 * @param params 格式模板
 */
let dateFormat = (vDate: Date, params: string): string => '2020-01-01'; // 转换日期类型为字符串格式
/**
 * 获取指定类型的父级元素,或者当前元素就是我们要找的元素
 * @param ele 需要查找的当前元素
 * @param parent 指定父级元素的id或者className或者元素类型
 * @param count 最多多少查询多少层级停止查询
 */
let getParentEle = (ele: any, parent: any, count?: number): any => '';

/**
 * 是否需要转化成为百分比，如果需要并且保留小数  就是 num*10000/100
 */
let keepFloatDecimal = (item: KeepFloatDecimalType) => { }


// 求和
function getSum() {
  return Array.from(arguments).reduce((preValue, curValue, index, array) => {
    console.log(parseInt(preValue, 10), parseInt(curValue, 10));
    return parseInt(preValue, 10) + parseInt(curValue, 10);
  });
}
// 求差值
function getDifferenceVal() {
  return Array.from(arguments).reduce((preValue, curValue, index, array) => {
    console.log(parseInt(preValue, 10), parseInt(curValue, 10));
    return parseInt(preValue, 10) - parseInt(curValue, 10);
  });
}

// 如果时间是个位数，就补0
function addZero(timeNum: number) {
  return timeNum < 10 ? '0' + timeNum : timeNum
}


// 方法重写
{
  /**
   * 去掉字符串的空格
   * @param str 字符串
   * @param type 类型 清除哪部分的空字符串,1:清除所有空格、2：清除前后空格、3：清除前空格、4:清除后空格
   */
  trim = (str, type) => {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  }

  // 下载为XLS表格
  downloadAsXLS = (res: any) => {

    let fileName = 'data.xlsx'; // 默认文件名

    // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
    if (res.headers['content-disposition']) {
      fileName = res.headers['content-disposition'].split(';')[1].split('=')[1];
    }

    const blob = res.data;
    console.log('下载文件=>：', blob);
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (e: any) => {
      const a = document.createElement('a');
      a.download = fileName;

      a.href = e.target.result;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }


  // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  timeago = (dateTimeStamp: number) => {

    let result = '';
    const minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const halfamonth = day * 15;
    const month = day * 30;
    const now = new Date().getTime(); // 获取当前时间毫秒
    const diffValue = now - dateTimeStamp; // 时间差
    if (diffValue < 0) {
      return;
    }
    const minC = diffValue / minute; // 计算时间差的分，时，天，周，月
    const hourC = diffValue / hour;
    const dayC = diffValue / day;
    const weekC = diffValue / week;
    const monthC = diffValue / month;
    if (monthC >= 1 && monthC <= 3) {
      result = ' ' + parseInt(String(monthC), 10) + '月前';
    } else if (weekC >= 1 && weekC <= 3) {
      result = ' ' + parseInt(String(weekC), 10) + '周前';
    } else if (dayC >= 1 && dayC <= 6) {
      result = ' ' + parseInt(String(dayC), 10) + '天前';
    } else if (hourC >= 1 && hourC <= 23) {
      result = ' ' + parseInt(String(hourC), 10) + '小时前';
    } else if (minC >= 1 && minC <= 59) {
      result = ' ' + parseInt(String(minC), 10) + '分钟前';
    } else if (diffValue >= 0 && diffValue <= minute) {
      result = '刚刚';
    } else {
      const datetime = new Date();
      datetime.setTime(dateTimeStamp);
      const Nyear = datetime.getFullYear();
      const Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      const Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
      const Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
      const Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
      const Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
      result = Nyear + '-' + Nmonth + '-' + Ndate;
    }
    return result;
  };

  isArray = (param) => {
    return Object.prototype.toString.apply(param) === '[object Array]';
  };
  isUndefined = (param) => {
    return Object.prototype.toString.apply(param) === '[object Undefined]';
  };
  isString = (param) => {
    return Object.prototype.toString.apply(param) === '[object String]';
  };
  isObject = (param) => {
    return Object.prototype.toString.apply(param) === '[object Object]';
  };
  isBoolean = (param) => {
    return Object.prototype.toString.apply(param) === '[object Boolean]';
  };
  isNumber = (param) => {
    return Object.prototype.toString.apply(param) === '[object Number]';
  };
  isNull = (param) => {
    return Object.prototype.toString.apply(param) === '[object Null]';
  };
  isDate = (param) => {
    return Object.prototype.toString.apply(param) === '[object Date]';
  };
  // 是否是多个类型中的一个，例如当前参数是否属于null或者undefined
  isSomeType = (type: string[], param) => {
    return type.some(x => this[x](param));
  };

  // 转换日期格式
  dateFormat = (vDate: Date, params: string) => {
    const date = new Date(vDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const arr = params.split('')
    let result = ''
    for (let i = 0; i < arr.length; i += 2) {
      const tem = arr[i + 1] === undefined ? '' : arr[i + 1]
      console.log(arr, tem);
      switch (arr[i]) {
        case 'y':
          result += addZero(year) + tem
          break
        case 'M':
          result += addZero(month) + tem
          break
        case 'd':
          result += addZero(day) + tem
          break
        case 'h':
          result += addZero(hour) + tem
          break
        case 'm':
          result += addZero(minute) + tem
          break
        case 's':
          result += addZero(second)
          break
      }
    }
    return result
  }

  /**
   * 获取指定类型的父级元素,或者当前元素就是我们要找的元素
   * @param ele 需要查找的当前元素
   * @param parent 指定父级元素的id或者className或者元素类型
   * @param count 最多多少查询多少层级停止查询
   */
  getParentEle = (ele: any, parent: any, count?: number): any => {
    const str = parent.replace(/\.|#/, '');
    // console.log(count);
    count = count ? count : 0;
    if (!ele) {
      console.log('当前元素不存在', count);
      return;
    }
    const parentElement = ele.parentElement;

    if (
      parent.indexOf('.') !== -1 &&
      parentElement &&
      parentElement.className &&
      parentElement.className.indexOf(str) !== -1
    ) {
      return parentElement;
    } else if (parent.indexOf('#') !== -1 && parentElement && parentElement.id === str) {
      return parentElement;
    } else if (parentElement && parentElement.tagName === parent.toUpperCase()) {
      return parentElement;
    } else if (parent.indexOf('.') !== -1 && ele.className && ele.className.indexOf(str) !== -1) {
      return ele;
    } else if (parent.indexOf('#') !== -1 && ele.id === str) {
      return ele;
    } else if (ele.tagName === parent.toUpperCase()) {
      return ele;
    }
    // 最多查询7个层级则退出，查询的层级上限可通过参数传入
    if (count > 7 || ele.tagName === 'BODY') {
      // console.log("找不到",count);
      return;
    }
    count++;
    return getParentEle(parentElement, parent, count);
  }

  /**
   * 是否需要转化成为百分比，如果需要并且保留小数  就是 num*10000/100
   */
  keepFloatDecimal = (item: KeepFloatDecimalType) => {
    // tslint:disable-next-line: prefer-const
    let [num, fixedNum, isPercent, defValue, isForceToFixed, unit, truncType]: any = [item.num, item.fixedNum, item.isPercent, item.defValue, item.isForceToFixed, item.unit, item.truncType];

    if (!defValue && defValue !== 0) {
      // 默认值没有传值时，默认默认值是'-'
      defValue = '-';
    }

    if (!fixedNum) {
      // 保留小数位数默认没有传值时，默认保留0位小数
      fixedNum = 0;
    }

    if (typeof isPercent === 'boolean' || typeof isPercent === 'undefined') {

      /**
       * 是否转换百分比如果为undefined或者false，那么取值为0即不需要转换百分比，如果为true，那么取值为100，默认转换为百分比，如果为number，取值1000,10000，等，显示千分比，万分比
       * isPercent 取值
       * undefined  不需要转换百分比
       * false  不需要转换百分比
       * true  转换为百分比
       * number  转换为百分比，千分比还是万分比等等
       */
      isPercent = isPercent ? 100 : 0;
    }
    // 设置取整类型
    if (!truncType) {
      truncType = 'floor';
    }

    let result: string | number = parseFloat(num);
    if (isNaN(result)) {
      // alert('传递参数错误，请检查！');
      return defValue;
    }
    const floatNum = Math.pow(10, fixedNum); // 保留的小数位数
    const cont = isPercent ? mul(floatNum, isPercent) : floatNum; // 如果需要转换成为百分比那么需要多乘100
    // result = divide(Math.floor(mul(num, cont)), floatNum);
    result = divide((Math as any)[truncType](mul(num, cont)), floatNum);

    /* 如果需要强制保留小数，即如果小数位数不足，用0不足------start */
    if (isForceToFixed) {
      // result = result.toFixed(fixedNum);

      result = result.toString();
      if (result.indexOf('.') !== -1) {
        const decimalsLength = result.split('.')[1].length;
        let aa = 0;
        while (decimalsLength + aa < fixedNum) {
          result = result + '0';
          aa++;
        }
      } else {
        result = result + '.';
        for (let i = 0; i < fixedNum; i++) {
          result = result + '0';
        }
      }
    }
    /* 如果需要强制保留小数，即如果小数位数不足，用0不足------end */
    result = unit || unit === '' ? result + unit : result; // 如果单位存在则添加单位，否则不添加
    return result;
  }
}


export {
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
};


```
