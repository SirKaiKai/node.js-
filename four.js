/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
fs.readFile('text.txt', function(err,data){
    if(err) throw err;
    console.log(data.toString().split('\n').length);
})