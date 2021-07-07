2021.7.5

## git 自学

1. 创建git库

   ![创建git库](D:\编程\冰岩夏令营\上课笔记\截图\创建git库.png)

2. 上传文件

   ![上传文件](D:\编程\冰岩夏令营\上课笔记\截图\add和commit文件.png)

3.  git status 可以看状态 git diff 具体看修改的内容， 改完重新add 和 commit就好（add前status里modified是红色，add后变绿色）

4. git log 看修改历史(commit 后面是id)

   ![git log解图](D:\编程\冰岩夏令营\上课笔记\截图\gitlog.png)

   5. git reset(版本间关系HEAD^   / 去未来 id (git reflog 可以查历史命令的id))(HEAD^的方式感觉不是很方便，干脆就直接id就好了)

   ![git reset](D:\编程\冰岩夏令营\上课笔记\截图\git reset.png)

   6. git的缓存区和版本区： commit就是对整个git库的版本截图而不是对单独文件的截图，reset功能的前进后退是HEAD标签赋予的.

   7. `git diff HEAD -- readme.txt`命令可以查看工作区和版本库里面最新版本的区别：

   8. 工作区文件的状态与缓存区或版本区不同，可用git checkout -- file 统一: **修改或者删除都是不同**

      如果修改进了缓存区，Git同样告诉我们，用命令`git reset HEAD <file>`可以把暂存区的修改撤销掉（unstage），重新放回工作区：

      ![git checkout](D:\编程\冰岩夏令营\上课笔记\截图\git checkout.png)

   9. git 删除: git rm file + git commit --m ""   工作区误删git checkout -- file

   10. 远程库 github

       ![github](D:\编程\冰岩夏令营\上课笔记\截图\远程库.png)

       ```
       $ git push origin master 把本地库镜像到远程库
       ```

![删除远程库](D:\编程\冰岩夏令营\上课笔记\截图\删除远程库.png)

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

    ![快速合并](D:\编程\冰岩夏令营\上课笔记\截图\快速合并.png)

    ![冲突](D:\编程\冰岩夏令营\上课笔记\截图\冲突.png)

    

此时不能快速合并，并且可能会报冲突，需手动编辑解决冲突

用`git log --graph`命令可以看到分支合并图。



```
非快速合并，一个commit
$ git merge --no-ff -m "merge with no-ff" dev
```

![非快速合并](D:\编程\冰岩夏令营\上课笔记\截图\非快速合并.png)

此时缓存区还有东西，正在工作，需要切换到其他分支，临时进行完全不同的工作，且当前为commit的文件不能commit：

```
git stash 将现在工作储藏起来
```

![stash](D:\编程\冰岩夏令营\上课笔记\截图\git stash恢复.png)

恢复回dev分支的工作状态后，由于master的bug，分支dev中也存在，所以需要在分支一 同步分支二的版本

具体原理：分支1 进行一次commit，内容为分支二的最新版本（区别merge，只是在分支一进行的一次特殊提交） 

```
$ git cherry-pick 4c805e2（分支二想要同步的commit命令代码）
```

12. 多人协作

    查看远程库状态：git remote -v

    ## 推送分支 ##   git 

