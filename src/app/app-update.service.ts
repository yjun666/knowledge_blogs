import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/observable';

@Injectable()
export class AppUpdateService {
    constructor() { }
    // 不同组件之间的数据传递（emit发送和get获取）
    // 先实例化
    private sideBarSubject: Subject<any> = new Subject<any>();

    // 点击ov-select组件获取数据传递给 ov-kpi组件 (ov-kpi组件获取数据；ov-select组件发送数据)
    public getSideBarSubject(): Observable<any> {
        return this.sideBarSubject;
    }
    public emitUpdataSideBarSubject(msg: any): void {
        if (msg) {
            this.sideBarSubject.next(msg);
        }
    }

}
