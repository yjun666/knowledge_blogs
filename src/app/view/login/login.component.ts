import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../../services/getJson.service';
import { setToken, setUserName, setPassword, getUserName, getPassword } from '../../utils/auth';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private getJson: GetJsonService,
    private router: Router
  ) { }
  ngOnInit() { }

  login(param) {
    // if ((param.accountNumber).indexOf('') === -1) {
    //   console.error('账号错误,请重新输入');
    //   alert('账号错误,请重新输入');
    //   // return false;
    // } else if (param.password !== '') {
    //   console.error('密码错误,请重新输入');
    //   alert('密码错误,请重新输入');
    //   // return false;
    // }
    // this.getJson.login({
    //   client_id: 'dps-china',
    //   client_secret: 'dps-china',
    //   grant_type: 'password',
    //   scope: 'read',
    //   username: 'wangqian',
    //   password: 'wangqian'
    // }).subscribe((data: any) => {
    setUserName('username');
    setPassword('password');
    // setToken(data.access_token);
    setToken('asdlkfcmwodicndkfvju');

    // 路由传参如果是传一个值需在路由配置中home后边添加"/:id",如果添加多个则不能加-----传参作为测试使用
    this.router.navigate(['/home/markdown', { a: 'asdfasdf', b: '123123', c: 'asdf' }]);
    // });
  }
}
