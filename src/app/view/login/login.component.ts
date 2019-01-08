import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private loginService: LoginService, private router: Router) { }
    ngOnInit() { }

    login(param) {

        if ((param.accountNumber).indexOf('yangjun') === -1) {
            console.error('账号错误,请重新输入');
            alert('账号错误,请重新输入');
            return false;
        } else if (param.password !== '123456') {
            console.error('密码错误,请重新输入');
            alert('密码错误,请重新输入');
            return false;
        }



        this.loginService.login().subscribe((data) => {
            this.loginService.isLoggedIn = true;
            // 路由传参如果是传一个值需在路由配置中home后边添加"/:id",如果添加多个则不能加-----传参作为测试使用
            this.router.navigate(['/home', { 'a': 'asdfasdf', 'b': '123123', 'c': 'asdf' }]);
        });
    }
}
