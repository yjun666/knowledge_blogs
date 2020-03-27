> cacheReq.service // 缓存请求，以便于减少请求次数
> setAuthor.service // 拦截器修改请求头添加 token
> loggingInterceptor.service // 拦截器记录日志，监听请求的返回时间成功还是失败
> uploadInterceptor.service // 拦截器监听文件上传进度
