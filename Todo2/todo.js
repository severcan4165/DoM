const input = document.querySelector(".inputarea");

const addbutton = document.querySelector(".addbutton");
const container = document.getElementById("list-container")
let deleteButton;


const insertHtml = (todoItems)=>{
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoitems");

    const checkBox = document.createElement("input");
    checkBox.type ="checkbox";
    checkBox.id="checkbox";

    const inputText = document.createElement("span");
    inputText.id="todo-text";
    inputText.textContent = todoItems.task;

    const icon = document.createElement("i");
    icon.className ="fa-solid fa-trash";
    icon.id ="trash";

    todoDiv.appendChild(checkBox);
    todoDiv.appendChild(inputText);
    todoDiv.appendChild(icon);
    container.appendChild(todoDiv);
}

const startConfig = ()=> {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if(!todoList){
        localStorage.setItem("todoList", JSON.stringify([]));
    }
    else{
        todoList.forEach(todo => {
        insertHtml(todo);            
        });
        deleteButton = document.querySelectorAll("#trash");
      
    }
}
startConfig();

const addTodo = (e)=>{
    e.preventDefault();
    const taskContent = input.value;
    const todoItems = {
        task : taskContent,
        isCompleted : false
    }
    todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.push(todoItems);
    localStorage.setItem("todoList", JSON.stringify(todoList));


    insertHtml(todoItems);

}

const deleteItems = (e)=> {
   const dele = e.target.parentElement;

   const text = dele.lastChild.textContent;
 
   let todoList = JSON.parse(localStorage.getItem("todoList"));
   todoList = todoList.filter( (a) => a.text != text);
   localStorage.setItem("todoList", JSON.stringify(todoList));
   dele.remove();
  
   
}
addbutton.addEventListener("click",addTodo);
deleteButton.forEach( (btn)=> btn.addEventListener("click",deleteItems));

