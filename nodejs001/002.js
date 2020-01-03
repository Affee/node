var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url!=="/favicon.ico"){ //清除第2此访问 node.js bug,第二次访问/favicon.ico
        console.log('访问');
        response.write('hello,world ' +
            '狗宝宝 么么哒');
        response.end();//不写则没有http协议尾
    }
}).listen(8000);
console.log('Server running at http://172.20.182.106:8000/');

