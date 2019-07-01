## Node.js 连接 MySQL
本章节我们将为大家介绍如何使用 Node.js 来连接 MySQL，并对数据库进行操作。
如果你还没有 MySQL 的基本知识，可以参考我们的教程：MySQL 教程。
本教程使用到的 Websites 表 SQL 文件：websites.sql。

### 安装驱动
`npm install mysql`
### 连接数据库
在以下实例中根据你的实际配置修改数据库用户名、及密码及数据库名：

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```



