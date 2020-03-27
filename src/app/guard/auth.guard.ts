import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { isLogin } from '../utils/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log(url, state);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (isLogin()) { return true; }
    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
