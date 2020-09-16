###### [cordova官网](http://cordova.axuer.com/docs/zh-cn/latest/)
# cordova 创建过程
#### 1.npm install -g cordova  全局安装cordova
#### 2.安装java 分jdk jre，安装jdk1.8，配置环境变量，下边是mac环境变量，环境变量地址即安装地址

```
[[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

#java 环境变量
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home

#gradle 环境变量
GRADLE_HOME=/Users/yangjun/downloadandorid/gradle-3.3
export GRADLE_HOME
export PATH=$PATH:$GRADLE_HOME/bin

#adb 环境变量
export PATH=${PATH}:/Users/yangjun/Library/Android/sdk/platform-tools
export PATH=${PATH}:/Users/yangjun/Library/Android/sdk/tools

source ~/.bashrc
```
#### 3.下载安装android studio并进行配置，路径选择默认安装就行，下载地址
`http://www.androiddevtools.cn`
> 设置android studio步骤:
* 详情见 cordova_images/pic1.png
* 不用设置http proxy 进行安装后见pic2
* 设置下载android sdk和android target见pic3
* 添加打包项目见pic4

#### 4.最后一步设置gradle,下载地址
`https://services.gradle.org/distributions/gradle-4.4.1-all.zip`

下载后配置到环境变量


# cordova 建立项目并进行打包apk
```
1、安装cordova
  npm install -g cordova

2、创建应用
  cordova create hello com.example.hello HelloWorld

3、添加平台
  cd hello
  cordova platform add android

4、构建:
   cordova build android
   
5、测试：
   cordova emulate android
   
6、手机测试：
   cordova run android
```

* 命令
  - cordova requirements 进入cordova创建的应用文件夹测试当前运行环境是否支持，包括jdk、sdk、android target、gradle
  - cordova build android 生成apk文件
  - 进入/Users/yangjun/Library/Android/sdk/platform-tools执行adb install <path --apk文件路径>在android studio模拟器上生成应用并进行测试
  
执行adb install <path --apk文件路径> 命令提示more than one device/emulator  以下是解决办法
```
当我连着手机充电的时候，启动模拟器调试，执行ADB指令时，报错。
C:\Users\gaojs>adb shell
error: more than one device and emulator
C:\Users\gaojs>adb install e:\good.apk
error: more than one device and emulator
碰到这种情况，首先要查一下，是不是真的有多个设备或模拟器。
C:\Users\gaojs>adb devices
List of devices attached
emulator-5554   device
4dfadcb86b00cf05        device
发现还真是多个设备，那就需要为ADB命令指定设备的序列号了。
C:\Users\gaojs>adb -s emulator-5554 shell
也就是如上所示，给命令加上-s的参数就可以了！
如果实际上只有一个设备或模拟器，并且查到有offline的状态；
那就说明是ADB本身的BUG所导致的，就需要用如下的方法处理下了：
C:\Users\gaojs>adb kill-server
C:\Users\gaojs>taskkill /f /im adb.exe
第一条命令是杀ADB的服务，第二条命令是杀ADB的进程！
如果第一条没有用，才考虑用第二条命令再试试看的！
http://blog.csdn.net/gaojinshan/article/details/9455193
```



添加apk文件到模拟器

/Users/yangjun/Desktop/hello/platforms/android/app/build/outputs/apk/debug/app-debug.apk


