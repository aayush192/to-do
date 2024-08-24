/*const myArray=[10,20,'aar',30];
let a=myArray.length;
console.log(a);
console.log(myArray.push(100));
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);
myArray.splice(1,2);*/
function saveInStorage(){
localStorage.setItem('array',JSON.stringify(myArray));
}
let totalHTML='';
let myArray=JSON.parse(localStorage.getItem('array'))||[];
function render(){
    totalHTML='';
    
    myArray.forEach(function(value,i){//it loop inside an array
        let htmlObject=value;
        const {name}=htmlObject;
        const {dueDate}=htmlObject;
        let val=`
        <div id='todoName'>
        ${name}</div>   <div id='todoDueDate'>${dueDate}</div>
        <button onclick="myArray.splice(${i},1);
        saveInStorage();
        render();
        " id='buttonOne'>Delete</button>`;
        totalHTML+=val;
       
    });
    document.getElementById('todolist').innerHTML=totalHTML;
}
const todo=document.getElementById('todo');
const button=document.getElementById('add');
const todoDate=document.getElementById('todoDate');

button.onclick=function(){
    let name=todo.value;
    let dueDate=todoDate.value;
    if(name.trim()!==''){
    myArray.push({
        name,
        dueDate
    });
    saveInStorage();
    todo.value='';
    todoDate.value='';
    render();
    }
}
/*todo.onkeydown=function(){
    if(event.key==='Enter'){
    let name=todo.value;
    letdueDate=todoDate.value;
    if(name.trim()!==''){
        myArray.push({
            name,
            dueDate
        });
    todo.value='';
    todoDate.value='';
    render();
    }
    }
}*/
/*todo.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        let name=todo.value;
    letdueDate=todoDate.value;
    if(name.trim()!==''){
        myArray.push({
            name,
            dueDate
        });
    todo.value='';
    todoDate.value='';
    render();
    }
}
});*/

