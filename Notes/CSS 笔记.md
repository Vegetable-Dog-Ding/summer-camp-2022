## CSS 自学

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