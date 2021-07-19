#  JS笔记



1. 书写位置

   ![书写位置](https://i.loli.net/2021/07/14/3IH9exGZtSgXrAm.png)

2. 输入输出

   ```
   prompt/alert/console.log('xxxx')
   ```

   ![输入输出](https://i.loli.net/2021/07/14/wJK5nSQZ6aD7PyU.png)

   ```
   var b=prompt();（取过来的是字符型）
   ```

   

3. 变量

   - var x=5 (全局或函数局部)

     (声明多个变量: var a=12, b="abc",c=.....)

     (尽量不要使用name作变量名)

     (驼峰命名法：myNameTitle)

   - let x=5 (块内局部)

     ```
     if(true) {
     	let y=5
     }
     console.log(y); //y 没有被声明
     ```

   - 未赋值变量，则其值为 undefined, 布尔值为false，数值类型中为NaN

     ```
     var n = null;
     console.log(n*32); //0
     ```

   - 变量提升（预解析 会把var提前，但不会把赋值提前）

     可以先使用变量再声明，声明前使用的变量赋值为undefined

     (会变成全局变量)

   - 函数提升（预解析 function）

     可以先使用函数再定义函数（声明提升)，但是函数表达式不会提升

     ```
     baz(); // 类型错误：baz 不是一个函数
     
     var baz = function() {
       console.log("bar2");
     };
     ```

   - 全局变量

     ```
     默认全局对象是window，因此，你可以通过指定 window 或 frame 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。
     如果在函数内部没有声明直接赋值的也是全局变量
     整个script标签或者是一个单独的js文件
     ```

   - 局部作用域---函数作用域

   - 常量 

     ```
     const x = 3.14;
     ```

     - 作用域规则与 let 块级作用域变量相同.

     - 若省略const关键字，则该标识符将被视为变量。

     - 在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。

     - 对象属性和数组被定义为常量，不会被保护

       ```
       const MY_OBJECT = {"key": "value"};
       MY_OBJECT.key = "otherValue";
       const MY_ARRAY = ['HTML','CSS'];
       
       
       MY_ARRAY.push('JAVASCRIPT');
       console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
       ```

4. 数据类型的转换

   ```
   console.log(typeof x)//number/string/boolean/object(null)
   ```
   
   
   
   - 在包含的数字和字符串的表达式中使用加法运算符（+），JavaScript 会把数字转换成字符串。

     - 变量.toString()
     - String()
     - +''

     ```
     x = "The answer is " + 42 // "The answer is 42"
     
     "37" - 7 // 30
     
     undefined+'pink'//undefinedpink
     undefined+1//NaN
     null+1//1
     ```
   
   - 字符串转换为数字

     1. 
   
     ```
     parseInt(string)和parseFloat(string)
     parseInt('120px')//120
     radix参数---进制
     ```
     
     2. 加法运算符
     
        ```
        "1.1" + "1.1" = "1.11.1"
        (+"1.1") + (+"1.1") = 2.2
        ```
     
   - - Boolean()（转化为布尔值）
   
       - true值为1 false值为0
   
       - 如果需要，作为第一个参数传递的值将转换为布尔值。如果省略或值`0`，`-0`，[`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)，`false`，[`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)，[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，或空字符串（`""`），该对象具有的初始值`false`。所有其他值，包括任何对象，空数组（`[]`）或字符串`"false"`，都会创建一个初始值为`true`的对象。
   
         注意不要将基本类型中的布尔值 `true` 和 `false` 与值为 `true` 和 `false` 的 `Boolean` 对象弄混了。
   
         [boolean教程]([Boolean - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean))
   
         
   
   
   
5. 字面量

   - 数组字面值中的多余逗号

     （译注：声明时）你不必列举数组字面值中的所有元素。若你在同一行中连写两个逗号（,），数组中就会产生一个没有被指定的元素，其初始值是`undefined`。

     ```
     var fish = ["Lion", , "Angel"];
     fish[0]是"Lion"，fish[1]是undefined，而fish[2]是"Angel"；译注：此时数组的长度属性fish.length是3
     ```

   - 整数

     八进制---0o/0O    十六进制---0x  二进制---0b/0B

     Infinity---无穷大（Number.MAX_VALUE *2)  -Infinity----无穷小

     NaN (not a number )("1900"-1900)

     ```
     isNaN()参数数字--false  非数字---true
     ```

     

   - 对象字面量

     对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的javascript标识符，它必须用""包裹。属性的名字不合法，那么便不能用.访问属性值，而是通过类数组标记("[]")访问和赋值。

     ````
     var car = { manyCars: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };
     
     console.log(car.manyCars.b); // Jeep
     console.log(car[7]/car["7"]); // Mazda
     ````

   - 字符串字面值

     内外单双分开

     你可以在字符串字面值上使用字符串对象的所有方法

     ```
     console.log("John's cat".length)
     ```

     ![特殊字符](https://i.loli.net/2021/07/15/cforadHDKySm98s.png)

6. 语句块

   - 语句块通常用于流程控制，如`if`，`for`，`while`等等。

     ```
     while (x < 10) {
       x++;
     }
     ```

   - 条件语句false：false undefined null 0 NaN 空字符串

7. 运算符

   &&返回表达式

   ```
   console.log(123 && 456)// 456
   ```

   ![运算符优先级](https://i.loli.net/2021/07/15/x9BQ27oDTOJkcsq.png)

8. 循环 

   - ```
     for(i=1;i<=100;i++)
     ```

   - ```
     while (x < 10) {
       x++;
     }
     ```

9. 数组

   ```
   var a=[1,2,3]
   a.length
   ```

   - 扩增数组 

     ```
     a.length=
     a[x]=xxx （这个就是js离谱了！ c固定数组长度 python要用方法a.append js竟然直接赋值）
     （原来有的替换）
     ```

10. 函数

    1. 函数声明

       ```
       function 函数名() {
       
       }
       
       函数表达式
       var 变量名 = function(){}
       （函数没有名字，匿名函数, "变量名")
       ```

       ​	

    2. return 终止函数

       (return数据类型灵活)

       (没有return就返回undefined)

    3. **argument**

       收集所有实参，数据类型：伪数组（**有length、按索引存储、没有真正数组的方法pop（）、push（）**)

11. **对象**(python的字典+类)(object)

    1. 创建对象

       ```
       1. var obj ={ uname:dzc, age:18, sex:‘男’, sayHi:function(){}}
       2.var obj = new object();
       obj.age=18;......(等号赋值)
       3.构造函数(首字母要大写) 
       function xx(){
       this.属性=值
       this.方法=function(){}
       }
       new xx()
       ```

    2. 调用对象

       ```
       对象名.属性名
       对象名[属性名]
       对象名.方法
       遍历对象：for(变量 in 对象){}
        for(var k in obj){
        console.log(k);
        console.log(obj[k]);
        }
       ```

    

    12. 内置对象
        - 查阅文档MDN
        - Math对象(直接用，不需要构造函数)

    ![math](https://i.loli.net/2021/07/15/gFQCY8E4Ud7qcA9.png)

    ​					Math.random()

    - 

      - Date （是构造函数）(返回时间)

        ```
        var x= new Date()
        x.
        获得当前时间据1970-1-1的毫秒数：(时间戳，独一无二)
        var date=+new Date()
        console.log(date)
        指定时间的总毫秒‘2021-7-15 19：20：00’
        //
        console.log(Date.now())
        ```

      - 数组对象Array

        ```
         1. var arr =[1,2,3]
         2. var arr= new Array()
         3.1 检测是否为数组：x instanceof(运算符) Array//true/false
         3.2 Array.isArray(arr)
         4.添加元素 1.x.push( )末尾添加 返回新数组长度
         			2, x.unshift()开头添加 返回新数组长度
         5. 删除元素 1. x.pop() 末尾删除一个元素 返回被删除的元素     2, x.shift 开头删除一个
         6.翻转数组  x.reverse()
         7.排序 x.sort(function(a,b){return a-b;(升序)/return b-a(降序)})
         8， 索引 返回第一个(从前往后）满足条件的索引号x.indexOf('') lastIndexOf(从后往前)
         9, 数组转换为字符串 x.toString()
         x.join('分隔符')
         10.concat 连接两个数组 slice(begin,end) 数组截取 splice(从第几个开始，要删除个数)(会影响原数组)
        ```

      - 字符串对象（字符数组）
      
        ```
        1, 字符串不可变
        2，查找指定字符在字符串的位置x.indexOf('要查找的字符'，【起始位置（索引号】)（找不到返回-1）
        3，根据位置返回字符 (1)x.charAt(索引号) return 字符
        (2)x.charCodeAt(索引号) 返回1该字符对应的ASCII
        (3)x[索引号]
        4,拼接字符串 concat/+
        5.replace(‘被替换的字符','替换为的字符')(只会替换第一个)
        6， split('分隔符') eg: var str2= 'red,pink,blue';
        str2.split(',')
        ```
      
        ![字符串](https://i.loli.net/2021/07/16/cND4LC1Eul9aWXI.png)

    13. 数据类型
        - 简单数据类型（值传递) string number boolean undefined null
        - 复杂(引用传递---指针) 其他



### DOM

![DOM树](https://i.loli.net/2021/07/16/iqxwvchyRHQ4OP3.png)

1. 获取元素

   - ID获取 document.getElementById('id') **(大小写敏感的字符串)**

     返回该元素对象 

   - console.dir() 查看该元素的属性和方法

   - 根据标签名获取 getElementsByTagName('标签名') 返回获取过来元素对象的集合，以伪数组的形式存储

     (没有元素也会返回空的伪数组)

     特定父元素的子元素 先获取父元素，然后父元素.getElementsByTagName('标签名')

   - HTML5新增 I9以上 

     1. x.getElementsByClassName('类名')
     2. x.querySelector('直接选择器')(只能选第一个)
     3. x.querySelectorAll('选择器')(所有，伪数组)

   - 获取body

     document.body

   - 获取 document.documentElement

2. 事件三要素

   1. 事件源 事件被触发的对象
   2. 事件类型 如何触发 onclick/onfocus/onblur
   3. 事件处理程序 函数赋值的方式完成

   ```
    var btn = document.getElementById('btn');
    btn.onclick = function(){}
   ```

   ![事件](https://i.loli.net/2021/07/16/kc8nBGFfXCHjb7l.png)

3. 操作元素

   1. element.innerTexta（少用）

      从起始位置到终止位置的内容，不识别html标签，纯字符串，同时空格和换行也会去掉

      ```
      div.innerText = ''
      ```

   2. element.innerHTML(普通盒子，div....)

      识别html标签，同时空格和换行也会保留

   3. 前两个可以返回内容 x.innerHTML

   4. img.src='' ......

   5. 表单元素   .value  .disabled

   6. 样式属性

      - x.style.xxx = ''; 行内样式 <div style=""> (样式少，改的少)

      - 改类名 :先写好前后类, 直接改类名 x.ClassName=' '

4. 自定义属性（data-属性名）

   - 获取属性值

     1. element.x 只能获取自带的属性
     2. element.getAttribute(' ')  属性可以自定义
     3. h5新增： element.dataset.x (x用-连接，驼峰命名法)

   - 修改属性

     1. 赋值
     2. element.setAttribute(' 属性 ' ,' 值 ')(主要针对自定义属性)

   - 移除属性

     element.removeAttribute(' ')

5. 节点(所有内容)操作(家族关系)

   1. 父节点
      - x.parentNode (得到理他最近的父节点)
   2. 子节点
      - x.childNodes(所有的子节点，文本节点+元素节点)
      - x.children(获取所有子元素节点)
      - x.firstChild(第一个节点，不管文本或元素) x.lastChild
      - (IE9以上)  x.firstElementChild(返回第一个子元素节点，找不到返回null)  x.lastElementChild
   3. 兄弟节点
      - x.nextSibling（下一个兄弟节点 包含元素、文本节点）/ x.previousSibling
      - (IE9以上)x.nextElementSibling/last...
   4. 创建节点
      - document.createElement('标签名')
   5. 添加节点
      - node.appendChild(指定元素):方法将一个节点添加到指定父节点的子节点列表末尾
      - node.insertBefore(child,指定元素); 指点子元素的前面
   6. 删除节点
      - node.removeChild(child)删除一个子节点，返回删除的节点
   7. 复制节点
      - node.cloneNode() (括号内空/false，只复制节点本身，不克隆里面的子节点。括号内为true，全拷贝)

6. 动画函数

   - 获取位置 offsetLeft....
   - div.style.left = div.offsetLeft + 5 +'px';
   - 定时器obj.timer =setInterval(function(){},xx)(每xx毫秒执行一次function)
   - 停止定时器 clearInterval(timer)

7. 高级事件

   - 传统注册（事件三要素）：唯一需求，后面的会覆盖前面的。
   - 方法监听：addEventListener()  :同一个元素同一个事件可以注册多个监听器，按注册顺序依次执行

    ![监听](https://i.loli.net/2021/07/19/nAGdvOKpao91kg6.png)

```
x.addEventListener('click',function(){},useCapture);
第三个参数是true，则为捕获阶段，若父也有点击事件，点击子是先执行父再执行子；若为false/省略 ，冒泡，先子后父。
```

8. 删除事件

   - 传统 eg:div.onclick=null;

   - ```
     function fn(){
     alert(22);
     x.removeEventListener('click',fn（不用写小括号）);
     }
     x.addEventListener('click',fn);
     ```

   - 

9. 事件对象

   - div.onclick = function(event){}

   - event(其他名字都可以)不用传参，是事件的一系列相关数据的集合，跟事件相关。

   - 可以console.log()看属性

   - e.target指向触发对象，this指向绑定对象（ul绑定点击li，target指li，this指ul）

   - 阻住默认行为（让链接不跳转(给a的click事件函数加这个方法），提交不提交）：e.preventDefault()

   - 阻止事件冒泡e.stopPropagation()

   - 事件委托(ul里很多li)：ul设事件监听器，通过点击li后冒泡到ul，所以直接设ul的触发事件就可。e.target又可以单独指向点击的li

   - 禁止事件

     ```
     document.addEventListener('contextmenu',function(e){
     e.preventDefault();})
     //禁止右键得到菜单
     document.addEventListener('selectstart',function(e){
     e.preventDefault();})
     //禁止选中
     ```

   - 鼠标事件对象

     ```
     document.addEventListener('click',function(e){console.log(e);});
     e.clientX/Y 都只是相对可视窗口，跟页面滚动无关
     e.page相对文档的
     ```

     ![鼠标事件](https://i.loli.net/2021/07/19/yVdfilZkqp3Ee42.png)

![事件常见属性](https://i.loli.net/2021/07/19/gq8Ma7kPxnLvI5j.png)

9. - 常用键盘事件

     ```
     按下不松手一直触发
     ```

   - 键盘事件对象

     ```
     keycode对应ASCII值
     (keyup\keydown不区分大小写)(keypress识别)
     ```

     

![键盘事件](https://i.loli.net/2021/07/19/nQMclI8eLP7GOYx.png)

