import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class UpdataSubjectService {

  constructor() { }

  public routerData: Subject<any> = new Subject<any>();
  public sideBarSubject: Subject<any> = new Subject<any>();

  // 点击sidebar组件获取数据传递给 markdowndetails组件
  public emitUpdataSideBarSubject(msg: any): void {
    if (msg) {
      this.sideBarSubject.next(msg);
    }
  }

  public emitRouterDataSubject(msg: any): void {
    if (msg) {
      this.routerData.next(msg);
    }
  }
}
