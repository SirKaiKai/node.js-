/**
 * Created by Administrator on 2017/8/11.
 */
console.log(process.argv)
var pro= 0
for (var i=2;i<process.argv.length;i++){
    pro +=Number(process.argv[i])
}
console.log(pro)