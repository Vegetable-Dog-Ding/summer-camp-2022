CSS 自学

1. #### 总述

   ```
   位置:
   <html>
   	<head>
   		<style>
   			css内容
   		<style/>
   	<head/>
   <html/>
   
   内容格式：
   标签名 {
   		key1:value; 
   		key2:value;
   	  }
   eg: 
   p {
   	color: red;
       font-size: 12px
      }
   ```

   2. #### 选择器

      1. ##### 标签选择器

         ```
         头部是标签名；修改所有标签
         ```

      2. ##### 类选择器

         ![类选择器](https://i.loli.net/2021/07/07/ZQYMAFou2qgCNVx.png)

         ```
         调用: class:""
         多类名：每个标签可以有多个类名，用空格隔开
         ```
      
      3. ##### id选择器
      
         ```
         定义：#xxx {}
         调用：id=""
         ```
      
         **只能调用一次!!**
      
         **类是性质，id是个性**
      
      4. ##### 通配符选择器
      
         ```
         定义：* {}
         范围：所有元素！
         ```

3. #### 字体属性

   1. ##### 字体

![字体](https://i.loli.net/2021/07/07/7XrAEe4ymchkv1n.png)

   2. **字体大小**(默认16px)

      font-size: __px; (标题字体大小要单独设)

   3. **字体粗细**

![字体粗细](https://i.loli.net/2021/07/07/VJTFdZz9wAu5DxP.png)

 4. **字体样式**

    ![字体style](https://i.loli.net/2021/07/08/voQum7Cta6n8JXl.png)

    5. **字体复合属性**![字体复合属性](https://i.loli.net/2021/07/07/FLavOAzVBCSdZrX.png)

       #### 3.文本属性

       1. **文本颜色**

       ```
       color:
       ```

       2. **对齐文本**

          ```
          text-align: center;/right;/left;/
          ```

       3. **文本修饰**

          ```
          text-decoration: none;(去掉链接的下划线) underline; （加下划线) overline;
          ```

       4. **文本缩进**（首行缩进）

          ```
          text-indent:__px;/__em;(em相对本元素text-size的单位)
          ```

       5. **行间距**(前面font：可以设)

          ```
          line-height:__px;
          ```

          ![行间距](https://i.loli.net/2021/07/08/BDQ59F1mJtM2nbp.png)

4. #### css引入方式

   1. **内部样式表**(前面笔记用的)

   2. **行内样式表**

      ```
      eg:<div style="color: red; fon-size: 12px;">xxx</div>
      适用于只改某一行，键值对简单
      ```

   3. **外部样式表**

      ![外部样式表](https://i.loli.net/2021/07/08/zobdtTPkOrqZ7Kl.png)

      ​	(css文件里不用写style)

5. #### 调试工具

   ![调试工具](https://i.loli.net/2021/07/08/VhnaptA4wPNQ6qS.png)

6. #### Emmet 语法![emmet快速生成html](https://i.loli.net/2021/07/08/7x29Agu1VslJFob.png)

   ​	**css:简写**

   格式化：ctrl+shift+f

   7. #### 复合选择器

      1. **后代选择器**(孙子也会被悬赏)

         ```
         空格隔开：ol li a {} (可以是任何选择器)
         ```

      2. **子代选择器**（亲儿子才选）

         ```
         >隔开；
         ```

      3. **并集选择器**

         ```
         逗号隔开
         ```

      4. **伪类选择器**

![伪类选择器1](https://i.loli.net/2021/07/08/Mq3rfZXdwgvNneC.png)

![链接伪类注意事项](https://i.loli.net/2021/07/08/MPwU14c5zxdQit2.png)

**focus伪类选择器**(光标在哪选哪个--input text)

```
input:focus {}
```

8. #### css元素显示模式

   1. **块元素**(p\div\ul\ol\h)

![块元素特点](https://i.loli.net/2021/07/08/odWQSfbNY5GpzH2.png)

   2. **行内元素**(span)

      ![行内元素](https://i.loli.net/2021/07/08/G42drtS5BqzFaTV.png)

​	

3. **行内块元素**
4. **行内块元素转化**

4. ```
   css里display:block;/inline;/inline-block;
   ```



9. #### snipaste

   ![snipaste](https://i.loli.net/2021/07/08/Xb4QAE32g5OHM6l.png)

10. #### css背景

    ```
    1, background-image:none|url(url) （小图片或超大图片，容易布局）（默认情况平铺）
    2, background-repeat: repeat|no-repeat|repeat-x|repeat-y
    3.背景位置：方位名词顺序无关；精准单位/混合单位顺序x，y确定（没写的默认居中）
    4.背景位置固定:background-attachment:fixed|scroll
    5.背景颜色半透明：background: rgba（r,g,b,a)(a:透明度0-1 1不透)
    ```

    ![北京位置](https://i.loli.net/2021/07/09/iEAuO2N3yVrfxvb.png)

![背景复合](https://i.loli.net/2021/07/09/WAgIPiaLtEoYpM1.png)

11. #### css的三大特性

    ![继承性](https://i.loli.net/2021/07/09/tqb8PBHWkKhZTFN.png)

    

    

    ![行高继承](https://i.loli.net/2021/07/09/28MYDpZUnhJdwB7.png)

    

    ![层叠行](https://i.loli.net/2021/07/09/RZ38YEUmqfNyxrb.png)

![优先级](https://i.loli.net/2021/07/09/TmLxvfaJCdupcr7.png)

(复合选择题有权重的叠加，无进位)



12. #### 盒子组成

    ![盒子组成](https://i.loli.net/2021/07/09/zhiro2QnsEMDckf.png)

    1. 盒子边框

       ```
       border-width:边框粗细
       border-style：solid实线|dashed虚线|dotted点线
       border-color
       复合：border: 1px solid red;
       四个框分开写: border-top\bottom\left\right
       border-collapse:collapse; 合并相邻边框
       border是附加大小(会改变实际大小)
       ```

    2. 盒子内边框

       ```
       padding-left\right\top\bottom
       也是凭空加的大小，会撑开盒子（不设置盒子宽高就不会撑）
       ```

       ![padding复合](https://i.loli.net/2021/07/09/IATq3SU9RFG1Qd6.png)

    3. 外边距margin

       (单独写法和复合都和padding一样)

       (块级 （设置了width）： margin: 0 auto-----左右对齐)

    4. 嵌套塌陷

       给父元素定义上边框/上内边距

    5. 清除默认边距

       ```
       * {
       padding:0;
       margin:0;
       }
       ```

    6.  圆角边框

       ```
       border-radius:xxpx;/50%/不同圆角(4)：左上顺时针
       ```

    7. 盒子阴影

       ![盒子阴影](https://i.loli.net/2021/07/09/gB3DPQehbO9CLsH.png)

    8. 文字阴影

       ![文字阴影](https://i.loli.net/2021/07/09/o3ILUhOFc85jfdq.png)

13.  #### 页面布局

    1. 浮动

       ```
       选择器 { float：none/left/right}
       浮动元素具有行内块特性
       ```

    2. 清除浮动

       ```
       选择器 {clear： both；}
       1，额外标签法： 最后一个标签+<div style=“clear：both”></div>
       2.父级标签 overflow: hidden
       ```

       3. ![after伪元素](https://i.loli.net/2021/07/09/o19ViNBbst42jEF.png)

       4. 双伪元素![双伪元素](https://i.loli.net/2021/07/09/37gfuWinwZlkoA1.png)

14. #### flex布局

    ```
    display: flex
    ```

    ![常见父项属性](https://i.loli.net/2021/07/09/FlwcAQn7IDWhv1r.png)

    1. flex-direction

       ![direction](https://i.loli.net/2021/07/09/VXsA2vYtxGKgwFT.png)

       

    2. justify-content

       ![主轴上位置](https://i.loli.net/2021/07/09/JLRiI7srFdxnQjX.png)

    3. flex-wrap

       ![子项目换行](https://i.loli.net/2021/07/09/bna7QCTDkWdZO3u.png)

    4. align-items(子元素相对侧轴为单行)

       ![侧轴排列](https://i.loli.net/2021/07/09/asD1zrfkmpc4diF.png)

    5. align-content(换行)(单行下没效果)

       ![侧轴排列](https://i.loli.net/2021/07/09/oF7nTWhw8edft3B.png)

    6. flex-flow(1，3的复合属性)

       ```
       flex-flow: row wrap;
       ```

       

    7. flex 属性

       ![flex](https://i.loli.net/2021/07/10/JkUdb6QFjXDKorG.png)

15. #### 定位

    ```
    选择器 {position: xxx}
    top:/leftz;/bottom:/right:/
    ```

    

    1. static(无定位)
    2. relative (相对原位置，不会影响其他标准流)
    3. absolute(不再占有原位置)
       1. 无父/父亲无定位 ----相对文档定位
       2. 有（相对/绝对/固定) ,以最近一级带有定位的父级为准
    4. 定位和margin可以一起使用实现居中等效果
    
    **子绝父相**
    
    4. fixed
    
    5. z-index 定位叠放次序
    
       (数值越大，盒子越靠上)（如果属性相同，则按照书写顺序后来居上）
    
    6. 行内元素设置位置就可以设宽高，块级元素设定位大小默认内容大小
    
    7. 元素的显示与隐藏
    
       ```
       display:none ;隐藏对象 (不再占有原来的位置)
       display:block;显示对象
       visibility (隐藏还会占位置)
       overflow:scroll 溢出部分显示滚动条(不溢出也显示)
       ```
    
16. #### 字体图标

    字体图标下载：http://icomoon.io       www.iconfont.cn

    ```
    下好后把font文件放到根目录里 
    
    style.css内容复制到block
    
    再demo里复制对应小框框
    
    字体设icomoon
    ```

17. 小三角

    ```
      width height:0 border四个边各是一个三角形
    ```

18. 鼠标样式

    ![鼠标样式](https://i.loli.net/2021/07/11/NEuzy1BIthp6wcH.png)

19. 取消表单轮廓线

    input, textarea {outline:none;}

    textarea { resize:none;}

20. 元素对齐

    vertical-align（设在图片或文本框里）

21. css3过渡(谁变给谁加)(多个属性利用逗号分隔\all)

    ![css3过度](https://i.loli.net/2021/07/11/NWSJVfiqKleRBLG.png)



22. css3动画

    ![动画定义](https://i.loli.net/2021/07/14/QAhmp7ZftPJCS9v.png)
    
    
    
    ![动画属性](https://i.loli.net/2021/07/14/6oeO3Vx1rMckdTg.png)



23. transform属性
24. favicon图标
    - 截完图，找bitbug.net网站转换，放到根目录，复制一行代码在head标签里

