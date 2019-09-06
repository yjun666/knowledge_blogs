###  ChangeDetectorRef  手动执行变更检测

```
class ChangeDetectorRef {
  markForCheck() : void
  detach() : void
  reattach() : void 
  detectChanges() : void
  checkNoChanges() : void
}
```
* deatch
> 它仅仅是能够禁用掉对当前视图的检查：

```
@Component({
  selector: 'a-comp',
  template: `<span>See if I change: {{changed}}</span>`
})
export class AComponent {
  constructor(public cd: ChangeDetectorRef) {
    this.changed = 'false';
 
    setTimeout(() => {
      this.cd.detach();
      this.changed = 'true';
    }, 2000);
  }
}
第一次（检查）的时候，span标签将会被渲染成文本See if I change: false. 当2秒后，changed属性变为true的时候，span标签中的文本将不会改变，但当我们删掉this.cd.detach()的时候，一切都会如期执行。
```

* reattach
> 一旦我们输入属性改变了，我们就可以激活当前视图的变更检测器去执行变更检测，然后在下个事件循环中再把它从deatch（变更检测树中分离）掉，下面的代码片段证明了这一点：

```

export class AComponent {
  @Input() inputAProp;
 
  constructor(public cd: ChangeDetectorRef) {
    this.cd.detach();
  }
 
  ngOnChanges(values) {
    this.cd.reattach();
    setTimeout(() => {
      this.cd.detach();
    })
  }
}
这跟我们把ChangeDetectionStrategy设置为OnPush几乎是等价的：在第一次变更检测执行完后就禁用掉，然后当父组件绑定的属性改变时再启用检查，检查完了之后再禁用掉。
```

* markForCheck
> reattach方法只能对当前的组件启用检查，但是如果当前的组件的父组件没有启用脏检查的话，它将不起作用，这就意味着reattach方法仅仅对禁用分支的顶层组件起作用。我们需要一个方法来对所有的父组件一直到根组件都启用脏检查，这里有一个markForCheck的方法:

```
let currView: ViewData|null = view;
while (currView) {
  if (currView.def.flags & ViewFlags.OnPush) {
    currView.state |= ViewState.ChecksEnabled;
  }
  currView = currView.viewContainerParent || currView.parent;
}
从上面的实现中可以看到，它仅仅是向上遍历，对所有的父组件启用检查一直到根组件。

什么时候它是有用的呢？就像是ngOnChanges一样，即使组件使用OnPush策略，ngDoCheck生命周期钩子也会被触发，同样的，只有在禁用分支的最顶层的组件中才会被触发，而不是禁用分支的所有组件。但是我们可以用这个钩子来执行一些定制化的逻辑，使我们的组件可以在一个变更检测周期中执行检查。由于Angular仅仅检查对象的引用，我们可以实现一些对象属性的脏检查:

Component({
   ...,
   changeDetection: ChangeDetectionStrategy.OnPush
})
MyComponent {
   @Input() items;
   prevLength;
   constructor(cd: ChangeDetectorRef) {}
 
   ngOnInit() {
      this.prevLength = this.items.length;
   }
 
   ngDoCheck() {
      if (this.items.length !== this.prevLength) {
         this.cd.markForCheck(); 
         this.prevLenght = this.items.length;
      }
   }
}
```

* detectChanges
> 有一种方法只在当前视图和它的子视图只运行一次变更检测，那就是detectChanges方法, 这个方法在运行变更检测时候不管当前组件的状态是什么，那就意味着当前的视图可能会保持禁用检查的状态，在下一个常规的变更检测进行时，它将不会被检查，下面是一个例子：

```
export class AComponent {
  @Input() inputAProp;
 
  constructor(public cd: ChangeDetectorRef) {
    this.cd.detach();
  }
 
  ngOnChanges(values) {
    this.cd.detectChanges();
  }
}
当输入属性改变的时候，即使变更检测器还保持着分离的状态，DOM也会更新。
```

* checkNoChanges
> 变更检测器上最后一个有用的方法是在运行当前的变更检测时，确保没有变化发生。基本上，它执行了本文第一部分那个步骤中的1，7，8的操作，并且当它发现一个绑定值变化了或是决定DOM应该要被更行的时候，将会抛出一个异常。