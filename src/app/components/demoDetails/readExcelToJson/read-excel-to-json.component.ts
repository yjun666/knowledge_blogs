import { uuidv1 } from './../../../utils/uuid';
import { Component, OnInit } from '@angular/core';

declare const XLSX;

@Component({
  selector: 'component-read-excel-to-json',
  templateUrl: './read-excel-to-json.component.html'
})

export class ReadExcelToJsonComponent implements OnInit {
  demoId = uuidv1(); // demoId
  //  FileReader共有4种读取方法：
  //  1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
  //  2.readAsBinaryString(file)：将文件读取为二进制字符串
  //  3.readAsDataURL(file)：将文件读取为Data URL
  //  4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
  wb; // 读取完成的数据
  rABS = false; // 是否将文件读取为二进制字符串

  constructor() { }

  ngOnInit() { }


  /**
   * event
   * @param event 参数对象
   */
  importf(event: any) { // 导入
    console.log(event);
    const obj = event.target;
    if (!obj.files) {
      return;
    }
    const f = obj.files[0];
    const reader = new FileReader();
    console.log(obj, f);
    reader.onload = (e: any) => {
      const data = e.target.result;
      if (this.rABS) {
        this.wb = XLSX.read(btoa(this.fixdata(data)), { // 手动转化
          type: 'base64'
        });
      } else {
        this.wb = XLSX.read(data, {
          type: 'binary'
        });
      }
      // wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
      // wb.Sheets[Sheet名]获取第一个Sheet的数据
      document.getElementById(this.demoId).innerHTML = JSON.stringify(XLSX.utils.sheet_to_json(this.wb.Sheets[this.wb.SheetNames[0]]));
    };
    if (this.rABS) {
      reader.readAsArrayBuffer(f);
    } else {
      reader.readAsBinaryString(f);
    }
  }

  fixdata(data) { // 文件流转BinaryString
    let o = '';
    let l = 0;
    const w = 10240;
    for (; l < data.byteLength / w; ++l) {
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
    };
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
  }
}
