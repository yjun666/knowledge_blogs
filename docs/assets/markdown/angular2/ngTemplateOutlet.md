### ngTemplateOutlet

```
<ul>
    <ng-template ngFor let-item let-i=index [ngForOf]='heros'>
      <li>
        <ng-container *ngTemplateOutlet="mulStateBody; context: item"></ng-container>
      </li>
      <!-- <li id='item.id'>{{item.name}}-{{item.content}}-{{item.value}}-{{item.id}}-{{item.age}}</li> -->
    </ng-template>
</ul>

<!-- value 等属性是item中传入的属性 -->

<!-- ngTemplateOutlet 使用方法 -->
<ng-template #mulStateBody let-value="value" let-id='id' let-content='content' let-name='name'>
  <div [attr.id]='id'>{{content}}---{{id}}---{{value}}----{{name}}</div>
</ng-template>
```