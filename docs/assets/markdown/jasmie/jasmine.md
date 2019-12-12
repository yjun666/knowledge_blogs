# jasmine
> 本页内容摘自[https://www.cnblogs.com/zhcncn/p/4330112.html](https://www.cnblogs.com/zhcncn/p/4330112.html)

##### jasmine 介绍
> Jasmine的开发团队来自PivotalLabs，他们一开始开发的JavaScript测试框架是JsUnit，来源于著名的JAVA测试框架JUnit。JsUnit是xUnit的JavaScript实现。但是JsUnit在2009年后就已经停止维护了，他们推出了一个新的BDD框架Jasmine。Jasmine不依赖于任何框架，所以适用于所有的Javascript代码。

##### 下载
> 在Jasmine的Github官方主页：https://github.com/jasmine/jasmine
找到上方的releases，点击会跳转到https://github.com/jasmine/jasmine/releases。
下载已发布的zip包，比如下载当前（2015-03-09）的最新版本为：jasmine-standalone-2.2.0.zip

##### 目录结构

###### 解压之后，可以看到有1个html文件和3个文件夹。

>lib：存放了运行测试案例所必须的文件，其内包含jasmine-2.2.0文件夹。可以将不同版本的Jasmine放在lib下，以便使用时切换。

>>jasmine.js：整个框架的核心代码。

>>jasmine-html.js：用来展示测试结果的js文件。

>>boot.js：jasmine框架的的启动脚本。需要注意的是，这个脚本应该放在jasmine.js之后，自己的js测试代码之前加载。

>>jasmine.css：用来美化测试结果。

>spec：存放测试脚本。

>>PlayerSpec.js：就是针对src文件夹下的Player.js所写的测试用例。

>>SpecHelper.js：用来添加自定义的检验规则，如果框架本身提供的规则（诸如toBe,toNotBe等）不适用，就可以额外添加自己的规则（在本文件中添加了自定义的规则toBePlaying）。

>src：存放需要测试的js文件。Jasmine提供了一个Example（Player.js，Song.js）。

>SpecRunner.html：运行测试用例的环境。它将上面3个文件夹中一些必要的文件都包含了进来。如果你想将自己的测试添加进来的话，那么就修改相应的路径。

> 其中，spec文件夹，src文件夹和SpecRunner.html文件是Jasmine提供的一个完整示例，用浏览器打开 SpecRunner.html，即可看到执行的结果。

```
specRunner.html

<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner v2.2.0</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.2.0/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.2.0/jasmine.css">

  <script src="lib/jasmine-2.2.0/jasmine.js"></script>
  <script src="lib/jasmine-2.2.0/jasmine-html.js"></script>
  <script src="lib/jasmine-2.2.0/boot.js"></script>

  <!-- include source files here... -->
  <script src="src/Player.js"></script>
  <script src="src/Song.js"></script>

  <!-- include spec files here... -->
  <script src="spec/SpecHelper.js"></script>
  <script src="spec/PlayerSpec.js"></script>
</head>
<body></body>
</html>
```

##  核心概念
1. Suites
```
Suite表示一个测试集，以函数describe(string, function)封装，它包含2个参数：
string：测试组名称，
function：测试组函数。
一个Suite(describe)包含多个Specs(it)，一个Specs(it)包含多个断言（expect）。
```

2. Setup和Teardown操作

```
Jasmine的Setup和Teardown操作（Setup在每个测试用例Spec执行之前做一些初始化操作，Teardown在每个Sepc执行完之后做一些清理操作，这两个函数名称来自于JUnit），是由一组全局beforeEach，afterEach， beforeAll，afterAll函数来实现的。
beforeEach()：在describe函数中每个Spec执行之前执行。
afterEach()： 在describe函数中每个Spec数执行之后执行。
beforeAll()：在describe函数中所有的Specs执行之前执行，但只执行一次，在Sepc之间并不会被执行。
afterAll()： 在describe函数中所有的Specs执行之后执行，但只执行一次，在Sepc之间并不会被执行。
beforeAll 和 afterAll适用于执行比较耗时或者耗资源的一些共同的初始化和清理工作。而且在使用时还要注意，它们不会在每个Spec之间执行，所以不适用于每次执行前都需要干净环境的Spec。
```

3. this值

```
除了在describe函数开始定义变量，用于各it函数共享数据外，还可以通过this关键字来共享数据。
在在每一个Spec的生命周期（beforeEach->it->afterEach）的开始，都将有一个空的this对象（在开始下一个Spec周期时，this会被重置为空对象）。
```
4. 嵌套Suite

```
describe函数可以嵌套，每层都可以定义Specs。这样就可以让一个Suite由一组树状的方法组成。
每个嵌套的describe函数，都可以有自己的beforeEach，afterEach函数。
在执行每个内层Spec时，都会按嵌套的由外及内的顺序执行每个beforeEach函数，所以内层Sepc可以访问到外层Sepc中的beforeEach中的数据。类似的，当内层Spec执行完成后，会按由内及外的顺序执行每个afterEach函数。
describe("A spec", function() {
  var foo;
  beforeEach(function() {
    foo = 0;
    foo += 1;
  });
  afterEach(function() {
    foo = 0;
  });
  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
  describe("nested inside a second describe", function() {
    var bar;
    beforeEach(function() {
      bar = 1;
    });
    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});
```

5. Specs

```
Spec表示测试用例，以it(string, function)函数封装，它也包含2个参数：
string：测试用例名称，
function：测试用例函数。
```

6. Expectations

```
Expectation就是一个断言，以expect语句表示，返回true或false。expect语句有1个参数，代表要测试的实际值（the actual）。
只有当一个Spec中的所有Expectations全为ture时，这个Spec才通过，否则失败。
Expectation带实际值，它和表示匹配规则的Matcher链接在一起，Matcher带有期望值。
```

7. Matchers

```
Matcher实现了断言的比较操作，将Expectation传入的实际值和Matcher传入的期望值比较。
任何Matcher都能通过在expect调用Matcher前加上not来实现一个否定的断言（expect(a).not().toBe(false);）。
常用的Matchers有：
    toBe()：相当于===比较。
    toNotBe()
    toBeDefined()：检查变量或属性是否已声明且赋值。
    toBeUndefined()
    toBeNull()：是否是null。
    toBeTruthy()：如果转换为布尔值，是否为true。
    toBeFalsy()
    toBeLessThan()：数值比较，小于。
    toBeGreaterThan()：数值比较，大于。
    toEqual()：相当于==，注意与toBe()的区别。
一个新建的Object不是（not to be）另一个新建的Object，但是它们是相等（to equal）的。
expect({}).not().toBe({});
expect({}).toEqual({});
    toNotEqual()
    toContain()：数组中是否包含元素（值）。只能用于数组，不能用于对象。
    toBeCloseTo()：数值比较时定义精度，先四舍五入后再比较。
     it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
            var pi = 3.1415926,
            e = 2.78;
            expect(pi).not.toBeCloseTo(e, 2);
            expect(pi).toBeCloseTo(e, 0);
        });
    toHaveBeenCalled()
    toHaveBeenCalledWith()
    toMatch()：按正则表达式匹配。
    toNotMatch()
    toThrow()：检验一个函数是否会抛出一个错误
```

8. 自定义Matchers的实现

```
自定义Matcher（被称为Matcher Factories）实质上是一个函数（该函数的参数可以为空），该函数返回一个闭包，该闭包的本质是一个compare函数，compare函数接受2个参数：actual value 和 expected value。
compare函数必须返回一个带pass属性的结果Object，pass属性是一个Boolean值，表示该Matcher的结果（为true表示该Matcher实际值与预期值匹配，为false表示不匹配），也就是说，实际值与预期值具体的比较操作的结果，存放于pass属性中。
最后测试输出的失败信息应该在返回结果Object中的message属性中来定义。
var customMatchers = {
  toBeGoofy: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        if (expected === undefined) {
          expected = '';
        }
        var result = {};
        result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
        if (result.pass) {
          result.message = "Expected " + actual + " not to be quite so goofy";
        } else {
          result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
        }
        return result;
      }
    };
  }
};
```

9. 自定义Matchers的使用

```
对自定义Matcher有2种使用方法：
1. 将该函数添加到一个特定的describe函数的beforeEach中，以便该describe函数中的所有Spec都能调用到它。但其他describe中并不能使用该Matcher。
该方法的例子可以参考官网提供的custom_matcher.js的实现[3]。
describe("Custom matcher: 'toBeGoofy'", function() {
  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
  it("can take an 'expected' parameter", function() {
    expect({
      hyuk: 'gawrsh is fun'
    }).toBeGoofy(' is fun');
  });
});
2.将该函数添加到全局的beforeEach函数中，这样所有的Suites中的所有的Specs，都可以使用该Matcher。
该方法的例子可以参考Jasmine提供的Demo中的SpecHelper.js文件中的toBePlaying自定义的规则的实现。
//定义
beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      // 自定义Matcher：toBePlaying
      return {
        //要返回的compare函数
        compare: function (actual, expected) {
          var player = actual;
          //compare函数中要返回的结果Object，这里是一个匿名Object，包含一个pass属性。
          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
});
//使用
describe("Player", function() {
  it("should be able to play a Song", function() {
    player.play(song);
    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });
  describe("when song has been paused", function() {
    it("should indicate that the song is currently paused", function() {
      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });
)};
```
10. 禁用Suites

```
Suites可以被Disabled。在describe函数名之前添加x即可将Suite禁用。
被Disabled的Suites在执行中会被跳过，该Suite的结果也不会显示在结果集中。
xdescribe("A spec", function() {
  var foo;
  beforeEach(function() {
    foo = 0;
    foo += 1;
  });
  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
});
```

11. 挂起Specs

```
有3种方法可以将一个Spec标记为Pending。被Pending的Spec不会被执行，但是Spec的名字会在结果集中显示，只是标记为Pending。
    如果在Spec函数it的函数名之前添加x（xit），那么该Spec就会被标记为Pending。
    一个没有定义函数体的Sepc也会在结果集中被标记为Pending。
    如果在Spec的函数体中调用pending()函数，那么该Spec也会被标记为Pending。pending()函数接受一个字符串参数，该参数会在结果集中显示在PENDING WITH MESSAGE:之后，作为为何被Pending的原因。
describe("Pending specs", function() {
  xit("can be declared 'xit'", function() {
    expect(true).toBe(false);
  });
  it("can be declared with 'it' but without a function");
  it("can be declared by calling 'pending' in the spec body", function() {
    expect(true).toBe(false);
    pending('this is why it is pending');
  });
});
```

## 高级特性

1.Spy
```
Spy能监测任何function的调用和方法参数的调用痕迹。需使用2个特殊的Matcher：

    toHaveBeenCalled：可以检查function是否被调用过，
    toHaveBeenCalledWith： 可以检查传入参数是否被作为参数调用过。
```

> 1.spyOn

```
    使用spyOn(obj,'function')来为obj的function方法声明一个Spy。不过要注意的一点是，对Spy函数的调用并不会影响真实的值。
    describe("A spy", function() {
        var foo, bar = null;
        beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };
    spyOn(foo, 'setBar');
    foo.setBar(123);
    foo.setBar(456, 'another param');
    });
  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });
  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });
  it("stops all execution on a function", function() {
    // Spy的调用并不会影响真实的值，所以bar仍然是null。
    expect(bar).toBeNull();
  });
});
```
> 2. and.callThrough

```
如果在spyOn之后链式调用and.callThrough，那么Spy除了跟踪所有的函数调用外，还会直接调用函数额真实实现，因此Spy返回的值就是函数调用后实际的值了。
 spyOn(foo, 'getBar').and.callThrough();
  foo.setBar(123);
  fetchedBar = foo.getBar();
  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });
  it("should not effect other functions", function() {
    expect(bar).toEqual(123);
  });
  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123);
  });
});
```
> 3. and.stub

```
在调用and.callThrough后，如果你想阻止spi继续对实际值产生影响，你可以调用and.stub。也就是说，and.stub是将spi对实际实现的影响还原到最终的状态——不影响实际值。
spyOn(foo, 'setBar').and.callThrough();
foo.setBar(123);
// 实际的bar=123
expect(bar).toEqual(123);
// 调用and.stub()后，之后调用foo.setBar将不会影响bar的值。
foo.setBar.and.stub();
foo.setBar(456);
expect(bar).toBe(123);
bar = null;
foo.setBar(123);
expect(bar).toBe(null);
```

2. 全局匹配谓词

> 1. jasmine.any

```
jasmine.any的参数为一个构造函数，用于检测该参数是否与实际值所对应的构造函数相匹配。
describe("jasmine.any", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });
  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return true;
      });
      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
    });
  });
});
```
> 2. asmine.anything

```
jasmine.anything用于检测实际值是否为null或undefined，如果不为null或undefined，则返回true
it("matches anything", function() {
    expect(1).toEqual(jasmine.anything());
});
```

> 3. jasmine.objectContaining 

```
用于检测实际Object值中是否存在特定key/value对。
var foo;
  beforeEach(function() {
    foo = {
      a: 1,
      b: 2,
      bar: "baz"
    };
  });
  it("matches objects with the expect key/value pairs", function() {
    expect(foo).toEqual(jasmine.objectContaining({
      bar: "baz"
    }));
    expect(foo).not.toEqual(jasmine.objectContaining({
      c: 37
    }));
  });
```
> 4. jasmine.arrayContaining

```
用于检测实际Array值中是否存在特定值。
var foo;
  beforeEach(function() {
    foo = [1, 2, 3, 4];
  });
  it("matches arrays with some of the values", function() {
    expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
    expect(foo).not.toEqual(jasmine.arrayContaining([6]));
  });
```

3. Jasmine Clock

```
Jasmine Clock用于setTimeout和setInterval的回调控制，它使timer的回调函数同步化，不再依赖于具体的时间，而是将时间离散化，使测试人员能精确控制具体的时间点。
```

> 1. 安装与卸载

```
调用jasmine.clock().install()可以在特定的需要操纵时间的Spec或者Suite中安装Jasmine Clock，注意操作完后要调用jasmine.clock().uninstall()进行卸载。
var timerCallback;
  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });
```
> 2. 模拟超时（Mocking Timeout）

```
可以调用jasmine.clock().tick(nTime)来模拟计时，一旦tick中设置的时间nTime，其累计设置的值达到setTimeout或setInterval中指定的延时时间，则触发回调函数。
it("causes an interval to be called synchronously", function() {
    setInterval(function() {
      timerCallback();
    }, 100);
    expect(timerCallback).not.toHaveBeenCalled();
    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);
    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);
    //tick设置的时间，累计到此201ms，因此会触发setInterval中的毁掉函数被调用2次。
    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
  });
```

> 3. 异步支持（Asynchronous Support）

```
调用beforeEach，it或者afterEach时，可以添加一个可选参数（Function类型，在官方文档的例子中该参数为done）。当done函数被调用，表明异步操作的回调函数调用成功；否则如果没有调用done，表明异步操作的回调函数调用失败，则该Spec不会被调用，且会因为超时退出。
Jasmine等待异步操作完成的默认时间是5s，如果5s内异步操作没有完成，则Spec会因为超时退出。超时时间也可以通过全局的jasmine.DEFAULT_TIMEOUT_INTERVAL修改[4]。
var value;
// setTimeout代表一个异步操作。
beforeEach(function(done) {
  setTimeout(function() {
    value = 0;
    // 调用done表示回调成功，否则超时。
    done();
  }, 1);
});
// 如果在beforeEach中的setTimeout的回调中没有调用done，最终导致下面的it因超时而失败。
it("should support async execution of test preparation and expectations", function(done) {
  value++;
  expect(value).toBeGreaterThan(0);
  done();
});
```

## 参考资料
[1] [Javascript的Unit Test](http://www.tychio.net/tech/2013/07/10/unit-test.html)。

[2] [官方文档introduction.js](http://jasmine.github.io/2.2/introduction.html)

[3] [官方文档custom_matcher.js](http://jasmine.github.io/2.2/custom_matcher.html)

[4] [Jasmine——JavaScript 单元测试框架](http://inching.org/2014/03/05/javascript-jasmine/)




# 以下为补充，可能与上述定义有重合
### matchers 的使用

```
describe("Included matchers:", function() {
        it("The 'toBe' matcher compares with ===", function() {
            var a = 12;
            var b = a;
            expect(a).toBe(b);
            expect(a).not.toBe(null);
        });  
        //上面的例子，比较a、b是否相等；验证a是否不是空。 
        it("should work for objects", function() {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });
        //上面的例子比较了两个对象是否相等
    });
    it("The 'toMatch' matcher is for regular expressions", function() {
        var message = 'foo bar baz';
        expect(message).toMatch(/bar/);
        expect(message).toMatch('bar');
        expect(message).not.toMatch(/quux/);
    });
    //也可以使用正则表达式
    it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });
    //验证变量是否被定义  
    it("The 'toBeNull' matcher compares against null", function() {
        var a = null;
        var foo = 'foo';

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });
    //验证是否为空
    it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        var a, foo = 'foo';

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
        var a, foo = 'foo';

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });
    //变量是否能够转化成boolean变量？ 不太确定

    it("The 'toContain' matcher is for finding an item in an Array", function() {
        var a = ['foo', 'bar', 'baz'];

        expect(a).toContain('bar');
        expect(a).not.toContain('quux');
    });
    //是否包含
    it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926, e = 2.78;

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' is for mathematical comparisons", function() {
        var pi = 3.1415926, e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });
    //数学大小的比较

    it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1415926, e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
    });
    //两个数值是否接近，这里接近的意思是将pi和e保留一定小数位数后，是否相等。（一定小数位数：默认为2，也可以手动指定）

    it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
        var foo = function() {
        return 1 + 2;
        };
        var bar = function() {
            return a + 1;
        };

        expect(foo).not.toThrow();
        expect(bar).toThrow();
        });
    });
```
