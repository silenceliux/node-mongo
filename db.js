
// mongoose 链接
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');//database的名称
var db = mongoose.connection;
//输出连接日志
db.on('error', function callback() {
    console.log("Connection error");
});

db.once('open', function callback() {
    console.log("Mongo working!");
});

// 创建schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    age: Number,
    telphone: String
});
// 构建model
var User = mongoose.model('user', userSchema);//第一个参数是collection的名称，用shell查询的时候用tests查询，mongoose会自动弄成复数形式
//构建model实例
var userData = new User({
    name: 'user',
    age: 21,
    telphone: '11111111'
});

//////保存数据
//userData.save(function(err) {
//    if (err) {
//        console.log(err)
//    } else {
//        console.log('Save success');
//    }
//});
////查询数据
//User.find(function(err,data){
//    console.log(data);
//});
//删除数据
//User.remove({name:"root"},function(err,data){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(data);
//    }
//});
//修改数据
User.update({name:"root"},{$set:{name:"aaa"}},function(){//只更新一条

});
