import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

declare const $;
@Component({
    selector: 'app-request-test-parent',
    templateUrl: './requestTest.component.html',
    styleUrls: ['./requestTest.component.scss']
})
export class RequestTestComponent implements OnInit, AfterViewInit {
    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }
    ngOnInit() {

    }

    ngAfterViewInit(): void {

    }
}
