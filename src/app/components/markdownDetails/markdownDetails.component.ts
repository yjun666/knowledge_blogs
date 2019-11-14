import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AppUpdateService } from '../../app-update.service';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { MarkdownDetailsService } from './markdownDetails.service';

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
    constructor(
        private appUpdateService: AppUpdateService,
        private markdownDetailsService: MarkdownDetailsService
    ) { }
    ngOnInit() {
        const vm = this;
        this.appUpdateService.getSideBarSubject().subscribe((data) => {
            this.title = data.title;
            this.curOption = data.pageOption;
        });
        window.addEventListener('resize', () => {
            vm.markdownDetailsService.niceScroll('markdown-details-body', false);
        });
        this.search();
    }

    ngAfterViewInit() {
        this.markdownDetailsService.niceScroll('markdown-details-body', true);
    }

    ngOnDestroy() {
        const vm = this;
        window.removeEventListener('resize', () => {
            vm.markdownDetailsService.niceScroll('markdown-details-body', false);
        });
        this.searchBoxSubscribe$.unsubscribe();
    }

    // 点击回到顶部
    public scrollTop() {
        this.markdownDetailsService.scrollTop('markdown-details-body');
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
            map((e: any) => e.target.value),
            filter(text => text.length > 2),
            debounceTime(1000),
            distinctUntilChanged()
        );
        this.searchBoxSubscribe$ = searchBox$.subscribe((data) => {
            // alert(data);
        });
    }
}
