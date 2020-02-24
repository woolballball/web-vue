//---------------------------定义组件
var btn = function (id, name, clss, func, url) {
    this.name = name;
    this.id = id;
    this.clss = clss;
    this.func = func;
    this.url = url;
}
//---------------------------模拟后台返回数据
var jxPaper={
    init:function(){
        app.btns.push(
            new btn(1, '添加', 'btn-add', 'addFunc', 'http://www.baidu.com')
        );
        app.btns.push(
            new btn(2, '编辑', 'btn-update', 'updateFunc', 'http://www.baidu.com')
        );
        app.btns.push(
            new btn(3, '删除', 'btn-remove', 'removeFunc', 'http://www.baidu.com')
        );
    }
}

//-----------------------定义当前页面的按钮方法
var funcs={
    addFunc() {
        alert('add');
    },
    updateFunc() {
        alert('update');
    },
    removeFunc() {
        alert('remove');
    }
};


//------------导入自定义模板
Vue.component("jx-btn", {
    props: ["btn"],
    template: `<button @click="()=>!!btn.func&&this[btn.func].apply(this,null)" :class="btn.clss" :id="btn.id">{{btn.name}}</button>`,
    methods: funcs
});


//----------------------初始化vue
var app = new Vue({
    el: '#btns',
    data: {
        btns: []
    },
    methods: {
        btnFunc: function (evtName) {
            alert(evtName);
            this.$emit(evtName);
        },
        addFunc: function (fn) {
            alert(fn);
        },
        btn: function () {

        }
    }
});
//---------------模拟调用后台接口，初始化按钮数据
jxPaper.init();


