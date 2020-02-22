# web-vue
web with vue

#### 常用指令
|   指令   |   描述   | 示例  |
| ---- | ---- | ----  |
|   {{}}   |  把 vue.data的值绑定到 html 内容    |  ```<div>{{any words}}</div>```
|   :   |   把vue.data的值绑定到 html 属性   |  ```<div :id="id"></div>```  |
|   v-html   |   把 vue.data的值渲染成 html，而不是text   | ```<div v-html="any_words_red"></div>```  |
|  @  | 绑定事件到 html 标签 | <button @click="say"></button>  |
| []  | 绑定动态的属性键  | <button @[event-type]="say"></button> ,event-type取值vue.data |
| v-model | 绑定数据到input上 | <input v-model="text"/> |

#### 样式

有三种绑定方式：
```css
.red{color:red;}
```
```js
var data={
  isRed:true,
  redColor:'red',
  size:'12px',
  styles:{
    'font-size':'12px',
    color:'red'
  }
};
var app = new Vue({
  data:data
});
```
```html
1. 直接绑定：
<div class="div-red"> ... </div>

2. 通过:class绑定：
<div :class="red"> ... </div>
<div :class="[redColor]"> ... </div> redColor必须定义在vue.data中，不能读取css
<div :class="[{red:isRed}]"> ... </div>

3. 通过style绑定：
<div :style="fontSize:size"> ... </div>
<div :style="styles"> ... </div>

```


#### 动态属性
```javascript
var app=new Vue({
  data:{
    name:'jim'
  }
computed:{
  any_attr:{
    get:function(){return this.name;}
    set:function(name){this.name=name;}
  }
},
watch:{
  name:function(newValue,oldValue){
    alert(`the old value is [${oldValue},new value is [${newValue}]]`);
  }
});
```

#### 修饰符

    .stop：停止冒泡
    .prevent：阻止默认事件
    .capture：优先响应
    .self：之后触发的元素是自己时，才会触发自身的事件，如在冒泡过程中，如果点击的不是自己，自身的事件不会响应
    .once：事件只会响应一次
    .passive：会执行默认事件
