### mongodb download address;
`https://www.mongodb.com/download-center/community`

### mongodb 客户端数据库----`studio 3T客户端`
`https://studio3t.com/download-now/`


### start mongodb serve
> 配置环境变量后在C盘下创建自己的数据存储空间(这里把数据存储空间创建到了C盘下即data文件夹)后启用命令行执行 `mongod --dpath=C:\data`

### 详细的数据库增删改查见git下的express-start仓库

> 数据库目前为本地连接即127.0.0.1:27017



## Mac 安装mongodb
> 使用 curl 命令来下载安装：

```
# 进入 /usr/local
cd /usr/local

# 下载
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz

# 解压
sudo tar -zxvf mongodb-osx-x86_64-3.4.2.tgz

# 重命名为 mongodb 目录
sudo mv mongodb-osx-x86_64-3.4.2 mongodb
```

> 安装完成后，我们可以把 MongoDB 的二进制命令文件目录（安装目录/bin）添加到 PATH 路径中：
`export PATH=/usr/local/mongodb/bin:$PATH`

Mac 运行 mongodb
> 首先需要先创建一个数据库存储目录即data文件夹，同windows启动mongod相同

预先配置好环境变量后执行`mongod --dbpath=/usr/local/data`可启动mongodb服务
启动好服务后可执行`http://localhost:27017/`查看是否启动服务成功

