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
