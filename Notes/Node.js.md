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

     - 流的形式写入文件
     
     - ```
       'use strict';
       
       var fs = require('fs');
       
       var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
       ws1.write('使用Stream写入文本数据...\n');
       ws1.write('END.');
       ws1.end();
       
       var ws2 = fs.createWriteStream('output2.txt');
       ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
       ws2.write(new Buffer('END.', 'utf-8'));
       ws2.end();
       ```
     
     - pipe
     
     - 就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个`Readable`流和一个`Writable`流串起来后，所有的数据自动从`Readable`流进入`Writable`流，这种操作叫`pipe`。
     
     - ```
       'use strict';
       
       var fs = require('fs');
       
       var rs = fs.createReadStream('sample.txt');
       var ws = fs.createWriteStream('copied.txt');
       
       rs.pipe(ws);
       
       
       默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
       
       readable.pipe(writable, { end: false });
       ```
     
   - http

     - (http)[[HTTP协议简介 - 廖雪峰的官方网站 (liaoxuefeng.com)](https://www.liaoxuefeng.com/wiki/1016959663602400/1017804782304672)]

     - 这些工作实际上已经由Node.js自带的`http`模块完成了。应用程序并不直接和HTTP协议打交道，而是操作`http`模块提供的`request`和`response`对象。

       `request`对象封装了HTTP请求，我们调用`request`对象的属性和方法就可以拿到所有HTTP请求的信息；

       `response`对象封装了HTTP响应，我们操作`response`对象的方法，就可以把HTTP响应返回给浏览器。

       用Node.js实现一个HTTP服务器程序非常简单。我们来实现一个最简单的Web程序`hello.js`，它对于所有请求，都返回`Hello world!`：

     - ```
       'use strict';
       
       // 导入http模块:
       var http = require('http');
       
       // 创建http server，并传入回调函数:
       var server = http.createServer(function (request, response) {
           // 回调函数接收request和response对象,
           // 获得HTTP请求的method和url:
           console.log(request.method + ': ' + request.url);
           // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
           response.writeHead(200, {'Content-Type': 'text/html'});
           // 将HTTP响应的HTML内容写入response:
           response.end('<h1>Hello world!</h1>');
       });
       
       // 让服务器监听8080端口:
       server.listen(8080);
       
       console.log('Server is running at http://127.0.0.1:8080/');
       ```

     - 让我们继续扩展一下上面的Web程序。我们可以设定一个目录，然后让Web程序变成一个文件服务器。要实现这一点，我们只需要解析`request.url`中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以了。

       解析URL需要用到Node.js提供的`url`模块，它使用起来非常简单，通过`parse()`将一个字符串解析为一个`Url`对象：

     - ```
       'use strict';
       
       var url = require('url');
       
       console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
       ```

     - 处理本地文件目录需要使用Node.js提供的`path`模块，它可以方便地构造目录：

     - ```
       'use strict';
       
       var path = require('path');
       
       // 解析当前目录:
       var workDir = path.resolve('.'); // '/Users/michael'
       
       // 组合完整的文件路径:当前目录+'pub'+'index.html':
       var filePath = path.join(workDir, 'pub', 'index.html');
       // '/Users/michael/pub/index.html'
       ```

     - 使用`path`模块可以正确处理操作系统相关的文件路径。在Windows系统下，返回的路径类似于`C:\Users\michael\static\index.html`，这样，我们就不关心怎么拼接路径了。

     - 文件服务器

     - ```
       'use strict';
       
       var
           fs = require('fs'),
           url = require('url'),
           path = require('path'),
           http = require('http');
       
       // 从命令行参数获取root目录，默认是当前目录:
       var root = path.resolve(process.argv[2] || '.');
       
       console.log('Static root dir: ' + root);
       
       // 创建服务器:
       var server = http.createServer(function (request, response) {
           // 获得URL的path，类似 '/css/bootstrap.css':
           var pathname = url.parse(request.url).pathname;
           // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
           var filepath = path.join(root, pathname);
           // 获取文件状态:
           fs.stat(filepath, function (err, stats) {
               if (!err && stats.isFile()) {
                   // 没有出错并且文件存在:
                   console.log('200 ' + request.url);
                   // 发送200响应:
                   response.writeHead(200);
                   // 将文件流导向response:
                   fs.createReadStream(filepath).pipe(response);
               } else {
                   // 出错了或者文件不存在:
                   console.log('404 ' + request.url);
                   // 发送404响应:
                   response.writeHead(404);
                   response.end('404 Not Found');
               }
           });
       });
       
       server.listen(8080);
       
       console.log('Server is running at http://127.0.0.1:8080/');
       ```

   - crypto

4. Web开发
   - koa
     - 

