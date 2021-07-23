// 'use strict';

// var fs = require('fs');

// // 打开一个流:
// var rs = fs.createReadStream('output.txt', 'utf-8');

// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });


// 'use strict';

// var fs = require('fs');

// var ws1 = fs.createWriteStream('output2.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();


'use strict';

var fs = require('fs');

var rs = fs.createReadStream('output.txt');
var ws = fs.createWriteStream('output2.txt');
var rs2=fs.createReadStream('fs.txt');
rs.pipe(ws);
rs2.pipe(ws);