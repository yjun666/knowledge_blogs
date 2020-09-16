### iframe---postMessage通信

> 本demo需要引入jquery

#### parentHTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./js/jquery-3.1.1.min.js"></script>
</head>
<body>
    <iframe src="./test/index.html" width="694" height="400" frameborder="0" id='frame' name="iframe_a"></iframe>
    <div class="content">
    </div>
    <button class="prev">上一页</button>
    <button class="next">下一页</button>
    <script>
        window.onload = function () {
            var frame = document.getElementById('frame');
            document.getElementsByClassName('prev')[0].addEventListener('click', () => {
                frame.contentWindow.postMessage({
                    eventType: 'prev',
                    params: {}
                }, 'http://10.0.1.24:2333/aa/index.html');
            })
            document.getElementsByClassName('next')[0].addEventListener('click', () => {
                frame.contentWindow.postMessage({
                    eventType: 'next',
                    params: {}
                }, 'http://10.0.1.24:2333/aa/index.html');
            })
            window.addEventListener('message', () => {
                if (~event.origin.indexOf('http://10.0.1.24:2333')) {
                    console.log(event,'主html');
                } else {
                    return;
                }
            })
            $('.prev').trigger('click');
        };
    </script>
</body>
</html>
```


#### childHTML
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
    <div class="first">
        asldkfjasldfkj
    </div>
    <div class="second">
        asldkfjasldfkj
    </div>
    <div class="third">
        asldkfjasldfkj
    </div>
    <div class="fourth">
        asldkfjasldfkj
    </div>
    <div class="fiveth">
        asldkfjasldfkj
    </div>
    <script>
        let prevPage = () => {
            console.log(document.getElementsByClassName('fiveth'));
        }
        let nextPage = () => {
            console.log(document.getElementsByClassName('fourth'));
        }

        let eventSourcePostMessage = (event) => {
            event.source.postMessage(`我收到了,你是${event.data['eventType']}`,
                event.origin)
            return;
        }
        window.addEventListener('message', function (event) {
            if (~event.origin.indexOf('http://10.0.1.24:2333')) {
                event.data['eventType'] === 'prev' && prevPage();
                event.data['eventType'] === 'next' && nextPage();
                eventSourcePostMessage(event);
            } else {
                return;
            }
        });
    </script>
</body>
</html>
```