const fs = require('fs')

//异步读取
fs.readdir('./001',(err,data)=>{
    if(err){
        console.log('读取错误')
    }else {
        console.log(data)
    }
    console.log('didiidi')
})

/*
    错误处理 同步：try catch  异步：错误回调优先
    文件夹的错误
    c（creat）u（update）r（read）d（del）
 */
