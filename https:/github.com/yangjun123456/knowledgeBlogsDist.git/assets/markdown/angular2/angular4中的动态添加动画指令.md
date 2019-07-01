无限闪烁动画，动态添加指令----详细见----https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate
```
let animation = document.getElementsByClassName('sceneBody')[0].animate([{opacity:0},{opacity:1}],{direction:'alternate',duration:1000,iterations:Infinity})

animation.cancel();
```
