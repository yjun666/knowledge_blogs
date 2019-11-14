import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-lodash-details',
    templateUrl: './lodashDetails.component.html',
    styleUrls: ['./lodashDetails.component.scss']
})
export class LodashDetailsComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((data: any) => {
            console.log(data.params);
        });
    }
}
