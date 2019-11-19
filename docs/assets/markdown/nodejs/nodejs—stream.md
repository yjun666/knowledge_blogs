## Node.js Stream(流)
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

* Node.js，Stream 有四种流类型：
    * Readable - 可读操作。

    * Writable - 可写操作。

    * Duplex - 可读可写操作.

    * Transform - 操作被写入数据，然后读出结果。

* 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

    * data - 当有数据可读时触发。

    * end - 没有更多的数据可读时触发。

    * error - 在接收和写入过程中发生错误时触发。

    * finish - 所有数据已被写入到底层系统时触发。
    
### 从流中读取数据

```
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
```

### 写入流-----会自己创建文件
```
var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
```

### 管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

![管道流](http://www.runoob.com/wp-content/uploads/2015/09/bVcla61)

如上面的图片所示，我们把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。

设置 input.txt 文件内容如下：
```
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
```

### 链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件。

创建 compress.js 文件, 代码如下：
```
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完成。");


setTimeout(() => {
    // 解压缩文件
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input2.txt'));
    console.log("文件解压完成。");
}, 3000)
```

    
### 测试文件
```
// 读取流---start
var fs = require("fs");
var data = '';



// 写入流--start

var writedata = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中-----{ 'flags':'a' }参数可组织在写入流时覆盖文件内容
var writerStream = fs.createWriteStream('input.txt', { 'flags': 'a' }); // 创建写流会清空文本-----写在前边会先清空后读取再写入进行这样的一个流程操作----给文件添加内容时需要在读流的end事件后添加

// 使用 utf8 编码写入数据
writerStream.write(data + writedata, 'UTF8', function () {
    console.log('也可以进行回调');
});

// 标记文件末尾
writerStream.end(function () {
    console.log('end')
});

// 处理流事件 --> data, end, and error
writerStream.on('finish', function () {
    console.log("写入完成。");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕2");
// 写入流--end


// 读取流---start
// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);

});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕1");
// 读取流---end


// 管道流---start
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕3");
// 管道流---end

// 链式流--start
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz

//  文件压缩和解压文件不能同时使用

// 压缩文件
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完成。");

setTimeout(() => {
    // 解压缩文件
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input2.txt'));

    console.log("文件解压完成。");
}, 1000)
// 链式流--end
```

    
### node修改替换文件中的部分内容
```
fs.readFile('./input.txt', 'utf-8', (err, data) => {
    console.log(data);
    if (data.includes('www')) {
        data = data.replace(/www/gi, 'http');
    }

    // 重新写入修改后的文件内容
    reWriteInputTxtContent(data, 'input.txt');
})

// 写入流写入内容
function reWriteInputTxtContent(fileData, fileName) {
    // 创建一个可以写入的流，写入到文件 output.txt 中-----{ 'flags':'a' }参数可组织在写入流时覆盖文件内容
    var writerStream = fs.createWriteStream(fileName, {
        'flags': 'a'
    }); // 创建写入流会清空文本-----写在前边会先清空后读取再写入进行这样的一个流程操作----给文件添加内容时需要在读流的end事件后添加

    // 使用 utf8 编码写入数据
    writerStream.write(fileData, 'UTF8', function (data) {
        console.log('也可以进行回调');
    });

    // 标记文件末尾
    writerStream.end(function () {
        console.log('end')
    });

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function () {
        console.log("写入完成。");
    });
  
    writerStream.on('error', function (err) {
        console.log(err.stack);
    });
}
```

### fs通过遍历文件夹写入json，通过获取json渲染目录文件，在github----knowledge_blogs项目中有使用
```
// 生成同级的json数组对象
const path = require('path');
const fs = require('fs');
// 获取指定路径 path 下的，默认深度为 3 的目录 JSON
function getIndexByPath(dir, deep = 10) {
  let dirDevide = dir.split('/');
  let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
  let index = {};
  let arr = [];
  getIndexOfPathByDeep(index, path.join(__dirname, preDir), dirDevide[0], deep + 1, arr);
  return arr;
}



// 开始对指定 path 递归查找深度为 deep 深度
function getIndexOfPathByDeep(obj, dir, curDir, deep, arr) {

  // 存储需要的目录文件字段----具体需要的字段根据具体使用自行添加，详细字段见使用方式即sidebar.component.ts文件--------start
  obj = {};
  obj["id"] = curDir;
  const parentId = dir.split('\\');
  obj["parentId"] = parentId[parentId.length - 1] === 'assets' || parentId[parentId.length - 1] === 'markdown' ? '' : parentId[parentId.length - 1]; // 不需要顶层目录，如果顶层目录是assets或markdown则过滤掉。
  obj['pageOption'] = [];
  obj['text'] = curDir;
  obj['isShow'] = false;
  obj['title'] = curDir;
  obj['isCurCatalog'] = false;
  // 存储需要的目录文件字段----具体需要的字段根据具体使用自行添加，详细字段见使用方式即sidebar.component.ts文件--------end


  let curPath = path.join(dir, curDir);
  // 判断当前是文件夹
  if (fs.statSync(curPath).isDirectory()) {
    obj['isHasChild'] = true; // 如果当前是文件夹，则设置为true，不管是否是真的有子集
    let lists = fs.readdirSync(curPath);
    lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1, arr))
  } else {
    // 当前不是文件夹，当前是文件
    let key = curDir.split('.');
    newkey = key.pop();
    obj[key + ''] = curPath;


    // 存储当前的text和title名称和type类型，本字段均生成的是markdown文件------------start
    obj['text'] = (key + '');
    obj['title'] = (key + '');
    const obj2 = {};
    const mdSrc = curPath.split('\\assets\\')[1];
    obj2['type'] = 'md';
    obj2['mdSrc'] = ('/assets/' + mdSrc).replace(/\\/gi, '/');
    obj2['mdStyle'] = {};
    obj['pageOption'].push(obj2);
    // 存储当前的text和title名称和type类型，本字段均生成的是markdown文件------------end
  }

  // 转成json后markdown是顶层目录，过滤掉，其他的同级显示
  if (obj['id'] !== 'markdown') {
    arr.push(obj);
  }

}

fs.writeFileSync('../json/text2.json', JSON.stringify(getIndexByPath('../markdown')));
console.log('程序执行完毕。');

```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    