const inputArea = document.getElementById("input");
const addbutton = document.getElementById("addButton");
const todoListParent = document.getElementById("todoListParent");

// const startConfig = () => {
//  const todos = localStorage.getItem("todos");
//     if(!todos){
//         localStorage.setItem("todos", JSON.stringify([]));
//     }
// }
// startConfig();
// const addTodo = (e) => {
//     e.preventDefault();

//     const task = inputArea.value;
//     const todo = {
//         text : task,
//         flag : false
//     }
//    const todos = localStorage.getItem("todos");
//    console.log(todos)

// }


const startConfig = () => {
const todoList = localStorage.getItem("todoList");
if(!todoList){
    localStorage.setItem("todoList", JSON.stringify([]));
}
}
startConfig();

const addToDo = (e) => {
    e.preventDefault();

    const icerik = inputArea.value;
    const todoItems = {
        task : icerik,
        flag : false
    }
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.push(todoItems);
    localStorage.setItem("todoList", JSON.stringify("todoList"))


    
}



addbutton.addEventListener("click", ()=>{
    if(!inputArea.value){
        alert("please enter your to do list")
    }else{

     
        todoListParent.innerHTML +=`<div id="icerik" class="container rounded p-3">
        <i id="checkk" class="fa-solid fa-check p-2"></i>
        <span class="">${inputArea.value}</span>
        <i id="trash" class="fa-solid fa-trash"></i>
        </div>`
        inputArea.value = ""
        inputArea.focus();

    }
})

inputArea.addEventListener("keydown", (event)=>{
    if(event.key=="Enter"){
        addbtn.click();
    }
})

todoListParent.addEventListener("click", (event)=>{
   
    if(event.target.id ==="checkk"){
        event.target.nextElementSibling.classList.toggle("checked-text")
        event.target.parentElement.classList.toggle("checked-container");

    }
    else if(event.target.id ==="trash"){
        event.target.parentElement.remove();
    }
})