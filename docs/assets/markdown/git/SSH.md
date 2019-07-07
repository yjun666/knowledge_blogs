#### ssh下载项目
`git clone git@github.com:xmanrui/timerecord.git`

#### 创建密钥-----github 添加密钥处有教程
`ssh-keygen -t rsa -C "youremail@xxx.com"`

#### 打开终端输入测试是否添加成功
`eval "$(ssh-agent -s)"`

#### 将SSH私钥添加到ssh-agent并将密码存储在密钥链中
`ssh-add -K ~/.ssh/id_rsa`

#### 然后将密钥的公共密钥添加到github的密钥中
#### 终端输入以下命令测试是否添加成功
`ssh -T git@github.com`