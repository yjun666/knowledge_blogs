import { Component, OnInit } from '@angular/core';
import { AppUpdateService } from '../../app-update.service';

@Component({
    selector: 'app-content-details',
    templateUrl: 'contentDetails.component.html',
    styleUrls: ['contentDetails.component.scss']
})
export class ContentDetailsComponent implements OnInit {
    private curOption = [
        {
            type: 'md',
            mdSrc: './assets/markdown/allStudyCom/allStudyCom.md',
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
    }

    private scrollTop(){
        // document.body.scrollTop
    }

}
