let list = [
            {
                title:"我想这周把vue学会",
                isCompleted:false
            },
            {
                title:"我想这周把vue学会1111",
                isCompleted:true
            }
];

var app=new Vue({
    el:"#todolist",
    data:{
        //添加文本框的数据
        addInp:"",
        listItems:[]
    },
    methods:{
        //添加列表
        add:function(){
            this.listItems.push(
            {title:this.addInp,isCompleted:false});
            this.addInp="";
        },
        //删除列表
        del:function(index){
            this.listItems.splice(index,1);
        }
    }
})
//双击编辑
function edit (element) {
// 获取要编辑的文本内容
var oldHtml = element.innerHTML;
// 创建一个新的 input 输入框
var newInput = document.createElement('input');
// 为新的 input添加属性
newInput.type = "text";
newInput.value = oldHtml;
// 清空当前元素的文本内容
element.innerHTML = '';
// 把新的 input 框 追加到当前元素节点中
element.appendChild(newInput);
// 设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
newInput.setSelectionRange(0, oldHtml.length)
// 为新 input 框获取焦点
newInput.focus();
// 为新的 input 添加失去焦点事件
newInput.onblur = function () {
// 判断失去焦点时，input 框的值是否与原值相同，相同则表示没有修改，返回原值；不同则表示有改动，返回新值
element.innerHTML = this.value == oldHtml? oldHtml : this.value;
}
}