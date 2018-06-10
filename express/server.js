/**
 * express 框架
 * 安装express
 * cnpm install express body-parser cookie-parser multer --save
 */

/**
 * express实例
 */
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

// 静态文件
app.use(express.static('static'));
// 创建application/x-www-form-unlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})
app.use( multer({dest: '/tmp/'}).array('image') );

/**
 * 路由
 */
// 主页
app.get('/', function(req, res) {
	console.log('主页get请求');
	//res.send('Hello GET');
	res.sendFile( __dirname + '/' + 'index.html' );
})

// 主页post
app.post('/', function(req, res) {
	console.log('主页post请求');
	res.send('Hello POST');
})

// /del_user页面响应
app.get('/del_user', function(req, res) {
	console.log('/del_user 响应 delete请求');
	res.send('删除页面');
})

// /list_user页面get请求
app.get('/list_user', function(req, res) {
	console.log('/list_user get请求');
	res.send('用户列表页面');
})

app.get('/ab*cd/', function(req, res) {
	console.log('/ab*cd get请求');
	res.send('正则匹配');
})

// get处理form表单提交
app.get('/process_get', function(req, res) {
	// 输出json格式
	var response = {
		"first_name": req.query.first_name,
		'last_name': req.query.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
})

// post处理form表单提交
app.post('/process_post', urlencodedParser, function(req, res) {
	// 输出json格式
	var response = {
		"first_name": req.body.first_name,
		'last_name': req.body.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
})

// 文件上传视图
app.get('/upload', function(req, res) {
	//console.log('主页get请求');
	//res.send('Hello GET');
	res.sendFile( __dirname + '/' + 'upload.html' );
})

// 文件上传处理
app.post('/file_upload', function(req, res) {
	// 上传的文件信息
	console.log(req.files[0]); 

	var des_file = __dirname + '/' + req.files[0].originalname;
	fs.readFile( req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err) {
			if (err) {
				console.log(err);
			} else {
				response = {
					message: 'File uploaded successfully',
					filename: req.files[0].originalname
				};
				console.log(response);
				res.end( JSON.stringify(response) );
			}
		});
	});
});




var server = app.listen(8081, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('应用实例 访问地址为 http://%s:%s', host, port)
})