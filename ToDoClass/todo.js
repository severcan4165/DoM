//! input, add button and container list 

const input = document.querySelector(".inputarea");
const addButton = document.querySelector(".addbutton");
const container = document.getElementById("list-container");


//! at the beginning pull values from local storage, if doesnt exist create empty array

let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
 //? if there is a todolist values 
 const renderSaved = () => {
    toDoList.forEach((todos) => {
        createListElements(todos);
    });
 };
 renderSaved();


//!addbuttonuna basıldığında yapılacak işlemler
addButton.addEventListener("click", ()=>{

    //* controlling whether input was entered, if not give an alert note ! 
    //* (also evaluate white spaces, remove with trim )

    if(!input.value.trim()){
        alert("please enter your todos")
    }
    //! if input was entered, add these values to ToDos this adding process should be function,
    
    else{
        const toDos = {
            id: new Date().getTime(),
            text : input.value,
            completed : false
        }

    //! and also should contain element creating function
        createListElements(toDos);

    //! also set localStorage
        toDoList.push(toDos);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
        input.focus();
        input.value = "";
    }
    })

    //! Define a function for creating necessary elements for toDos

    function createListElements(toDos) {
        const{id, text, completed} = toDos;
        const toDoDiv = document.createElement("div");
        toDoDiv.className = "todoitems";
        toDoDiv.id = id;

         const icon = document.createElement("i");
         icon.className ="fas fa-check";
         completed && icon.classList.add("checked");

         const spanText = document.createElement("span");
         spanText.id ="todo-text";
         spanText.className ="spanstyle";
         spanText.textContent = text;

         const trash = document.createElement("i");
         trash.id = "trash";
         trash.className ="fa-solid fa-trash";

         toDoDiv.appendChild(icon);
         toDoDiv.appendChild(spanText);
         toDoDiv.appendChild(trash);

         container.appendChild(toDoDiv);
    }
    //! if pressed "enter" run addButtons's click() function..
    input.addEventListener("keydown", (e)=> {
        if(e.code == "Enter"){
            addButton.click();
        }
    })



    

    container.addEventListener("click", (e)=>{

        if(e.target.classList.contains("fa-check")){
            e.target.classList.toggle("checked");
            const ida = e.target.parentElement.getAttribute("id");
         
            toDoList.completed = toDoList.forEach((item) => item.id === Number(ida) && (item.completed = !item.completed));
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        
            
            
            
        }
        else if(e.target.classList.contains("fa-trash")){
            e.target.parentElement.remove();
            const id = e.target.parentElement.getAttribute("id");
            toDoList = toDoList.filter((a) => a.id !== Number(id));
            localStorage.setItem("toDoList", JSON.stringify(toDoList));
        }
    })

    //! define delete button process(also include localstorage)



    //!  define okeytick process (also include localstorage)