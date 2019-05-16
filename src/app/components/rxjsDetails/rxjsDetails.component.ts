import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-rxjs-details',
    templateUrl: './rxjsDetails.component.html',
    styleUrls: ['./rxjsDetails.component.scss']
})
export class RxjsDetailsComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((data) => {
            console.log(data['params']);
        });
    }
}
