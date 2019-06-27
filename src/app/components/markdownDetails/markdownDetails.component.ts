import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AppUpdateService } from '../../app-update.service';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

declare const $;
@Component({
    selector: 'app-markdown-details',
    templateUrl: 'markdownDetails.component.html',
    styleUrls: ['markdownDetails.component.scss']
})
export class MarkdownDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
    searchBoxSubscribe$; // 监听searchBox的输入
    // 初始化参数
    public curOption = [
        {
            type: 'md',
            mdSrc: '/assets/markdown/js/js常用方法/生成随机数.md',
            mdStyle: {}
        }
    ];
    // 初始化title
    title = '生成随机数';

    constructor(private appUpdateService: AppUpdateService) { }
    ngOnInit() {
        this.appUpdateService.getSideBarSubject().subscribe((data) => {
            this.title = data.title;
            this.curOption = data.pageOption;
        });
        window.addEventListener('resize', function () {
            $('#markdown-details-body').getNiceScroll().resize();
        });
        this.search();
    }

    ngAfterViewInit() {
        this.niceScroll();
    }

    ngOnDestroy() {
        window.removeEventListener('resize', function () {
            $('#markdown-details-body').getNiceScroll().resize();
        });
        this.searchBoxSubscribe$.unsubscribe();
    }

    private niceScroll() {
        // $('#markdown-details-body').niceScroll({
        //     cursorcolor: '#ccc', // #CC0071 光标颜色
        //     cursoropacitymax: 1, // 改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        //     touchbehavior: false, // 使光标拖动滚动像在台式电脑触摸设备
        //     cursorwidth: '5px', // 像素光标的宽度
        //     cursorborder: '0', // 	游标边框css定义
        //     cursorborderradius: '5px', // 以像素为光标边界半径
        //     autohidemode: true // 是否隐藏滚动条
        // });
        // $('#markdown-details-body').getNiceScroll().resize();
    }

    public scrollTop() {
        const scrollTopInterval = setInterval(() => {
            document.getElementById('markdown-details-body').scrollTop -= 100;
            if (document.getElementById('markdown-details-body').scrollTop <= 0) {
                document.getElementById('markdown-details-body').scrollTop = 0;
                clearInterval(scrollTopInterval);
            }
        }, 10);
    }

    // 关闭pre代码块
    public closeCode(event) {
        const allPre = document.querySelectorAll('pre');
        Array.from(allPre).map((item) => {
            if (!item.style.display || item.style.display === 'block') {
                item.style.display = 'none';
                event.target.innerHTML = '点我展开Code';

            } else {
                item.style.display = 'block';
                event.target.innerHTML = '点我折叠Code';
            }
        });
    }

    // 搜索文字并跳转当前行
    search() {
        const searchBox = document.getElementById('searchBoxMd');
        const searchBox$ = fromEvent(searchBox, 'input').pipe(
            map((e: KeyboardEvent) => e.target['value']),
            filter(text => text.length > 2),
            debounceTime(1000),
            distinctUntilChanged()
        );
        this.searchBoxSubscribe$ = searchBox$.subscribe((data) => {
            // alert(data);
        });
    }
}
