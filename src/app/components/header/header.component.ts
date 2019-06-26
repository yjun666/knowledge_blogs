import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
    isShowUserDetails = false;
    constructor(
        private http: HttpClient,
        private router: Router,
        private loginService: LoginService
    ) { }
    ngOnInit() { }
    private showUserDetails(param) {
        this.isShowUserDetails = !param;
    }

    public routeTurn(route) {
        this.router.navigate([route])
    }

    private logout() {
        this.loginService.isLoggedIn = false;
        sessionStorage['wwwYjunsCn'] = this.loginService.isLoggedIn;
        this.router.navigate(['./login']);
    }
}
