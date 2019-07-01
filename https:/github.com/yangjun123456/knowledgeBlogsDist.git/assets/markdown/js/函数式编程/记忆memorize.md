#### memorize 记忆方法
```
function memorize(f){
    var cache = {};
    return function(){
        var key = arguments.length+Array.prototype.join.call(arguments,',');
        if( key in cache ){
         	return cache[key];
        }else{
            return cache[key] = f.apply(this,arguments);
        }
    }
}
// 计算最大公约数
function gcd(a,b){
    var t;
    if( a<b){
       t=b,b=a,a=t;
       }
    while(b!=0){
        t=b,b=a%b,a=t;
    }
    return a;
}
var gcdmemo = memorize(gcd);
console.log(gcdmemo(85,187));


// 实现了记忆功能的递归函数
var factorial = memorize(function(n){
    return (n<1)?1:n*factorial(n-1);
})
console.log(factorial(5));
```
