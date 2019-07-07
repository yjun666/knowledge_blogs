### operator 说明

* RxJS 仓库现在移到了 ReactiveX 组织下，最新的大版本为 6，与之前的版本相比有许多破坏性变更，请注意。
* RxJS 的 import 路径有以下 5 种：
* 创建 Observable 的方法、types、schedulers 和一些工具方法
    * import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
* 操作符 operators
    * import { map, filter, scan } from 'rxjs/operators';
* webSocket
    * import { webSocket } from 'rxjs/webSocket';
* ajax
    * import { ajax } from 'rxjs/ajax';
* 测试
    * import { TestScheduler } from 'rxjs/testing';


> range 创建范围内的数值，例如range(1,200) 创建一个1到200的数组

> take 限制执行次数，例如点击事件，限制最多点击5次,------是从数据流中选取最先发出的若干数据

```
click$ = fromEvent(document,"click");
click$.pipe(take(5)).subscribe((x)=>{console.log(x)})
```

> concatAll  高阶 concatAll会对内部的 Observable 对象做 concat 操作，和 concat 操作符类似，如果前一个内部 Observable 没有完结，那么 concatAll 不会订阅下一个内部 Observable

> ajax 

* 一些过滤的操作符

```
mapTo 是将所有发出的数据映射到一个给定的值

takeLast 是从数据流中选取最后发出的若干数据

takeUntil 是从数据流中选取直到发生某种情况前发出的若干数据

first 是获得满足判断条件的第一个数据

last 是获得满足判断条件的最后一个数据

skip 是从数据流中忽略最先发出的若干数据

skipLast 是从数据流中忽略最后发出的若干数据

of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
        takeLast(6)
    )
        .subscribe(x => {
            console.log(x);
        });

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
        first(x => x > 6)
    )
        .subscribe(x => {
            console.log(x);
        });
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
        last(x => x > 6)
    )
        .subscribe(x => {
            console.log(x);
        });
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
        skip(8)
    )
        .subscribe(x => {
            console.log(x);
        });
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
        skipLast(8)
    )
        .subscribe(x => {
            console.log(x);
        });
```

* 合并类操作符

> concat

> merge

> concatAll,mergeAll,switchAll 用来将高阶的 Observable 对象压平成一阶的 Observable，和 loadash 中压平数组的 flatten 方法类似。concatAll 会对内部的 Observable 对象做 concat 操作，和 concat 操作符类似，如果前一个内部 Observable 没有完结，那么 concatAll 不会订阅下一个内部 Observable，mergeAll 则是同时处理。switchAll 比较特殊一些，它总是切换到最新的内部 Observable 对象获取数据。上游高阶 Observable 产生一个新的内部 Observable 时，switchAll 就会立即订阅最新的内部 Observable，退订之前的，这也就是 ‘switch’ 的含义

```
import { interval } from 'rxjs';import { map, switchAll, take } from 'rxjs/operators';

interval(1500).pipe(
  take(2),
  map(x => interval(1000).pipe(
    map(y => x + ':' + y), 
    take(2))
  ),
  switchAll()
).subscribe(console.log)// 0:0// 1:0// 1:1
```

> concatAll、mergeAll、switchAll 用来将高阶的 Observable 对象压平成一阶的 Observable，和 loadash 中压平数组的 flatten 方法类似。concatAll 会对内部的 Observable 对象做 concat 操作，和 concat 操作符类似，如果前一个内部 Observable 没有完结，那么 concatAll 不会订阅下一个内部 Observable，mergeAll 则是同时处理。switchAll 比较特殊一些，它总是切换到最新的内部 Observable 对象获取数据。上游高阶 Observable 产生一个新的内部 Observable 时，switchAll 就会立即订阅最新的内部 Observable，退订之前的，这也就是 ‘switch’ 的含义。

> concatMap、mergeMap、switchMap 

> zip  组合多个Observable以创建一个Observable，其值根据其每个输入Observable的值按顺序计算,如果最后一个参数是函数，则此函数用于根据输入值计算创建的值。否则，返回一个输入值数组

> combineLatest 只要任何输入Observable发出一个值，它就会使用所有输入中的最新值计算公式，然后发出该公式的输出。

> withLatestFrom 每当源Observable发出一个值时，它使用该值加上来自其他输入Observable的最新值计算公式，然后发出该公式的输出。

> startWith startWith 是在 Observable 的一开始加入初始数据，同步立即发送，常用来提供初始状态

```
startWith
const source$ = fromEvent(document, 'click');
let number = 0;
const fakeRequest = x => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aa');
            resolve(number++);
        }, 1000);
    });
};

source$.pipe(
    startWith('initData'), // 初始化时默认调用了一次 这里通过 startWith 操作符获取了页面的初始数据，之后通过点击按钮获取更新数据。
    switchMap(x => from(fakeRequest(x)))
).subscribe(console.log);
```