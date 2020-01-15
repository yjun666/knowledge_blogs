import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class UpdataSubjectService {

  constructor() { }

  public routerData: Subject<any> = new Subject<any>();

  public emitRouterDataSubject(msg: any): void {
    if (msg) {
      this.routerData.next(msg);
    }
  }
  public getRouterDataSubject(): Observable<any> {
    return this.routerData;
  }
}
