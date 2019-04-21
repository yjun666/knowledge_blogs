### 30段javascript代码片段
### 1. 区分IE浏览器和非IE浏览器
```
IE11不支持
if( !+[1,] ){
    alert(这是IE浏览器);
}else {
    alert(这是非IE浏览器);
}
```

### 2.将日期直接转换成数值
```
+new Date(); 等同于 new Date().getTime();
```
### 3.非IE浏览器下将类数组对象"arguments"转为数组
```
Array.prototype.slice.call(arguments);

等同于es6中的Array.from()

Array().slice或[].slice 效率较低
```

### 4.  ||运算符
```
var aa = 0||3;
```

### 5. 单链式运算
```
var a=10;
console.log(a++-1);
先执行“a-1”，再执行a=a+1;
```

### 6. 判断当前是什么操作系统
```
getCurComputerSystem() {
    console.log('判断当前的系统------' + navigator.userAgent.indexOf('Windows', 0) !== -1);
    console.log('判断当前的系统------' + navigator.userAgent.toLowerCase().indexOf('mac', 0) !== -1);
    console.log('判断当前的系统------' + navigator.userAgent.indexOf('Linux', 0) !== -1);
    console.log('判断当前的系统------' + navigator.userAgent.indexOf('X11', 0) !== -1);
}
```

### 限制只能输入中文-----filterOnlyIptChinese;
### 控制光标在输入框之后---------cursorPos;
### canvas实现水波纹效果，实现不是太好，未调整---------shadowWater
```
class JsFragment {
    constructor() {}
    // 限制只能输入中文---------start
    filterOnlyIptChinese(str) {
        console.log(str.replace(/[^\u4e00-\u9fa5]/g, ''));
        return str.replace(/[^\u4e00-\u9fa5]/g, '');
    }
    // 限制只能输入中文---------end

    // 控制光标在输入框之后---------start
    cursorPos() {
        const aiInput2 = document.querySelector('#aiInput2');
        aiInput2.onclick = aiInput2.onkeyup = function () {
            const _vLen = this.value.length;
            if (this.setSelectionRange) { // 非IE
                this.setSelectionRange(_vLen, _vLen);
            } else { // IE
                const a = this.createTextRange();
                a.moveStart('character', _vLen);
                a.collapse(true);
                a.select();
            }
        }
    }
    // 控制光标在输入框之后---------end

    shadowWater() {
        var setCss = function (_this, cssOption) {
            if (!_this || _this.nodeType === 3 || _this.nodeType === 8 || !_this.style) {
                return;
            }
            for (var cs in cssOption) {
                _this.style[cs] = cssOption[cs];
            }
            return _this;
        }
        let isIE = function () {
            return !!window.ActiveXObject;
        }
        let isIE6 = function () {
            return isIE() && !window.XMLHttpRequest;
        }
        let isIE8 = function () {
            return isIE() && !!document.documentMode;
        }
        let isIE7 = function () {
            return isIE() && !isIE6() && !isIE8();
        }
        // ----------start---------------
        let shadows = null,
            shadowsLen = 0,
            shadowInWater = function () {
                var shadowsSource = document.getElementById('shadowInWaterSrurce');
                shadows = document.getElementById(shadowsSource.getAttribute('data-water'));
                if (isIE()) {
                    updateShadow();
                    return;
                } else {
                    canvasShadowInWater();
                }
            }

        let canvasShadowInWater = function () {
            var shadowsSource = document.getElementById('shadowInWaterSrurce');
            shadows = document.getElementById(shadowsSource.getAttribute('data-water'));
            var settings = {
                    'speed': 1,
                    'scale': 1,
                    'waves': 10
                },
                waves = settings['waves'],
                speed = settings['speed'] / 4,
                scale = settings['scale'] / 2,
                ca = document.createElement('canvas'),
                c = ca.getContext('2d'),
                img = shadowsSource;
            img.parentNode.insertBefore(ca, img);

            var w, h, dw, dh, offset = 0,
                frame = 0,
                max_frames = 0,
                frames = [];
            c.save();
            c.canvas.width = shadowsSource.offsetWidth;
            c.canvas.height = shadowsSource.offsetHeight * 2;
            c.drawImage(shadowsSource, 0, 0);
            c.scale(-1, -1);
            c.drawImage(shadowsSource, 0, -shadowsSource.offsetHeight * 2);
            // c.drawImage(shadowsSource, 0, -shadowsSource.offsetHeight);
            c.restore();
            w = c.canvas.width;
            h = c.canvas.height;
            dw = w;
            dh = h / 2;
            var id = c.getImageData(0, h / 2, w, h).data,
                end = false;
            c.save();
            while (!end) {
                var odd = c.getImageData(0, h / 2, w, h),
                    od = odd.data,
                    pixel = 0;
                for (var y = 0; y < dh; y++) {
                    for (var x = 0; x < dw; x++) {
                        var displacement = (scale * 10 * (Math.sin((dh / (y / waves)) + (-offset)))) | 0,
                            j = ((displacement + y) * w + x + displacement) * 4;
                        if (j < 0) {
                            pixel += 4;
                            continue;
                        }
                        var m = j % (w * 4),
                            n = scale * 10 * (y / waves);
                        if (m < n || m > (w * 4) - n) {
                            var sign = y < w / 2 ? 1 : -1;
                            od[pixel] = od[pixel + 4 * sign];
                            od[++pixel] = od[pixel + 4 * sign];
                            od[++pixel] = od[pixel + 4 * sign];
                            od[++pixel] = od[pixel + 4 * sign];
                            ++pixel;
                            continue;
                        }
                        if (id[j + 3] != 0) {
                            od[pixel] = id[j];
                            od[++pixel] = id[++j];
                            od[++pixel] = id[++j];
                            od[++pixel] = id[++j];
                            ++pixel;
                        } else {
                            od[pixel] = od[pixel - w * 4];
                            od[++pixel] = od[pixel - w * 4];
                            od[++pixel] = od[pixel - w * 4];
                            od[++pixel] = od[pixel - w * 4];
                            ++pixel;
                        }
                    }
                }

                if (offset > speed * (6 / speed)) {
                    offset = 0;
                    max_frames = frame - 1;
                    // frames.pop();
                    frame = 0;
                    end = true;
                } else {
                    offset += speed;
                    frame++;
                }
                frames.push(odd);
            }
            setCss(shadows, {
                'display': 'none'
            });
            setCss(shadowsSource, {
                'display': 'none'
            });
            c.restore();
            setInterval(() => {
                c.putImageData(frames[frame], 0, h / 2);
                // c.putImageData(frames[frame], 0, h / 2);
                if (frame < max_frames) {
                    frame++;
                } else {
                    frame = 0;
                }
            }, 50);
        }
        let updateShadow = function () {
            if (isIE6()) {
                return;
            }
            shadows.filters.wave.phase += 10;
            setTimeout("updateShadow()", 150);
        }
        shadowInWater();
    }

}

const jsFragment = new JsFragment();
jsFragment.filterOnlyIptChinese('我是中文asdfasd1231中文'); // 过滤掉非中文字符
jsFragment.cursorPos(); // 控制input输入框的光标的位置
jsFragment.shadowWater(); // 水波倒影效果
```