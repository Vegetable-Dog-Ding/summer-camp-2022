// 'use strict';

// var fs = require('fs');

// fs.readFile('logo.png', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//     }
// });
// 'use strict';

// var fs = require('fs');

// fs.readFile('fs.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

'use strict';

var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else { console.log('ok.'); }
});

// 'use strict';

// var fs = require('fs');

// // 打开一个流:
// var rs = fs.createReadStream('fs.txt', 'utf-8');

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