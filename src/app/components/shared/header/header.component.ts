import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../../shared/services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowUserDetails = false;
  text = 'Download Now';
  constructor(
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService,
    private translate: TranslateService,
  ) { }
  ngOnInit() { }
  public showUserDetails(param) {
    this.isShowUserDetails = !param;
  }

  public routeTurn(route) {
    this.router.navigate([route]);
  }

  public changeLang(language: string) {
    this.translate.use(language);
  }

  public logout() {
    this.loginService.isLoggedIn = false;
    sessionStorage.wwwYjunsCn = this.loginService.isLoggedIn;
    this.router.navigate(['./login']);
  }
}
