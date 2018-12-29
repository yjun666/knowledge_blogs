import { Component, OnInit, AfterViewInit } from '@angular/core';

import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewInit {
    catalog = [
        {
            id: 1,
            text: 'asdf',
            isHasChild: true,
            isShow: false,
        },
        {
            id: 2,
            text: 'test1-1',
            parentId: 1,
            isHasChild: true,
            isShow: false,
        },
        {
            id: 3,
            text: 'test1-1-1',
            parentId: 2,
            isHasChild: false,
            isShow: false
        }
    ];
    constructor() { }
    ngOnInit() {
    }

    ngAfterViewInit(): void { }
    public closeCurCatalog(param, event) {
        console.log(param);
        const curId = param.id;
        const curParentId = param.parentId;
        const curEleClassName = event.className;
        console.log(curId, curParentId, curEleClassName);
        const catalog$ = from(this.catalog);

        const catalog$New = catalog$.pipe(filter((val) => val.parentId === param.id)).subscribe((data) => {
            data.isShow = !data.isShow; // 控制二级目录是否显示即一级目录是否打开

            // 控制三级目录是否显示即二级目录是否打开
            catalog$.pipe(filter((val) => val.parentId === data.id)).subscribe((data2) => {
                if (!data.isShow) {
                    data2.isShow = false;
                }
            }).unsubscribe();
        }).unsubscribe();
    }

    public pageTurn() {
        console.log('pageTurn');
    }
}
