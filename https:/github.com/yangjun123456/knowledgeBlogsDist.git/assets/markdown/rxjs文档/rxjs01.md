##### 1.自动订阅事件

```
const button01 = document.getElementsByClassName('button01');
        Rx.Observable.fromEvent(button01, 'click')
             .subscribe(() => console.log('Clicked!'));
```
##### 2. scan操作符

```
const button02 = document.getElementsByClassName('button02');
     Rx.Observable.fromEvent(button02, 'click')
         .scan((count: any) => { count = count + 1; return count; }, 0)
    .subscribe(count => console.log(`Clicked ${count} times`));
```
##### 3.throttletime 实现每秒点击一次

```
const button03 = document.getElementsByClassName('button03')[0];
        Rx.Observable.fromEvent(button03, 'click')
            .throttleTime(1000)
            .scan((count: any) => count + 1, 0)
            .subscribe(count => console.log(`Clicked ${count} times`));
```
##### 4.rxjs的发布订阅  Rx.Observable.create
```
// 发布事件
let observable = Rx.Observable.create(function subscribe(observer) {
    let id = setInterval(() => {
        observer.next('hi');
        // observer.complete();  // 一旦complete则后边的值都无法订阅到,如果存在complete那么hi只打印一次就停止了
    }, 1000);
    try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        // observer.complete();
    } catch (err) {
        observer.error(err); // delivers an error if it caught one
    }
});
// 订阅事件
let subscription = observable.subscribe(x => console.log(x));
setTimeout(() => {
    // 5秒后取消订阅
    subscription.unsubscribe();
}, 5000);
```
##### 5.