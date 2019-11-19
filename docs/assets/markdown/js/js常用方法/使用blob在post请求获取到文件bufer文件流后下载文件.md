#### post 请求下载文件
```
const elink = document.createElement('a');
elink.download = `批量预测-${new Date()}.xls`;
elink.style.display = 'none';
const blob = new Blob([data]);
elink.href = URL.createObjectURL(blob);
document.body.appendChild(elink);
elink.click();
document.body.removeChild(elink);
```