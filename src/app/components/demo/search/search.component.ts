import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { setUuid4 } from '../../../utils/uuid';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchContentArr: {
    id: string, // id 唯一标识
    val: string, // 当前值
    oldVal: string, // 旧的值
    isText: boolean, // 当前是文本框还是输入框
    isError: boolean, // 当前的编码是否错误
    isShowBox: boolean, // 当前是否显示操作展示框
  }[] = [
      {
        id: 'asdfsdflkj00',
        val: 'B0540034',
        oldVal: 'B0540034',
        isText: false,
        isError: false,
        isShowBox: false,
      },
      {
        id: 'asdfsdflkj01',
        val: 'E0740093',
        oldVal: 'E0740093',
        isText: false,
        isError: false,
        isShowBox: false,
      },
    ]; // 搜索框内按钮数据的内容

  thinkList: { code: string }[] = []; // 联想列表的框

  curEditSearch = {
    id: 'asdfsdflkj10086',
    val: 'E0740093',
    oldVal: '',
    isText: true,
    isError: false,
    isShowBox: false,
  }; // 总是在最后一个的输入框，不会变成按钮的输入框

  // 页面参数变量
  parameterPage: any = {
    pnIndex: 0, // 当前上下键盘按钮选中的pn号码
    getCodeList$: null, // 用于取消发送的请求
    searchClickTimeout: null, // 当双击事件时，不能执行双击事件
    isDblClick: false, // 当前是否执行的双击方法
    keyWord: '', // 保存当前输入的值，以控制在点击上下键时，可以切换回输入的字符
    curEditItem: {}, // 当前聚焦的项，即当前编辑的是哪一个输入框
  }
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * 单机搜索框事件
   * @param item 参数
   */
  public searchClick(event, item) {
    clearTimeout(this.parameterPage.searchClickTimeout);
    this.parameterPage.searchClickTimeout = setTimeout(() => {
      // 如果是双击事件，那么不执行单机方法
      if (this.parameterPage.isDblClick) {
        this.parameterPage.isDblClick = false; // 初始化双击事件参数
        clearTimeout(this.parameterPage.searchClickTimeout);
        return;
      }

      const ele: any = this.getParentEle(event.target, '.search-wrapper');
      const searchBox: any = document.querySelector('.search-box');
      const operatorBox: any = document.querySelector('.operator-box');
      this.parameterPage.curEditItem = item;
      // console.log(this.parameterPage.curEditItem);
      // console.log('click', item);
      if (item.isText) {
        // 如果当前点击的是输入框，如果oldVal存在，那么初始化参数，
        this.searchContentArr.map((x, xIdx) => {
          if (x.id !== item.id && x.oldVal) {
            x.isText = false; // 变成按钮
            x.val = x.oldVal; // 如果正处于编辑状态的值变为编辑之前的值
            x.isError = false; // 取消错误提示状态
            x.isShowBox = false; // 关闭操作编辑框
          }
        });
      } else {
        this.searchContentArr.map((x, xIdx) => {
          if (x.id !== item.id) {
            x.isShowBox = false; // 关闭操作编辑框
          }
        });
        // console.log(ele.offsetLeft, ele.offsetWidth, event);
        // console.log(searchBox.scrollLeft);
        // console.log(ele.offsetLeft, searchBox.scrollLeft, ele.offsetWidth, operatorBox.offsetWidth);
        const eleL = ele.offsetLeft;
        const eleW = ele.offsetWidth;
        const searchBoxL = searchBox.scrollLeft;
        const operatorBoxW = operatorBox.offsetWidth;
        operatorBox.style.left = (eleL - searchBoxL + eleW - (operatorBoxW + 20) / 2) + 'px';
        item.isShowBox = !item.isShowBox; // 打开或关闭操作编辑框
      }
    }, 300);
  }

  /**
   * 双击搜索框时间
   * @param item 参数
   */
  public searchDblClick(item) {
    this.parameterPage.isDblClick = true; // 设置双击参数
    this.setEditStatus(item); // 开启编辑状态
  }

  /**
   * 搜索框的keyup事件
   * @param event 实例
   * @param item 参数
   */
  public async searchKeyUp(event, item) {
    item.val = (item.val).replace(/;|；/, ''); // 如果检测到；或者;，替换成为‘’
    const keyCode = event.keyCode;
    const { val, isText } = item;
    if (!val || !isText) { // 如果当前是按钮状态或者是空值，那么return
      this.thinkList.length = 0;
      return;
    }

    const isGo = this.searchInput38Or40(keyCode, item); // 处理上下键处理
    console.log(isGo);
    if (!isGo) {
      return;
    }

    if (keyCode === 13 || keyCode === 186) {
      // 只有点击enter和分号键时才调用enter事件
      this.enter(item);

    } else {
      this.parameterPage.keyWord = val;
      const res: any = await this.getCodeList(val);
      console.log(res);
      item.isError = false;
      this.thinkList = res.data;
    }
  }

  /**
   * 搜索框的keydown事件
   * @param event 实例
   * @param item 参数
   */
  public searchKeyDown(event, item) {
    const keyCode = event.keyCode;
    const { id, val, isText } = item;

    if (keyCode === 38) {
      event.preventDefault();
      return false;
    }
    if (keyCode === 8 && isText) {
      if (val.length <= 1) {
        this.thinkList.length = 0;
      }
      if (val.length === 0) {
        if (this.getIsCurEditSearch(id) && this.searchContentArr.length > 0) {
          this.searchContentArr.pop();
        } else if (!this.getIsCurEditSearch(id)) {
          let index = this.searchContentArr.findIndex(x => x.id === id);
          index = index > 0 ? index : 1;
          this.searchContentArr.splice(index - 1, 1); // 删除当前项的前一项
        }
      }
    }
  }

  /**
   * 编辑编号事件
   * @param item 参数
   */
  public editCode(item) {
    // tslint:disable-next-line: deprecation
    event.stopPropagation();
    this.setEditStatus(item);
  }
  /**
   * 拷贝编号
   * @param item 参数
   */
  public copyCode(item) {
    const { val } = item;
    // tslint:disable-next-line: deprecation
    event.stopPropagation();
    const oInput = document.createElement('input');
    oInput.id = 'copyCode';
    oInput.value = val;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    document.body.removeChild(oInput);
    this.removeOperatorBox(item);
    console.log('已复制好，可贴粘。');
  }
  /**
   * 移除编号
   * @param item 参数
   */
  public removeCode(item) {
    // tslint:disable-next-line: deprecation
    event.stopPropagation();
    const index = this.searchContentArr.findIndex(x => x.id === item.id);
    this.searchContentArr.splice(index, 1);
  }

  /**
   * 获得焦点事件
   * @param item 参数
   */
  public searchFocus(item) {
    this.parameterPage.curEditItem = item; // 触发focus事件时保存当前focus的项的数据
  }

  /**
   * 失去焦点事件
   * @param item 参数
   */
  public async searchBlur(item) {
    const isGo = await this.showError(item); //  blur 时触发错误提示
    console.log(isGo);
    if (!isGo) {
      return;
    }
  }

  /**
   * 点击选择code码
   * @param item 参数
   */
  public getCode(item) {
    const { code } = item;
    this.parameterPage.curEditItem.val = code; // 设置值
    this.parameterPage.curEditItem.oldVal = code; // 设置值
    this.setTextToBtn(this.parameterPage.curEditItem); // 设置当前选中的code码变为按钮状态
  }

  /**
   * 获取指定类型的父级元素,或者当前元素就是我们要找的元素
   * @param ele 需要查找的当前元素
   * @param parent 指定父级元素的id或者className或者元素类型
   */
  private getParentEle(ele, parent) {
    const str = parent.replace(/\.|\#/, '');
    console.log(ele, ele.className, ele.parentElement, ele.parentElement.className);
    if (parent.indexOf('.') !== -1 && typeof ele.parentElement.className === 'string' && ele.parentElement.className.indexOf(str) !== -1) {
      return ele.parentElement;
    } else if (parent.indexOf('#') !== -1 && ele.parentElement.id === str) {
      return ele.parentElement;
    } else if (ele.parentElement.tagName === parent.toUpperCase()) {
      return ele.parentElement;
    } else if (parent.indexOf('.') !== -1 && typeof ele.className === 'string' && ele.className.indexOf(str) !== -1) {
      return ele;
    } else if (parent.indexOf('#') !== -1 && ele.id === str) {
      return ele;
    } else if (ele.tagName === parent.toUpperCase()) {
      return ele;
    }
    if (ele.tagName === 'BODY') {
      console.log('zhaobudao');
      return;
    }
    // console.log(ele, parent, ele.parentElement);
    return this.getParentEle(ele.parentElement, parent);
  }

  /**
   * 开启编辑
   * @param item 参数
   */
  private setEditStatus(item) {
    console.log('dblClick', item);
    this.searchContentArr.map((x, xIdx) => {
      if (x.isShowBox) {
        x.isShowBox = false; // 关闭操作提示框
      }
      if (x.isText && x.oldVal) {
        // 开启编辑时，如果当前存在oldVal并且是输入框状态的恢复oldVal的值，变为button状态，并且清除error状态
        x.val = x.oldVal;
        x.isError = false;
        x.isText = false;
      }
    });
    item.isText = true;
    this.setFocus(item);
  }

  /**
   * 获取code码
   * @param code code码
   */
  private getCodeList(code) {
    return new Promise((resolve, reject) => {
      this.parameterPage.getCodeList$ = this.http.get(`http://ai-dps-test.lenovo.com/machine-learning/1.0/app/es/getCodeBySearch?code=${code}`).subscribe((data) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    })
  }


  /**
   * 确认事件，包括enter按钮事件和;确认
   * @param keyCode 键盘输入码
   * @param item 参数数据
   */
  private async enter(item) {
    const { id, val } = item;
    if (!val) {
      return;
    }

    // 点击enter或者分号确定时
    if ((await this.showError(item))) {
      this.setTextToBtn(item);
    }
  }

  /**
   * 错误提示
   * @param item 参数
   */
  private async showError(item) {
    const { val } = item;
    if (!val) {
      return false;
    }
    const res: any = await this.getCodeList(val);
    this.parameterPage.getCodeList$.unsubscribe();
    console.log(res);
    if (res.data.length === 0 || res.data.every(x => x.code !== val)) {
      // 找不到当前输入的pn号，提示错误
      this.thinkList.length = 0;
      item.isError = true;
      return false;
    }
    return true;
  }

  /**
   * 设置text输入框变为button按钮
   * @param item 参数数据
   */
  private setTextToBtn(item) {
    const { id, val } = item;
    console.log(item);
    if (this.getIsCurEditSearch(id)) {
      // 如果当前编辑的是最后一个框
      const obj = {
        id,
        val,
        oldVal: val,
        isError: false,
        isShowBox: false,
        isText: false,
      };
      this.searchContentArr.push(obj);
      this.curEditSearch = {
        id: setUuid4(),
        val: '',
        oldVal: '',
        isError: false,
        isShowBox: false,
        isText: true,
      }
    } else {
      // 如果当前编辑的是已经成为过按钮的框
      item.oldVal = val;
      item.isShowBox = false;
      item.isText = false;
      item.isError = false;
    }
    item.isError = false;
    this.thinkList.length = 0;
    setTimeout(() => {
      this.setFocus(this.curEditSearch);
    }, 100);
  }

  /**
   * 设置input自动聚焦focus
   * @param item 需要设置focus 的项数据包括id
   */
  private setFocus(item) {
    const { id, val } = item;
    const ele: HTMLElement = document.getElementById(id);
    if (ele) {
      // 设置focus 并且移动光标到最后
      item.val = '';
      ele.focus();
      setTimeout(x => {
        item.val = val;
      }, 10);
    }
  }

  /**
   * 移除操作框
   */
  private removeOperatorBox(item) {
    item.isShowBox = false;
  }


  // 当前编辑的项的id是否是当前最后一个编辑框
  private getIsCurEditSearch(id) {
    return this.curEditSearch.id === id;
  }

  // 如果当前是方向键则进入开始上下选择
  private searchInput38Or40(keyCode, cont) {
    // console.log(this.pnArr.length);
    if (this.thinkList.length <= 0) {
      this.parameterPage.pnIndex = 0;
      return 'nonePnArr';
    }
    const pnContDom = document.querySelectorAll('.pnCont');

    if (keyCode !== 40 && keyCode !== 38) {
      this.parameterPage.pnIndex = 0;
      return true;
    }

    if (keyCode === 40) {
      this.parameterPage.pnIndex++;
      if (this.parameterPage.pnIndex >= pnContDom.length) {
        this.parameterPage.pnIndex = 0;
      }
      console.log(this.parameterPage.pnIndex);
    } else if (keyCode === 38) {
      this.parameterPage.pnIndex--;
      if (this.parameterPage.pnIndex <= -1) {
        this.parameterPage.pnIndex = pnContDom.length - 1;
      }
      console.log(this.parameterPage.pnIndex);
    }

    Array.from(pnContDom, (item, itemIndex) => {
      if (itemIndex === this.parameterPage.pnIndex) {
        cont.val = (pnContDom[this.parameterPage.pnIndex].innerHTML).replace(/\s+/g, '');
      }
    });

    if (keyCode === 38 || keyCode === 40) {
      return false;
    }
  }
}
