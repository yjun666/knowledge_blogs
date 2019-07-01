### canvas 常用方法使用
> toDataURL------打包canvas为base64图片
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <canvas width="500" height="500" id='canvas'></canvas>
    <script>
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');

        ctx.save();
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 55, 50);
        var imgUrl = canvas.toDataURL('image/png');
        var image = document.createElement('img');
        console.log(imgUrl);
        image.src = imgUrl;
        document.body.appendChild(image);
    </script>
</body>
</html>
```

