/**
 * buffer 二进制数据缓冲
 */

/**
 * buffer与字符编码
 
const buf = Buffer.from('runoob','ascii');
// hex字符编码输出
console.log( buf.toString('hex') );
// base64字符编码输出
console.log( buf.toString('base64') );
 */


/**
 * 创建buffer类

// buf1: 长度为10 用0填充
// buf2: 长度为10 用0x1填充
// buf3: 长度为10 未初始化的buffer 需用fill()或write()重写
// buf4: 包含[0x1, 0x2, 0x3]的buffer
// buf5: utf-8字节
// buf6: latin-1字节const buf1 = Buffer.alloc(10);
const buf1 = Buffer.alloc(10);
console.log('buf1: ' + buf1);
const buf2 = Buffer.alloc(10, 1);
console.log('buf2:' + buf2);
const buf3 = Buffer.allocUnsafe(10);
console.log('buf3:' + buf3);
const buf4 = Buffer.from([1, 2, 3]);
console.log('buf4:' + buf4);
const buf5 = Buffer.from('test');
console.log('buf5:' + buf5);
const buf6 = Buffer.from('test', 'latin1');
console.log('buf6:' + buf6);
 */


/**
 * 写入缓冲区
 
buf = Buffer.alloc(256);
len = buf.write('www.runoob.com');
console.log('写入字节数: ' + len);
 */


/**
 * 从缓冲区读取数据

buf = Buffer.alloc(256);
for (var i=0; i < 26; i++) {
	buf[i] = i + 97;
}
console.log( buf.toString('ascii') );
console.log( buf.toString('ascii', 0, 5) );
console.log( buf.toString('utf8', 0, 5) );
console.log( buf.toString(undefined, 0, 5) );
 */


/**
 * Buffer转换为json对象

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);
console.log(json);
const copy = JSON.parse(json, (key, value) => {
	return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy);
 */

/**
 * 缓冲区合并

var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3 内容:' + buffer3.toString());
 */

/**
 * 缓冲区比较

var buffer1 = Buffer.from('ABCd');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);
if (result < 0) {
	console.log(buffer1 + '在' + buffer2 + '之前');
} else if (result == 0) {
	console.log(buffer1 + '与' + buffer2 + '相同');
} else {
	console.log(buffer1 + '在' + buffer2 + '之后');
}
 */


