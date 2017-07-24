var express=require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'school',  //数据库名
    port:'3306'      //mysql端口
})

//GET users listing.
router.get('/text',function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * from head',function (err,rows,fields) {
        if(err)throw err;
        res.send(rows)
    })

})
router.get('/banner',function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * from banner',function (err,rows,fields) {
        if(err)throw err;
        res.send(rows)
    })

})
module.exports=router