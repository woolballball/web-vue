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

