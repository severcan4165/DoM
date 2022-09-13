const langInput = document.querySelector(".lang-input");
const addBtn = document.getElementById("add-btn");
const delBtn = document.getElementById("delete-btn");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);


addBtn.addEventListener("click", ()=>{

    if(!langInput.value){
    alert("enter a language");
    }
    else{
newUl.innerHTML += `<li>${langInput.value}</li>`;
langInput.value = "";
    }
langInput.focus();

})

delBtn.addEventListener("click", ()=> {

    newUl.childElementCount>0 ? newUl.removeChild(newUl.lastElementChild):alert("there is no other child to delete"); 
    langInput.focus();


})


//? enter key and  del key event handler
langInput.addEventListener("keydown", (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.keyCode);
    // console.log(event.code);
  
    if (event.keyCode === 13) {
      addBtn.click();
    }
  
    // if (event.code === "Delete") {
    //   delBtn.click();
    // }
  
    if (event.keyCode === 46) {
      delBtn.click();
    }
  });

  window.addEventListener("load",()=>{
    langInput.focus();
  })