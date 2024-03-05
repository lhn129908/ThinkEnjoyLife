const express =require('express');
//挂载mongoodb
const mongoose = require("mongoose");
// 引入body-parser
const bodyParser = require('body-parser');

const expressSession=require('express-session')

const app=express();

// 用户数据接口
const user=require('./interfaces/user')
// 导入数据库链接文件
const dbConfig=require('./dbs/dbConfig');


app.use(
    expressSession({
      secret: "password",
      resave: false,
      saveUninitialized: false,
    })
  );

// 连接数据库
mongoose.connect(dbConfig.dbs)

// 挂载body-parser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/api/user',user)

// app.get("/",(req,res)=>{
//     res.send("你好！！！")
// })

app.listen("88",()=>{
    console.log("服务器已启动")
})