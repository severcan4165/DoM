const inputV = document.getElementById("input");
const addbtn = document.getElementById("addBtn");
const todo = document.getElementById("todo");

addbtn.addEventListener("click", ()=>{
    if(!inputV.value){
        alert("please enter your to do list")
    }else{

        const icerik =`<li>${inputV.value}</li>`;
        todo.innerHTML += icerik;
        addbtn.focus();

    }
})