## git 基础操作

```
1、先建立远程仓库  test
2、使用cmd进入创建好的文件夹路径并输入  git init命令
3、然后输入git add .
4、再输入提交添加注释命令git commit-m'添加注释'
5、如果这是后没有分支就git branch master创建一个分支 
6、输入命令 ：git remote add origin https://github.com/yangjun123456/testgit.git  不知道是干啥的好像是把文件的git和远程仓库建立某种联系，不过先写这个才能push提交
7、输入命令：git push origin master提交文件到远程仓库就好了

//解决 failed  to push some refs  to  git  方案
//git pull --rebase origin master

git remote -v 查看当前远程仓库

git fetch // 同步远程仓库

git global --config user.name  // 查看当前用户名
git global --config user.email  // 查看当前邮箱

git global --config user.name ''  // 配置当前用户名
git global --config user.email ''  // 配置当前邮箱

git status // 查看当前状态，尤其在git add . 之后或git pull 之后
```

> 创建子分支

```
1、输入命令：git checkout -b dev创建并切换远程子分支123
2、可使用git branch查看本地分支及git branch -a 查看所有远程分支
```

> 删除远程分支
`git push --delete origin zhenduanyi`

> 删除本地分之
`git branch -D zhenduanyi`

> git log

```
show commit history of a branch.
git log --oneline --number: 每条log只显示一行,显示number条.
git log --oneline --graph:可以图形化地表示出分支合并历史.
git log branchname可以显示特定分支的log.
git log --oneline branch1 ^branch2,可以查看在分支1,却不在分支2中的提交.^表示排除这个分支(Window下可能要给^branch2加上引号).
git log --decorate会显示出tag信息.
git log --author=[author name] 可以指定作者的提交历史.
git log --since --before --until --after 根据提交时间筛选log.
--no-merges可以将merge的commits排除在外.
git log --grep 根据commit信息过滤log: git log --grep=keywords
默认情况下, git log --grep --author是OR的关系,即满足一条即被返回,如果你想让它们是AND的关系,可以加上--all-match的option.
git log -S: filter by introduced diff.
比如: git log -SmethodName (注意S和后面的词之间没有等号分隔).
git log -p: show patch introduced at each commit.
每一个提交都是一个快照(snapshot),Git会把每次提交的diff计算出来,作为一个patch显示给你看.
另一种方法是git show [SHA].
git log --stat: show diffstat of changes introduced at each commit.
同样是用来看改动的相对信息的,--stat比-p的输出更简单一些.
```
> 切换到本地不存在但远程存在的分支，需要提前执行git fetch同步远程仓库 
`git checkout -b dev origin/dev`

> git reflog

```
git reflog是对reflog进行管理的命令,reflog是git用来记录引用变化的一种机制,比如记录分支的变化或者是HEAD引用的变化.
当git reflog不指定引用的时候,默认列出HEAD的reflog.
HEAD@{0}代表HEAD当前的值,HEAD@{3}代表HEAD在3次变化之前的值.
git会将变化记录到HEAD对应的reflog文件中,其路径为.git/logs/HEAD, 分支的reflog文件都放在.git/logs/refs目录下的子目录中.
```

> git tag

```
tag a point in history as import.
会在一个提交上建立永久性的书签,通常是发布一个release版本或者ship了什么东西之后加tag.
比如: git tag v1.0
git tag -a v1.0, -a参数会允许你添加一些信息,即make an annotated tag.
当你运行git tag -a命令的时候,Git会打开一个编辑器让你输入tag信息.

我们可以利用commit SHA来给一个过去的提交打tag:
git tag -a v0.9 XXXX

push的时候是不包含tag的,如果想包含,可以在push时加上--tags参数.
fetch的时候,branch HEAD可以reach的tags是自动被fetch下来的, tags that aren’t reachable from branch heads will be skipped.如果想确保所有的tags都被包含进来,需要加上--tags选项.
```

> git remote

```
list, add and delete remote repository aliases.
因为不需要每次都用完整的url,所以Git为每一个remote repo的url都建立一个别名,然后用git remote来管理这个list.
git remote: 列出remote aliases.
如果你clone一个project,Git会自动将原来的url添加进来,别名就叫做:origin.
git remote -v:可以看见每一个别名对应的实际url.
git remote add [alias] [url]: 添加一个新的remote repo.
git remote rm [alias]: 删除一个存在的remote alias.
git remote rename [old-alias] [new-alias]: 重命名.
git remote set-url [alias] [url]:更新url. 可以加上—push和fetch参数,为同一个别名set不同的存取地址.
```

> git checkout

```
git checkout (branchname)
切换到一个分支.
git checkout -b (branchname): 创建并切换到新的分支.
这个命令是将git branch newbranch和git checkout newbranch合在一起的结果.
checkout还有另一个作用:替换本地改动:
git checkout --<filename>
此命令会使用HEAD中的最新内容替换掉你的工作目录中的文件.已添加到暂存区的改动以及新文件都不会受到影响.
注意:git checkout filename会删除该文件中所有没有暂存和提交的改动,这个操作是不可逆的.
```

> git branch

```
git branch可以用来列出分支,创建分支和删除分支.
git branch -v可以看见每一个分支的最后一次提交.
git branch: 列出本地所有分支,当前分支会被星号标示出.
git branch (branchname): 创建一个新的分支(当你用这种方式创建分支的时候,分支是基于你的上一次提交建立的). 
git branch -d (branchname): 删除一个分支.
删除remote的分支:
git push (remote-name) :(branch-name): delete a remote branch.
这个是因为完整的命令形式是:
git push remote-name local-branch:remote-branch
而这里local-branch的部分为空,就意味着删除了remote-branch
```

> git stash

```
把当前的改动压入一个栈.
git stash将会把当前目录和index中的所有改动(但不包括未track的文件)压入一个栈,然后留给你一个clean的工作状态,即处于上一次最新提交处.
git stash list会显示这个栈的list.
git stash apply:取出stash中的上一个项目(stash@{0}),并且应用于当前的工作目录.
也可以指定别的项目,比如git stash apply stash@{1}.
如果你在应用stash中项目的同时想要删除它,可以用git stash pop

删除stash中的项目:
git stash drop: 删除上一个,也可指定参数删除指定的一个项目.
git stash clear: 删除所有项目.
```

>git clean

```
git clean是从工作目录中移除没有track的文件.
通常的参数是git clean -df:
-d表示同时移除目录,-f表示force,因为在git的配置文件中, clean.requireForce=true,如果不加-f,clean将会拒绝执行.
```

> git rm

```
git rm file: 从staging区移除文件,同时也移除出工作目录.
git rm --cached: 从staging区移除文件,但留在工作目录中.
git rm --cached从功能上等同于git reset HEAD,清除了缓存区,但不动工作目录树.
```

> git revert

```
反转撤销提交.只要把出错的提交(commit)的名字(reference)作为参数传给命令就可以了.
git revert HEAD: 撤销最近的一个提交.
git revert会创建一个反向的新提交,可以通过参数-n来告诉Git先不要提交.
```

> git reset

```
undo changes and commits.
这里的HEAD关键字指的是当前分支最末梢最新的一个提交.也就是版本库中该分支上的最新版本.
git reset HEAD: unstage files from index and reset pointer to HEAD
这个命令用来把不小心add进去的文件从staged状态取出来,可以单独针对某一个文件操作: git reset HEAD - - filename, 这个- - 也可以不加.
git reset --soft
move HEAD to specific commit reference, index and staging are untouched.
git reset --hard
unstage files AND undo any changes in the working directory since last commit.
使用git reset —hard HEAD进行reset,即上次提交之后,所有staged的改动和工作目录的改动都会消失,还原到上次提交的状态.
这里的HEAD可以被写成任何一次提交的SHA-1.
不带soft和hard参数的git reset,实际上带的是默认参数mixed.

总结:
git reset --mixed id,是将git的HEAD变了(也就是提交记录变了),但文件并没有改变，(也就是working tree并没有改变). 取消了commit和add的内容.
git reset --soft id. 实际上，是git reset –mixed id 后,又做了一次git add.即取消了commit的内容.
git reset --hard id.是将git的HEAD变了,文件也变了.
按改动范围排序如下:
soft (commit) < mixed (commit + add) < hard (commit + add + local working)
```

> git commit

```
提交已经被add进来的改动.
git commit -m “the commit message"
git commit -a 会先把所有已经track的文件的改动add进来,然后提交(有点像svn的一次提交,不用先暂存). 对于没有track的文件,还是需要git add一下.
git commit --amend 增补提交. 会使用与当前提交节点相同的父节点进行一次新的提交,旧的提交将会被取消.
```

> git diff

```
不加参数的git diff:
show diff of unstaged changes.
此命令比较的是工作目录中当前文件和暂存区域快照之间的差异,也就是修改之后还没有暂存起来的变化内容.

若要看已经暂存起来的文件和上次提交时的快照之间的差异,可以用:
git diff --cached 命令.
show diff of staged changes.
(Git 1.6.1 及更高版本还允许使用 git diff --staged，效果是相同的).

git diff HEAD
show diff of all staged or unstated changes.
也即比较woking directory和上次提交之间所有的改动.

如果想看自从某个版本之后都改动了什么,可以用:
git diff [version tag]
跟log命令一样,diff也可以加上--stat参数来简化输出.

git diff [branchA] [branchB]可以用来比较两个分支.
它实际上会返回一个由A到B的patch,不是我们想要的结果.
一般我们想要的结果是两个分支分开以后各自的改动都是什么,是由命令:
git diff [branchA]…[branchB]给出的.
实际上它是:git diff $(git merge-base [branchA] [branchB]) [branchB]的结果.
```

