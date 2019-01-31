// 拦截器修改请求头添加token
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptorService implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        console.log(req, next);
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'asdf-asd-fa-sdf-asdf-sdf')
        });

        return next.handle(authReq);
    }
}

// export class Interceptor implements HttpInterceptor {
//     public myAppListService;
//     constructor(private message: NzMessageService, private injector: Injector) {
//     }

//     public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         this.myAppListService = this.injector.get(MyAppListService);
//         this.myAppListService.selectedUserToken = getQueryString('user_token') || sessionStorage.getItem('user_token');

//         if (this.myAppListService.selectedUserToken !== 'null') {
//             let newParams;
//             let newBody;
//             if (req.method === 'GET') {
//                 let userToken = this.myAppListService.selectedUserToken;
//                 if (userToken) {
//                     newParams = req.params.set('user_token', userToken);
//                     const comReq = req.clone({
//                         params: newParams,
//                         body: newBody
//                     });
//                     return next.handle(comReq).do((res) => {
//                         this.handleResponse(res);
//                     });
//                 }
//             } else if (req.method === 'POST' && req.headers.get('content-type').indexOf('application/x-www-form-urlencoded;') > -1) {
//                 // if (req.body.indexOf('user_token=')) {
//                 let userToken = this.myAppListService.selectedUserToken;
//                 if (userToken) {
//                     if (req.body.match(/(^|&)user_token=([^&]*)(&|$)/)) {
//                         newBody = req.body.replace(req.body.match(/(^|&)user_token=([^&]*)(&|$)/)[0], '');
//                         newBody = newBody + '&user_token=' + userToken;
//                     } else {
//                         newBody = '&user_token=' + userToken;
//                     }
//                     const comReq = req.clone({
//                         params: newParams,
//                         body: newBody
//                     });
//                     return next.handle(comReq).do((res) => {
//                         this.handleResponse(res);
//                     });
//                 }
//                 // }
//             }

//         }
//         const comReq = req.clone();
//         return next.handle(comReq).do((res) => {
//             this.handleResponse(res);
//         });
//     }
//     public handleResponse(res) {
//         if (res instanceof HttpResponse) {
//             const data = res.body;
//             if (data.status && data.status === 2) {
//                 this.message.error(data.data);
//                 location.href = '/index.php?r=Login/Ulogin';
//             }
//             if (data.status && data.status === 1 && data.data === '应用不存在，或者您不是应用管理者') {
//                 location.href = '/index.php?r=Login/Ulogin';
//                 return;
//             }
//         }
//     }
// }
