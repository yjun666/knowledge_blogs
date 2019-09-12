### debugger 代码调试

1. 打开调试界面   mac打开调试快捷键 `command+shift+D`
2. 点击调试按钮如果在.vscode下没有配置launch.json那么开始配置，如果配置了launch.json那么直接启动

```
launch.json 简单配置
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [{
    "type": "chrome", // 默认就行
    "request": "launch", // 默认就行
    "name": "Launch Chrome against localhost", // 随便起名称
    "url": "http://localhost:4108", // 启动本地项目所用的host
    "webRoot": "${workspaceFolder}/src"
  }]
}

```

3. 点击编辑器行数前边出现小红点，定位debugger位置
4. 调试控制台中查看打印，同chrome F12 控制台的console.log
5. 编辑器左侧共有变量、监视、调用堆栈、断点几项

```
变量可以查看到当前所在的本地变量
监视中可以添加要监控的类上绑定的变量名称即带有this指针的，最好是先打印当前的this和_this都是什么，否则可能调用不到当前this上的属性值
调用堆栈中可以看到从触发到当前debugger的所有调用过程，可以查看都是从哪里调用过来的
断点可以查看当前设置的所有断点，即可以哪些断点是否应用
```