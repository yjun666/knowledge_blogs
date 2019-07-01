#### compose
```
var compose = function(f,g){
    return function(){
        return f.call(this,g.apply(this,arguments));
    }
}
var square = function(x){
    return x*x;
}
var sum = function(x,y){
    return x+y;
};
var squareOfSum = compose(square,sum);
console.log(squareOfSum(2,3));
```