import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { removeToken } from '../../../shared/utils/auth';
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
    removeToken();
    this.router.navigate(['./login']);
  }
}
