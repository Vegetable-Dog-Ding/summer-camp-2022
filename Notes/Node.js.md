### Node.js

1. 严格模式

   - js文件开头写 'use strict';
   - node --use_strict xx.js

2. 模块

   - hello.js

   - ```
     'use strict';
     
     var s = 'Hello';
     
     function greet(name) {
         console.log(s + ', ' + name + '!');
     }
     
     module.exports = greet;
     ```

   - main.js 

   - ```
     'use strict';
     
     // 引入hello模块:
     var greet = require('./hello'); (注意！要写相对路径)(greet就是module.exports)
     
     var s = 'Michael';
     
     greet(s); // Hello, Michael!
     ```

   - 工作原理

   - ```
     // 准备module对象:
     var module = {
         id: 'hello',
         exports: {}
     };
     var load = function (module) {
         // 读取的hello.js代码:
         function greet(name) {
             console.log('Hello, ' + name + '!');
         }
         
         module.exports = greet;
         // hello.js代码结束
         return module.exports;
     };
     var exported = load(module);
     // 保存module:
     save(module, exported);
     ```

3. 基本模块

   - fs

     - 读取一个文本文件

     - ```
       'use strict';
       
       var fs = require('fs');
       
       fs.readFile('sample.txt', 'utf-8', function (err, data) {
           if (err) {
               console.log(err);
           } else {
               console.log(data);
           }
       });
       ```

     - 读取二进制文件（eg 图片）

     - ```
       'use strict';
       
       var fs = require('fs');
       
       fs.readFile('sample.png', function (err, data) {
           if (err) {
               console.log(err);
           } else {
               console.log(data);
               console.log(data.length + ' bytes');
           }
       });
       
       当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
       // Buffer -> String
       var text = data.toString('utf-8');
       console.log(text);
       
       // String -> Buffer
       var buf = Buffer.from(text, 'utf-8');
       console.log(buf);
       ```

     - 同步读取

     - ```
       'use strict';
       
       var fs = require('fs');
       
       var data = fs.readFileSync('sample.txt', 'utf-8');
       console.log(data);
       ```

     - 异步写文件

     - ```
       'use strict';
       
       var fs = require('fs');
       
       var data = 'Hello, Node.js';
       fs.writeFile('output.txt', data, function (err) {
           if (err) {
               console.log(err);
           } else {
               console.log('ok.');
           }
       });
       ```

     - 同步

     - ```
       'use strict';
       
       var fs = require('fs');
       
       var data = 'Hello, Node.js';
       fs.writeFileSync('output.txt', data);
       ```

     - 异步获取文件信息

     - ```
       'use strict';
       
       var fs = require('fs');
       
       fs.stat('sample.txt', function (err, stat) {
           if (err) {
               console.log(err);
           }
       });
       ```

   - stream

     - 在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：`data`事件表示流的数据已经可以读取了，`end`事件表示这个流已经到末尾了，没有数据可以读取了，`error`事件表示出错了。

     - 从文件流读取文本内容

     - ```
       'use strict';
       
       var fs = require('fs');
       
       // 打开一个流:
       var rs = fs.createReadStream('sample.txt', 'utf-8');
       
       rs.on('data', function (chunk) {
           console.log('DATA:')
           console.log(chunk);
       });
       
       rs.on('end', function () {
           console.log('END');
       });
       
       rs.on('error', function (err) {
           console.log('ERROR: ' + err);
       });
       ```

     - 

