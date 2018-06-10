/**
 * 创建web服务器
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建web服务器
http.createServer(function(request, response) {
	// 解析请求 包括文件名
	var pathname = url.parse(request.url).pathname;
	// 输出请求的文件名
	console.log('Request for ' + pathname + ' recevied.');
	// console.log(pathname.substr(1));
	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), function(err, data) {
		// console.log('data: ' + data);
		// console.log('err: ' + err);
		if (err) {
			// http 404 not found
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			// http 200 ok
			response.writeHead(200, {'Content-Type': 'text/html'});
			// 相应文件内容
			//response.write(data.toString());
			// 发送响应数据
			response.end(data.toString());
		}
	});
	
}).listen(8080);

console.log('server running at http://127.0.0.1:8080');
