> 1. 双边框---不常用

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        table {
            margin: 0 auto;
            width: 300px;
            border:1px solid red;
        }
        th,td {
            text-align: center;
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <table>
        <caption>学生成绩表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>成绩</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>张三</td>
                <td>88</td>
            </tr>            <tr>
                <td>1</td>
                <td>李四</td>
                <td>98</td>
            </tr>            <tr>
                <td>3</td>
                <td>王五</td>
                <td>68</td>
            </tr>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
</body>
</html>
```

> 2. 去除双边框---常用

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        table {
            margin: 0 auto;
            width: 300px;
            border:1px solid red;
            border-collapse: collapse;/*关键代码*/
        }
        th,td {
            text-align: center;
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <table>
        <caption>学生成绩表</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>成绩</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>张三</td>
                <td>88</td>
            </tr>            <tr>
                <td>1</td>
                <td>李四</td>
                <td>98</td>
            </tr>            <tr>
                <td>3</td>
                <td>王五</td>
                <td>68</td>
            </tr>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
</body>
</html>
```
