/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var res = fs.readFileSync('text.txt', 'utf-8')
console.log(res.toString().split('\n').length);

