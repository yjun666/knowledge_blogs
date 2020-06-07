#### upload上传文件
> 上传文件代码监听上传文件进度, 使用 getEventMessage 方法 监听

```
// 获取当前上传文件的进度事件
private getEventMessage(event: HttpEvent<any>, progressFn: (T) => void, fn: (T) => void) {
  // console.log(event);
  // console.log(event.type, '====', HttpEventType.Sent, HttpEventType.UploadProgress, HttpEventType.Response);
  switch (event.type) {
    case HttpEventType.Sent:
      // return `开始上传文件`;
      break;
    // 正在上传
    case HttpEventType.UploadProgress:
      const percentDone = Math.round(100 * event.loaded / event.total);
      console.log(percentDone);
      progressFn(`${percentDone}%`);
      return `${percentDone}%`;
    // break;
    // 上传完毕
    case HttpEventType.Response:
      // 回调
      fn(event.body);
      return event.body;
    default:
      break;
    // return `文件上传`;
  }

}

// 上传文件
private upload(param) {
  // const vm = this;
  if (param.file) {
    // const apiUrl = environment.apiUrl; // 开发时所有接口的域名
    // console.log(apiUrl);
    const file = param.file;

    const formdata = new FormData();
    formdata.append('fileInfo', file);

    // 设置headers
    const newHeaders: object = Object.assign({}, { reportProgress: true });
    // 设置请求参数
    const req = new HttpRequest('POST', `/upload/file`, formdata, newHeaders);

    // 文件上传接口
    this.uploadSubscribeObj[param.id] = this.http.request(req).pipe(
      map(event => this.getEventMessage(event, (data) => {
        // 监听进度条事件
        param.progress = data;
      }, (data) => {
        // 文件上传完成事件
        console.log(data, '上传完成');
        // param.remoteFileName = data.data;
      }))
    ).subscribe((data) => {
      console.log(data);
    }, (err) => { });
  }
}
```
