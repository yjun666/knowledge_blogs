import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AppUpdateService } from '../../app-update.service';
declare const $;
@Component({
    selector: 'app-content-details',
    templateUrl: 'contentDetails.component.html',
    styleUrls: ['contentDetails.component.scss']
})
export class ContentDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
    private curOption = [
        {
            type: 'md',
            mdSrc: './assets/markdown/常用网站集合/常用网站.md',
            mdStyle: {}
        }
    ];
    title = '学习网址';

    constructor(private appUpdateService: AppUpdateService) { }
    ngOnInit() {
        this.appUpdateService.getSideBarSubject().subscribe((data) => {
            this.title = data.title;
            this.curOption = data.pageOption;
        });
        window.addEventListener('resize', function () {
            $('#content-details-body').getNiceScroll().resize();
        });
    }

    ngAfterViewInit() {
        this.niceScroll();
    }

    ngOnDestroy() {
        window.removeEventListener('resize', function () {
            $('#content-details-body').getNiceScroll().resize();
        });
    }

    private niceScroll() {
        $('#content-details-body').niceScroll({
            cursorcolor: '#ccc', // #CC0071 光标颜色
            cursoropacitymax: 1, // 改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: false, // 使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: '5px', // 像素光标的宽度
            cursorborder: '0', // 	游标边框css定义
            cursorborderradius: '5px', // 以像素为光标边界半径
            autohidemode: true // 是否隐藏滚动条
        });
        $('#content-details-body').getNiceScroll().resize();
    }

    private scrollTop() {
        const scrollTopInterval = setInterval(() => {
            document.getElementById('content-details-body').scrollTop -= 100;
            if (document.getElementById('content-details-body').scrollTop <= 0) {
                document.getElementById('content-details-body').scrollTop = 0;
                clearInterval(scrollTopInterval);
            }
        }, 10);
    }

}
