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

        

    ​	