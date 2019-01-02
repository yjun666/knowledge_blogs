import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppUpdateService } from '../../app-update.service';

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
declare const $;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewInit {
    catalog = [
        {
            id: 1,
            text: '学习网址或demo网站学习网址或demo网站',
            isHasChild: true,
            curCatalogLevel: 'first',
            isShow: true,
            title: '',
            isCurCatalog: false,
            pageOption: []
        },
        {
            id: 2,
            text: '学习网址或demo网站学习网址或demo网站',
            parentId: 1,
            isHasChild: true,
            curCatalogLevel: 'second',
            isShow: true,
            title: '',
            isCurCatalog: false,
            pageOption: [],
        },
        {
            id: 3,
            text: '网站',
            parentId: 2,
            isHasChild: false,
            curCatalogLevel: 'third',
            isShow: false,
            title: '网站',
            isCurCatalog: true,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/allStudyCom/allStudyCom.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: 4,
            text: 'other',
            parentId: '',
            isHasChild: false,
            curCatalogLevel: 'first',
            isShow: true,
            title: 'other',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/allStudyCom/allStudyCom.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: 5,
            text: 'css----样式',
            isHasChild: true,
            curCatalogLevel: 'first',
            isShow: false,
            title: '',
            isCurCatalog: false,
            pageOption: [],
        },
        {
            id: 6,
            text: 'css3----常用总结',
            parentId: 5,
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'css3----常用总结',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/css---Style/css3.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: 6,
            text: 'table---radio和audio样式',
            parentId: 5,
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'table---radio和audio样式',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/css---Style/table.md',
                    mdStyle: {}
                }
            ],
        },
    ];
    isShowSideBar = true;

    constructor(private appUpdateService: AppUpdateService) { }
    ngOnInit() {

    }

    ngAfterViewInit(): void { }

    public closeCurCatalog(param, event) {
        // console.log(param);
        const curId = param.id;
        const curParentId = param.parentId;
        const curEleClassName = event.className;
        // console.log(curId, curParentId, curEleClassName);
        const catalog$ = from(this.catalog);

        const catalog$New = catalog$.pipe(filter((val) => val.id === param.id))
            .subscribe((data) => {
                data.isShow = !data.isShow; // 控制二级目录是否显示即一级目录是否打开
                console.log(data.id);
                // 控制三级目录是否显示即二级目录是否打开
                catalog$.pipe(filter((val) => val.parentId === data.id))
                    .subscribe((data2) => {
                        if (!data.isShow) {
                            data2.isShow = false;
                        }
                    }).unsubscribe();
            }).unsubscribe();
    }

    public pageTurn(param, event) {
        this.catalog.find((m) => m.isCurCatalog).isCurCatalog = false;

        param.isCurCatalog = true;
        this.appUpdateService.emitUpdataSideBarSubject(param);
        console.log(event);
        // event.target.style.backgroundColor = 'purple';
        console.log('pageTurn');
    }

    public hideSideBar() {
        $('#sidebar-body').css('left', '0');
        $('#content-details-body').css('padding-left', '0');
        setTimeout(() => {
            this.isShowSideBar = false;
        }, 200);
    }

    public showSideBar() {
        $('#sidebar-body').css('left', '235px');
        $('#content-details-body').css('padding-left', '235px');
        this.isShowSideBar = true;
    }

}
