### Git简介
Git的诞生，linux之父开发的

集中式vs分布式

### 安装Git
```
git config --global username
git config --global email
```
### 创建版本库
```
git init
git add
git commit
```

### 时光穿梭机

##### 版本回退
```
git log
git log --pretty=oneline //格式化输出
```
- commit id
版本号，通过SHA1算法计算出来的数字，使用16进制表示

```
git reflog  //记录了每一次命令，可以查看每一次操作的commit id
```

- `HEAD`指向的版本就是当前版本，
因此，Git允许我们在版本的历史之间穿梭，使用命令
```
git reset --hard commit_id

git reset --hard HEAD^
git reset --hard HEAD~100
```
##### 工作区和暂存区和版本库

工作区（Working Directory）
电脑上Git项目的目录

版本库（Repository）
工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为`stage`（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

- 第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

- 第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。

>可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

```
git status  //查看文件状态

```

##### 管理修改
>为什么Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件

`git commit`只负责把暂存区的修改提交了

提交后，用`git diff HEAD -- readme.txt`命令可以查看工作区和版本库里面最新版本的区别：

>每次修改，如果不用git add到暂存区，那就不会加入到commit中。

##### 撤消修改
>git checkout -- file可以丢弃工作区的修改

- 撤消工作区的修改
`git checkout -- file`
- 撤消暂存区的修改
1 `git reset HEAD <file>`将更改回退到工作区
2 按撤消工作区操作
- 撤消已经提交的修改（参考`版本回退`）

##### 删除文件
>命令git rm用于删除一个文件。
普通删除可以通过版本库恢复

>如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你`只能恢复文件到最新版本`，你会`丢失最近一次提交后你修改的内容`。

### 远程仓库
`Github`
`Gitlab`

你的本地`Git`仓库和`GitHub`仓库之间的传输是通过`SSH`加密的
所以需要一些配置：
- 1 创建SSH key
>在用户主目录下，看看有没有`.ssh`目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开`Shell`（Windows下打开`Git Bash`），创建S`SH Key`：
```
$ ssh-keygen -t rsa -C "youremail@example.com"

//你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。
```

##### 添加远程库
```
$ git remote add origin git@github.com:michaelliao/learngit.git

```
把一个已有的本地仓库与远程库关联，添加后，远程库的名字就是`origin`
>这是`Git`默认的叫法，也可以改成别的，但是`origin`这个名字一看就知道是远程库。

```
$ git push -u origin master
```

把本地库的内容推送到远程，用git push命令，实际上是把当前分支`master`推送到远程(`origin`)。

- SSH警告
  - 略，参考https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013752340242354807e192f02a44359908df8a5643103a000

##### 从远程库克隆
```
git clone
```

>要克隆一个仓库，首先必须知道仓库的地址，然后使用git clone命令克隆。

>Git支持多种协议，包括https，但通过ssh支持的原生git协议速度最快。

### 分支管理
>分支在实际中有什么用呢？假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。

>有了分支，就不用怕了。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。

>Git的分支是与众不同的，无论创建、切换和删除分支，Git在1秒钟之内就能完成！无论你的版本库是1个文件还是1万个文件。

##### 创建与合并分支

`HEAD`指向的 当前分支

>一开始的时候，`master`分支是一条线，Git用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点：



>当我们创建新的分支，例如`dev`时，`Git`新建了一个指针叫`dev`，指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上：
```
$ git checkout -b dev 

//git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：

$ git branch dev
$ git checkout dev //切换分支

```
Git创建和切换分支速度非常快，因为只需要修改指针的指向（新增一个`dev`指针，默认指向当前分支`master`,再将`HEAD`指针指向`dev`就完成了分支的切换）

>从现在开始，对工作区的修改和提交就是针对dev分支了，比如新提交一次后，dev指针往前移动一步，而master指针不变：

- 合并

```
git merge dev //将dev分支合并到当前分支
```
`git merge`命令用于合并指定分支到当前分支

>假如我们在`dev`上的工作完成了，就可以把`dev`合并到`master`上，最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了合并

>所以Git合并分支也很快！就改改指针，工作区内容也不变！

>合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支：

- ##### 创建与合并分支小结


Git鼓励大量使用分支：

查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`

创建+切换分支：`git checkout -b <name>`

合并某分支到当前分支：`git merge <name>`

删除分支：`git branch -d <name>`

##### 解决冲突
当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

用git log --graph命令可以看到分支合并图。

##### 分支管理策略
通常，合并分支时，如果可能，`Git`会用`Fast forward`模式，但这种模式下，`删除分支后，会丢掉分支信息`

>如果要强制禁用`Fast forward`模式，**`Git`就会在`merge`时生成一个新的`commit`**，这样，从分支历史上就可以看出分支信息。

```
$ git merge --no-ff -m "merge with no-ff" dev
```
准备合并`dev`分支，请注意`--no-ff`参数，表示禁用`Fast forward`

因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。

合并后，我们用git log看看分支历史：

###### 分支策略
>在实际开发中，我们应该按照几个基本原则进行分支管理：

>首先，`master`分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

>那在哪干活呢？干活都在`dev`分支上，也就是说，`dev`分支是不稳定的，到某个时候，比如1.0版本发布时，再把`dev`分支合并到`master`上，在`master`分支发布1.0版本；

>你和你的小伙伴们每个人都在`dev`分支上干活，每个人都有自己的分支，时不时地往`dev`分支上合并就可以了。

**Git分支十分强大，在团队开发中应该充分应用。**

**合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并**

##### Bug分支
修复bug时，我们会通过创建`新的bug分支`进行修复，然后合并，最后删除；

>当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支`issue-101`来修复它，但是，等等，当前正在`dev`上进行的工作还没有提交（在一个分支上有工作没有提交时是不能切换或创建分支的）：

并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？

幸好，Git还提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：
```
$ git stash
```
现在，用git status查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。

当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`/`git stash apply`，回到工作现场。
`git stash list`查看保存的工作现场

##### Feature分支

开发一个新feature，最好新建一个分支；

如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。

##### 多人协作
多人协作的工作模式通常是这样：

- 1 首先，可以试图用git push origin <branch-name>推送自己的修改；

- 2 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

- 3 如果合并有冲突，则解决冲突，并在本地提交；

- 4 没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！

如果`git pull`提示`no tracking information`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream-to origin/<branch-name> <branch-name> `。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。

- ###### 小结
  - 查看远程库信息，使用`git remote -v`；

  - 本地新建的分支如果不推送到远程，对其他人就是不可见的；

  - 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用git pull抓取远程的新提交；

  - 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致,(避免误解)；

  - 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；

  - 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

##### Rebase
https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA
使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上

>此时，C4' 指向的快照就和上面使用 merge 命令的例子中 C5 指向的快照一模一样了。 这两种整合方法的最终结果没有任何区别，但是变基使得提交历史更加整洁。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。

```
git log --graph --pretty=oneline --abbrev-commit //查看分支情况的参数
```

- rebase操作可以把本地未push的分叉提交历史整理成直线；

- rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

在push失败时候，按常规解决pull以下远端，此时会使得master分支产生分叉，这时候rebase以下相当于将master分支的分叉按顺序整理成直线，缺点是本地的分叉提交已经被修改过了。

- 只对`尚未推送或分享给别人的本地修改`执行变基操作清理历史；
- 从不对`已推送至别处的提交`执行变基操作

### 标签管理
#### 创建标签
- 命令`git tag <tagname>`用于新建一个标签，默认为HEAD，也可以指定一个commit id；

- 命令`git tag -a <tagname> -m "blablabla..."`可以指定标签信息；

- 命令`git tag`可以查看所有标签。
#### 标签管理
- 命令`git push origin <tagname>`可以推送一个本地标签；

- 命令`git push origin --tags`可以推送全部未推送过的本地标签；

- 命令`git tag -d <tagname>`可以删除一个本地标签；

- 命令`git push origin :refs/tags/<tagname>`可以删除一个远程标签。

### 使用Github
- 在GitHub上，可以任意Fork开源仓库；

- 自己拥有Fork后的仓库的读写权限；

- 可以推送pull request给官方仓库来贡献代码。

### 自定义Git
输出颜色

#### 忽略特殊文件
```
.gitignore

$ git add -f   // 强制添加
$ git check-ignore -v //检查ignore

```

小结
- 忽略某些文件时，需要编写`.gitignore`；

- `.gitignore`文件本身要放到版本库里，并且可以对`.gitignore`做版本管理！

#### 配置别名
`命令的快捷键`
```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```
>配置Git的时候，加上--global是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。

>每个仓库的Git配置文件都放在.git/config文件中

### 搭建Git服务器

>GitHub就是一个免费托管开源代码的远程仓库。但是对于某些视源代码如生命的商业公司来说，既不想公开源代码，又舍不得给GitHub交保护费，那就只能自己搭建一台Git服务器作为私有仓库使用。

>搭建Git服务器需要准备一台运行Linux的机器，强烈推荐用Ubuntu或Debian，这样，通过几条简单的apt命令就可以完成安装。

小结
- 搭建Git服务器非常简单，通常10分钟即可完成；

- 要方便管理公钥，用Gitosis；

- 要像SVN那样变态地控制权限，用Gitolite。