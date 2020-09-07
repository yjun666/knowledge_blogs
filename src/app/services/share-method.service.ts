import { Injectable } from '@angular/core';
// 设置公共方法模块，公共方法调用

@Injectable()
export class ShardMethodService {
  constructor() { }
  timeoutObj = {}; // setTimeout 集合
  intervalObj = {}; // setInterval 集合

  /**
   * 设置延时器集合
   * @param name 当前延时器名称
   * @param fun 当前要执行的方法
   * @param time 当前要延时的时间
   */
  public settimeout(name, fun, time) {
    this.timeoutObj[name] = setTimeout(fun, time);
  }
  /**
   * 清除延时器
   * @param name 要清除的延时器的名称
   * @param all 是否清除所有延时器
   */
  public clearTimeout(name, all) {
    if (all) {
      for (const [key, value] of Object.entries(this.timeoutObj)) {
        clearTimeout(this.timeoutObj[key]);
      }
    } else {
      clearTimeout(this.timeoutObj[name]);
    }
  }

  /**
   * 设置定时器集合
   * @param name 当前定时器名称
   * @param fun 当前要执行的方法
   * @param time 当前要定时的时间
   */
  public setInterval(name, fun, time) {
    this.intervalObj[name] = setInterval(fun, time);
  }

  /**
   * 清除定时器
   * @param name 要清除的定时器的名称
   * @param all 是否清除所有定时器
   */
  public clearInterval(name, all) {
    if (all) {
      for (const [key, value] of Object.entries(this.intervalObj)) {
        clearInterval(this.intervalObj[key]);
      }
    } else {
      clearInterval(this.intervalObj[name]);
    }
  }

  /**
   * 动态设置css样式
   * @param ele 要设置的元素
   * @param styleObj 要设置的样式
   */
  public setCss(ele, styleObj) {
    if (!ele) {
      console.log('当前元素不存在');
      return;
    }
    if (styleObj.empty) {
      ele.style = '';
      return;
    }

    // 如果是一个数组，那么给所有元素添加样式
    if (this.typeof(ele) === 'Array') {
      ele.map(x => {
        for (const [key, value] of Object.entries(styleObj)) {
          x.style[key] = value;
        }
      });
      return;
    }
    // 如果不是一个数组，那么单独给元素添加样式
    for (const [key, value] of Object.entries(styleObj)) {
      ele.style[key] = value;
    }
  }


  // 判断当前是什么类型
  public typeof(param) {
    const obj = {
      '[object Array]': 'Array',
      '[object Undefined]': 'undefined',
      '[object String]': 'string',
      '[object Object]': 'object',
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object Null]': 'null',
      '[object Date]': 'date'
    };
    return obj[Object.prototype.toString.apply(param)];
  }

  // 是否是多个类型中的一个，例如当前参数是否属于null或者undefined
  public isSomeType(type: string[], param) {
    return type.some(x => this.typeof(param) === x);
  }

  /**
   * 求和
   * @param argument 求和的所有参数
   */
  public getSum() {
    return Array.from(arguments).reduce((preValue, curValue, index, array) => {
      console.log(parseInt(preValue, 10), parseInt(curValue, 10));
      return parseInt(preValue, 10) + parseInt(curValue, 10);
    });
  }

  /**
   * 求差值
   * @param argument 求差值的所有参数
   */
  public getDiffVal() {
    return Array.from(arguments).reduce((preValue, curValue, index, array) => {
      console.log(parseInt(preValue, 10), parseInt(curValue, 10));
      return parseInt(preValue, 10) - parseInt(curValue, 10);
    });
  }


  /**
   * 动态创建选择文件按钮   input type=file   用动态创建的方式容易设置选择文件按钮的样式
   * @param callback 选择文件成功后的回调函数
   * @param vm this指向，用于保存当前上传文件的文件详细信息
   */
  public getFile(callback, vm) {
    vm.fileList = [];
    vm.fileList.length = 0;

    const ipt = document.createElement('input');
    ipt.accept = '.xlsx,.xls';
    ipt.id = 'uploadFileOnlyId';
    ipt.title = '';
    ipt.type = 'file';
    ipt.name = 'file';
    ipt.style.display = 'none';
    document.body.appendChild(ipt);

    ipt.click();
    const that = this;
    // tslint:disable-next-line:space-before-function-paren
    ipt.onchange = function () {
      const self: any = this;
      console.log(self, self.files[0]);
      vm.fileList.push(self.files[0]);
      // console.log(vm.fileList);
      // tslint:disable-next-line:no-unused-expression
      callback && callback(vm);
      setTimeout(() => {
        document.body.removeChild(document.getElementById('#uploadFileOnlyId'));
      }, 1000);
    };
    console.log(vm.fileList);
  }
}
