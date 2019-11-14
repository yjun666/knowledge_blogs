import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';
import { Operator, OperatorItem } from './operator/operator';
import { from } from 'rxjs';


@Component({
    selector: 'app-rxjs-details',
    templateUrl: './rxjsDetails.component.html',
    styleUrls: ['./rxjsDetails.component.scss']
})
export class RxjsDetailsComponent implements OnInit {
    rxjsOperator: OperatorItem;
    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.rxjsOperator = new Operator();
    }

    ngOnInit() {
        this.route.paramMap.subscribe((data: any) => {
            console.log(data.params);
        });
        this.operatorApply();
    }

    operatorApply() {
        console.log(this.rxjsOperator);
        // this.rxjsOperator.rangeFun(); // 使用range生成数据流
        // this.rxjsOperator.concatAllFun(); // 合并操作符
        // this.rxjsOperator.takeFun(); // take的使用方法，最多触发几次
        // this.rxjsOperator.ajaxFun(); // ajax请求
        // this.rxjsOperator.mapToFun(); // 是将所有发出的数据映射到一个给定的值
        // this.rxjsOperator.takeUntilFun(); // 直到某种条件成立为止停止执行
        // this.rxjsOperator.switchMapFun(); // 合并数据流处理
        // this.rxjsOperator.zipFun(); // 组合多个Observable以创建一个Observable，其值根据其每个输入Observable的值按顺序计算
        // this.rxjsOperator.timeStampFun(); // 获取时间戳
        // this.rxjsOperator.startWithFun(); //  设置初始默认值
        // this.rxjsOperator.repeatWhenFun(); // 当前条件成立时触发
        this.rxjsOperator.deferFun(); // 发送请求前先创建后发送，效果不明显

    }
}
