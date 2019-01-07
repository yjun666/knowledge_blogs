## git 基础操作
```
1、先建立远程仓库  test
2、使用cmd进入创建好的文件夹路径并输入  git init命令
3、然后输入git add .
4、再输入提交添加注释命令git commit-m'添加注释'
5、如果这是后没有分支就git branch master创建一个分支 
6、输入命令 ：git remote add origin https://github.com/yangjun123456/testgit.git  不知道是干啥的好像是把文件的git和远程仓库建立某种联系，不过先写这个才能push提交
7、输入命令：git push origin master提交文件到远程仓库就好了

创建子分支
1、输入命令：git checkout -b dev创建并切换远程子分支123
2、可使用git branch查看本地分支及git branch -a 查看所有远程分支

删除远程分支
git push --delete origin zhenduanyi

删除本地分之
git branch -D zhenduanyi

//解决 failed  to push some refs  to  git  方案
//git pull --rebase origin master

git remote -v 查看当前远程仓库

git fetch // 同步远程仓库

git checkout -b dev origin/dev   // 切换到本地不存在但远程存在的分支，需要提前执行git fetch同步远程仓库 


```