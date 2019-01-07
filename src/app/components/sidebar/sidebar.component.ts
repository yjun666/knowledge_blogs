import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AppUpdateService } from '../../app-update.service';
import { HttpClient, HttpResponse } from '@angular/common/http';



import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
declare const $;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewInit, OnDestroy {
    catalog: any = [
        {
            id: '1',
            text: '学习网址或demo网站学习网址或demo网站',
            parentId: '',
            isHasChild: true,
            curCatalogLevel: 'first',
            isShow: true,
            title: '',
            isCurCatalog: false,
            pageOption: []
        },
        {
            id: '1-1',
            text: '学习网址或demo网站学习网址或demo网站',
            parentId: '1',
            isHasChild: true,
            curCatalogLevel: 'second',
            isShow: true,
            title: '',
            isCurCatalog: false,
            pageOption: [],
        },
        {
            id: '1-1-1',
            text: '网站',
            parentId: '1-1',
            isHasChild: false,
            curCatalogLevel: 'third',
            isShow: false,
            title: '网站',
            isCurCatalog: true,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/all_study_station/all-study-station.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '2',
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
                    mdSrc: './assets/markdown/all_study_station/all-study-station.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '3',
            text: 'css----样式',
            parentId: '',
            isHasChild: true,
            curCatalogLevel: 'first',
            isShow: false,
            title: '',
            isCurCatalog: false,
            pageOption: [],
        },
        {
            id: '3-1',
            text: 'css3----常用总结',
            parentId: '3',
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
            id: '3-2',
            text: 'table---边框样式',
            parentId: '3',
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'table---边框样式',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/css---Style/table.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '3-4',
            text: 'radio和checkbox修改选择框样式',
            parentId: '3',
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'radio和checkbox修改选择框样式',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/css---Style/change--radioAndCheckboxStyle.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '4',
            text: '终端常用命令',
            parentId: '',
            isHasChild: true,
            curCatalogLevel: 'first',
            isShow: false,
            title: '终端常用命令',
            isCurCatalog: false,
            pageOption: [],
        },
        {
            id: '4-1',
            text: 'terminal',
            parentId: '4',
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: '终端常用命令',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/terminal/terminal.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '5',
            text: 'nodeJs',
            parentId: '',
            isHasChild: true,
            curCatalogLevel: 'first',
            isShow: false,
            title: 'nodeJs',
            isCurCatalog: false,
            pageOption: [],
        },
        {
            id: '5-1',
            text: 'nodeJs--回调函数',
            parentId: '5',
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'nodeJs--回调函数',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/nodejs/nodejs--callbackFun.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '5-2',
            text: 'nodejs—eventEmitter',
            parentId: '5',
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'nodejs—eventEmitter',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/nodejs/nodejs—eventEmitter.md',
                    mdStyle: {}
                }
            ],
        },
        {
            id: '5-3',
            text: 'nodejs—eventEmitter',
            parentId: '5',
            isHasChild: false,
            curCatalogLevel: 'second',
            isShow: false,
            title: 'nodejs—eventEmitter',
            isCurCatalog: false,
            pageOption: [
                {
                    type: 'md',
                    mdSrc: './assets/markdown/nodejs/nodejs-getOrPost.md',
                    mdStyle: {}
                }
            ],
        },
    ];

    isShowSideBar = true;
    constructor(private appUpdateService: AppUpdateService, private http: HttpClient) { }
    ngOnInit() {
        this.http.get('./assets/json/text2.json')
            .subscribe((res) => {
                console.log(res);
                this.catalog = res;
            });

        window.addEventListener('resize', function () {
            $('#sidebar-body').getNiceScroll().resize();
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', function () {
            $('#sidebar-body').getNiceScroll().resize();
        });
    }

    private niceScroll() {
        $('#sidebar-body').niceScroll({
            cursorcolor: '#ccc', // #CC0071 光标颜色
            cursoropacitymax: 1, // 改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: false, // 使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: '5px', // 像素光标的宽度
            cursorborder: '0', // 	游标边框css定义
            cursorborderradius: '5px', // 以像素为光标边界半径
            autohidemode: true // 是否隐藏滚动条
        });
        $('#sidebar-body').getNiceScroll().resize();

    }

    ngAfterViewInit(): void { this.niceScroll() }

    public closeCurCatalog(param, event) {
        const curId = param.id;
        const curParentId = param.parentId;
        const curEleClassName = event.className;
        // console.log(curId, curParentId, curEleClassName);
        const catalog$ = from(this.catalog);

        const catalog$New = catalog$.pipe(filter((val) => val['id'] === param.id))
            .subscribe((data) => {
                data['isShow'] = !data['isShow']; // 控制二级目录是否显示即一级目录是否打开
                console.log(data['id']);
                // 控制三级目录是否显示即二级目录是否打开
                catalog$.pipe(filter((val) => val['parentId'] === data['id']))
                    .subscribe((data2) => {
                        if (!data['isShow']) {
                            data2['isShow'] = false;
                        }
                    }).unsubscribe();
            }).unsubscribe();
        setTimeout(() => {
            this.niceScroll();
        }, 10);
    }

    public pageTurn(param, event) {
        if (this.catalog.find((m) => m.isCurCatalog)) {
            this.catalog.find((m) => m.isCurCatalog).isCurCatalog = false;
        }

        param.isCurCatalog = true;
        this.appUpdateService.emitUpdataSideBarSubject(param);
        console.log(event);
        // event.target.style.backgroundColor = 'purple';
        console.log('pageTurn');
        this.niceScroll();
    }

    public hideSideBar() {
        this.niceScroll();
        $('#sidebar-body').getNiceScroll().hide();
        $('#sidebar-body').css('left', '-235px');
        $('#content-details-body').css('padding-left', '0');
        setTimeout(() => {
            this.isShowSideBar = false;
        }, 200);
    }

    public showSideBar() {
        $('#sidebar-body').getNiceScroll().show();
        $('#sidebar-body').css('left', '0');
        $('#content-details-body').css('padding-left', '235px');
        this.isShowSideBar = true;
        this.niceScroll();
    }

}
