

Vue.component('todo-item',{
    template:'<li>待办事项</li>'
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
        eventtype:'click'
    },
    methods:{
        showMsg:function(){
            alert(this.users[0].name+'***'+app.show);
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
