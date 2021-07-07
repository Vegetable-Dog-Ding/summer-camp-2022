2021.7.5

## git 自学

1. 创建git库

   ![创建git库](https://i.loli.net/2021/07/07/ldyqTCNjRAPKHJF.png)

2. 上传文件

   ![上传文件](https://i.loli.net/2021/07/07/PZ9L2cOAtHQvE76.png)

3.  git status 可以看状态 git diff 具体看修改的内容， 改完重新add 和 commit就好（add前status里modified是红色，add后变绿色）

4. git log 看修改历史(commit 后面是id)（git log --pretty=oneline 更好看）

   ![git log解图](https://i.loli.net/2021/07/07/HGvAibTZn52aLhX.png)

   5. git reset(版本间关系HEAD^   / 去未来 id (git reflog 可以查历史命令的id))(HEAD^的方式感觉不是很方便，干脆就直接id就好了)

   ![git reset](https://i.loli.net/2021/07/07/2P6wbCABXOpDv7s.png)

   6. git的缓存区和版本区： commit就是对整个git库的版本截图而不是对单独文件的截图，reset功能的前进后退是HEAD标签赋予的.

   7. `git diff HEAD -- readme.txt`命令可以查看工作区和版本库里面最新版本的区别：

   8. 工作区文件的状态与缓存区或版本区不同，可用git checkout -- file 统一: **修改或者删除都是不同**

      如果修改进了缓存区，Git同样告诉我们，用命令`git reset HEAD <file>`可以把暂存区的修改撤销掉（unstage），重新放回工作区：

      ![git checkout](https://i.loli.net/2021/07/07/6AJ1NtfCLMb2sVR.png)

   9. git 删除: git rm file + git commit --m ""   工作区误删git checkout -- file

   10. 远程库 github

       ![github](https://i.loli.net/2021/07/07/ECoZJ2xjA9gstpO.png)

       ```
       $ git push origin master 把本地库镜像到远程库
       ```

![删除远程库](https://i.loli.net/2021/07/07/yjUpe59x7EF3kuz.png)

克隆远程库：$ git clone git@github.com:michaelliao/gitskills.git

11. 分支

    ```
    1,创建分支:git checkout -b dev  /// git switch -c dev
    2,查看分支状态：$ git branch
    * dev
      master
    2.5 在分支上进行修改
    3，先切换回主分支：git checkout master  
    4，再把分支合并到当前分支：git merge dev
    5，删除分支：$ git branch -d dev
    6，切换分支：git switch master
    ```

    ![快速合并](https://i.loli.net/2021/07/07/xfCd76i2zaPU1Yh.png)

    ![冲突](https://i.loli.net/2021/07/07/rGe8nqE6wCd9hLR.png)

    

此时不能快速合并，并且可能会报冲突，需手动编辑解决冲突

用`git log --graph`命令可以看到分支合并图。



```
非快速合并，一个commit
$ git merge --no-ff -m "merge with no-ff" dev
```

![非快速合并](https://i.loli.net/2021/07/07/KuZVt8kpTlMCPX7.png)

此时缓存区还有东西，正在工作，需要切换到其他分支，临时进行完全不同的工作，且当前为commit的文件不能commit：

```
git stash 将现在工作储藏起来
```

![stash](https://i.loli.net/2021/07/07/MsyQuxAIWVni9EB.png)

恢复回dev分支的工作状态后，由于master的bug，分支dev中也存在，所以需要在分支一 同步分支二的版本

具体原理：分支1 进行一次commit，内容为分支二的最新版本（区别merge，只是在分支一进行的一次特殊提交） 

```
$ git cherry-pick 4c805e2（分支二想要同步的commit命令代码）
```

12. 多人协作

    查看远程库状态：git remote -v

    **推送分支** ： git push origin 分支名（本地）

    **抓取分支** : git pull 

![多人协作](https://i.loli.net/2021/07/07/pkBZNF8AH2huCKY.png)

当你的小伙伴从远程库clone时，默认情况下，你的小伙伴只能看到本地的`master`分支。现在，你的小伙伴要在`dev`分支上开发，就必须创建远程`origin`的`dev`分支到本地，于是他用这个命令创建本地`dev`分支：

```
$ git checkout -b dev origin/dev
```

13. 标签（比commit号更直观的方式）

    1. 切换到要打标签的分支

    2. git tag <name>  （默认打在该分支最新的commit） 

       任意commit：（git log --pretty=oneline --abbrev-commit 找提交记录）$ git tag v0.9 f52c633

    3. git tag 查看所有标签

    4. `git show <tagname>`查看标签信息

    5. 还可以创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字：

       ```
       $ git tag -a v0.1 -m "version 0.1 released" 1094adb
       ```

    6. 删除标签

       ```
       $ git tag -d v0.1
       ```

    7. 命令`git push origin <tagname>`可以推送一个本地标签；
    8. 命令`git push origin --tags`可以推送全部未推送过的本地标签；
    9. 命令`git tag -d <tagname>`可以删除一个本地标签；
    10. 命令`git push origin :refs/tags/<tagname>`可以删除一个远程标签。

14. .gitignore文件：

    创建： touch .gitignore

    语法：

    1、过滤整个文件夹（test文件夹）
    命令：test/

    2、过滤具体文件
    命令：index.html

    3、过滤指定后缀的文件(过滤后缀为ts的文件)
    命令：*.ts

    4、过滤隐藏文件
    命令：隐藏文件名 （如mac 的.DS_Store 则写为 “ .DS_Store ”即可，和过滤具体文件命令相同）；

    1、注释：“ # ” 写在行的开头，表示该行为注释；

    2、指定添加文件：”!” 在过滤的命令前面添加一个“！”，则表示要添加某一项。 如：test/ 表示过滤test文件夹，但是! test/ 表示添加test文件夹；
