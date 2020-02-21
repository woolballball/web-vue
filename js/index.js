

Vue.component('todo-item',{
    template:'<li class="sel">待办事项</li>'
});

Vue.component('button-counter', {
    data:   {
        count: 0
       
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

Vue.component('jx-btn',{
    data: {
        count: 0
      },
    template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

var app = new Vue({
    el: '#app',
    data: {
        show:0,
        readonly:null,
        message: `<span style="color:red">hello web-vue,
        file path is [${this.location.href}]</h2>`,
        users:[{name:'jim',pass:'123123'},{name:'tim',pass:'abcabc'}],
        text:'hi jx',
        eventtype:'click',
        styles:{
            li_i:'i',
            li_8:{fontSize:'8px'},
            div_box:'box'
        }
    },
    methods:{
        showMsg:function(){
           this.show=!!!this.show;
        },
        now:function(){
            return Date.now();
        },
        showName:function(name,event){
            this.text=`${name}---${event.target.tagName}`;
        },
        capture:function(param){
            alert(param);
        }
    },
    computed:{
        cals:function(){
            return this.message.split('').reverse().join('');
        },
        nowAttr:function(){
            return Date.now();
        }
    }
});
app.$watch('message',function(n,o){
    alert(o+'--->'+n);
});
