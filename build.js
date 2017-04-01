/**
 * Created by guoxiangwen on 2017/1/13.
 */
let exec = require('child_process').exec,child;

//删除build
child = exec('rm -rf build/*.*',function(err,out) {
    console.log(out); err && console.log(err);
});