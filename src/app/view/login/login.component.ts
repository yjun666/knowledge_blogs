import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../../services/getJson.service';
import { setToken, setUserName, setPassword, getUserName, getPassword } from '../../utils/auth';
import Cookies from 'js-cookie';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private getJson: GetJsonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() { }

  login(param) {
    if (param.accountNumber !== 'mm') {
      console.error('账号错误,请重新输入');
      alert('账号错误,请重新输入');
      return false;
    } else if (param.password !== 'mm') {
      console.error('密码错误,请重新输入');
      alert('密码错误,请重新输入');
      return false;
    }
    this.getJson.login({
      client_id: 'dps-china',
      client_secret: 'dps-china',
      grant_type: 'password',
      scope: 'read',
      username: 'test',
      password: 'test'
    }).subscribe((data: any) => {
      setUserName('test');
      setPassword('test');
      setToken(data.access_token);
      // setToken('8653a72a-c53a-4c96-bc49-092c9bd0cdd3');
      console.log(data);

      // 路由传参如果是传一个值需在路由配置中home后边添加"/:id",如果添加多个则不能加-----传参作为测试使用
      this.router.navigate(['/home/markdown', { a: 'asdfasdf', b: '123123', c: 'asdf' }]);
    }, (err) => {
      console.log(err);
    });
  }
}
