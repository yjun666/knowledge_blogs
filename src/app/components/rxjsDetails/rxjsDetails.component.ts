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
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
        this.operatorApply();
    }

    operatorApply() {
        console.log(this.rxjsOperator);
        // this.rxjsOperator.rangeFun();
        // this.rxjsOperator.concatAllFun();
        // this.rxjsOperator.takeFun();
        // this.rxjsOperator.ajaxFun();
        // this.rxjsOperator.mapToFun();
        // this.rxjsOperator.takeUntilFun();
        // this.rxjsOperator.switchMapFun();
        // this.rxjsOperator.zipFun();
        this.rxjsOperator.timeStampFun();
        // this.rxjsOperator.startWithFun();

    }
}
