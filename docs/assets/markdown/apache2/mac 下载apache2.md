### 下载apache2

<!-- 本文配置摘抄自https://www.linuxidc.com/Linux/2015-02/113577.htm，如有问题请到原网站查看 -->

* apache命令
    * `sudo apachectl -k restart` 重新启动apache服务器
    * `sudo apachectl -k start` 启动apache服务器
    * `sudo apachectl -k stop` 停止apache服务器

1. `brew install apache2` 下载apache2
2. 执行 `apachectl start`命令是报错 AH00557、AH00558， 解决AH00557、AH00558报错，只要找到httpd.conf把#ServerName www.example.com:80修改为ServerName localhost:80即可，本机默认端口8080，即localhost:8080;  详见 `https://www.landui.com/help/show-4731.html` 页面；[注]：本机没有apache2文件夹，httpd.conf 文件在 /usr/local/etc/httpd 路径上;

3. 创建一个文件夹 Sites 放置项目
4. 进入到httpd.conf文件夹下，备份httpd.conf文件 `sudo cp httpd.conf httpd.conf.bak`；如果想要恢复httpd.conf 文件 执行 `sudo cp httpd.conf.bak httpd.conf`
5. 修改 httpd.conf 配置文件 搜索 DocumentRoot 关键词后 将路径修改为项目的路径即 `/Users/yangjun/Sites` 
6. 如果系统是mac10.10以上，那么搜索Options单词 在Options和Follow之间增加一个单词 Indexes， 后重启apache 服务器，浏览器打开 localhost:8080
7. 浏览器打开localhost:8080 显示的Sites目录，可通过Sites目录直接打开静态服务的静态页面




<!-- 本文配置摘抄自https://www.linuxidc.com/Linux/2015-02/113577.htm，如有问题请到原网站查看 -->

### webDav服务器
> 接下来是WebDav服务器，这个是基于apache的，就是你apache已经启动了才能开启webDav服务器的。
> 当然如果apache已经完全配置好了那webDav也就很好配置了
> WebDav完全可以当成一个网络共享的文件服务器使用！
1. 在httpd.conf 文件中搜索 httpd-dav.conf 关键词 删除前边的#号取消注释
2. 在httpd.conf 文件中搜索 LoadModule dav_module libexec/apache2/mod_dav.so、LoadModule dav_fs_module libexec/apache2/mod_dav_fs.so、LoadModule auth_digest_module libexec/apache2/mod_auth_digest.so 中的关键词将前边的#号删除取消注释，
3. cd /usr/local/etc/httpd/extra 进入目录， 执行 sudo cp httpd-dav.conf httpd-dav.conf.bak 进行备份 httpd-dav.conf 文件以放置出现问题进行恢复
4. 在httpd.conf 文件中搜索 Digest  把Digest改成Basic 
5. 执行put文件中的命令 挨着行的命令执行
```
# 切换目录
echo "切换至/usr目录"
cd /usr
# 设置用户admin的密码
echo "设置admin的密码"
htpasswd -c /usr/user.passwd admin
# 设置密码文件的访问群组
echo "正在创建相关目录并修改访问权限..."
chgrp www /usr/user.passwd
# 建立var文件夹，保存DavLockDB相关文件
mkdir -p /usr/var
# 修改var文件夹用户群组
chown -R www:www /usr/var
# 建立上传文件夹：uploads
mkdir -p /usr/uploads
# 修改uploads文件夹用户群组
chown -R www:www /usr/uploads
echo "修改完毕，请确认..."
ls -lG
echo "重新启动Apache服务器"
# 重新启动Apache
apachectl -k restart
```
> 执行完成最后一条命令可添加图片文件至uploads 然后浏览器直接使用本机IP地址 http://192.168.0.104:8080/uploads/1.jpg、或者http://localhost:8080/uploads/1.jpg 因为 /usr/local/etc/httpd 中httpd.conf 文件中配置的localhost:8080