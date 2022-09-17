const input = document.querySelector(".inputarea");

const addbutton = document.querySelector(".addbutton");
const container = document.getElementById("list-container")
let deleteButton;




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


const addTodo = ()=>{
    // e.preventDefault();
    const taskContent = input.value;
    // if (taskContent == '')  { // boş değer girilmeye çalışıyor ise hata veriyoruz
    //     input.style.border = '1px solid tomato';
    //     setTimeout(() => {
    //        input.style.borderColor = 'transparent';
    //     }, 2500);
    //     return false;
    //  }
    const todoItems = {
        text : taskContent,
        isCompleted : false
    }

    const todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.push(todoItems);
    localStorage.setItem("todoList", JSON.stringify(todoList));


    insertHtml(todoItems);
    input.value = "";

}

const deleteItems = (e)=> {
   const deleted = e.target.parentElement;
   const text = deleted.children[1].textContent;
 
   let todoList = JSON.parse(localStorage.getItem("todoList"));
   todoList = todoList.filter(td => td.text != text);
   localStorage.setItem("todoList", JSON.stringify(todoList));

   deleted.remove();
//    localStorage.removeItem(`deleted`);
    // window.onbeforeunload = function()
    // {
    //     localStorage.removeItem(deleted);
    // };
  
   
}
const insertHtml = (todoItems)=>{
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoitems");

    const checkBox = document.createElement("input");
    checkBox.type ="checkbox";
    checkBox.id="checkbox";

    const inputText = document.createElement("span");
    inputText.id="todo-text";
    inputText.textContent = todoItems.text;

    const icon = document.createElement("i");
    icon.className ="fa-solid fa-trash";
    icon.id ="trash";

    todoDiv.appendChild(checkBox);
    todoDiv.appendChild(inputText);
    todoDiv.appendChild(icon);
    container.appendChild(todoDiv);
}
startConfig();
addbutton.addEventListener("click",addTodo);
deleteButton.forEach( (btn)=> btn.addEventListener("click",deleteItems));

