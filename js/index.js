

Vue.component('todo-item',{
    template:'<li class="sel">待办事项</li>'
});

Vue.component('todo-item-ex',{
    props:['todo'],
    template:'<li>{{todo.name}}#{{todo.pass}}</li>'
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
            li_8:{fontSize:'8px'}
        }
    },
    methods:{
        showMsg:function(){
           this.show=!!!this.show;
        },
        now:function(){
            return Date.now();
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
