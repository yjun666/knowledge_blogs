
## promise---时间停止
```
const pause = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function run() {
  console.log('Hello')
  await pause(10000) // 续一秒
  console.log('World') // 一秒以后继续运行
}

run();
console.log(123123);
```
