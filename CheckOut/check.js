const product = document.getElementById("imgs1");
const product2 = document.getElementById("imgs2");
const sectionR = document.querySelector(".right");
const oranges = document.querySelector(".oranges");
const del = document.querySelector(".del");
const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
const buttonspan = document.querySelector(".buttonspan");
const subtotal = document.querySelector("#subTotal");

const shipping = document.querySelector("#shipping");
const total = document.querySelector("#total");

const bag = 54.99;
const shoes = 75.99;

    const buttonInc = Array.from(increase)
    const buttonDec = Array.from(decrease)


    sectionR.addEventListener("click", (e)=> {

      
        if(e.target.className == "decrease"){

           
             if(Number(e.target.nextElementSibling.textContent)>0){
         let oranges1 = e.target.parentElement.previousElementSibling.children[1].children[0];
        
             e.target.nextElementSibling.textContent = (Number( e.target.nextElementSibling.textContent) - 1);
             oranges1.textContent = "$" + (Number(e.target.nextElementSibling.textContent)*bag).toFixed(2);
            //     subtotal.textContent = "$" + Number(oranges.textContent.slice(1));
            //     total.textContent = "$" + ( Number(subtotal.textContent.slice(1)) + Number(shipping.textContent.slice(1))).toFixed(2);
        
             }
            // else{
            //     product.remove();
            // } 

        }  
        else if(e.target.className == "increase"){
            // console.log("yess")
                   e.target.previousElementSibling.textContent = (Number( e.target.previousElementSibling.textContent) + 1);
                  let oranges1 = e.target.parentElement.previousElementSibling.children[1].children[0];
                   oranges1.textContent = "$" + (Number(e.target.previousElementSibling.textContent)*bag).toFixed(2);

        }
        else if(e.target.className == "remove"){
            console.log("remove")
     
        }
        else{
            console.log("others")
        }

    
    
            // if(Number(buttonspan.textContent)>0){
        
            //     buttonspan.textContent = (Number(buttonspan.textContent) - 1);
            //     oranges.textContent = "$" + (Number(buttonspan.textContent)*bag).toFixed(2);
            //     subtotal.textContent = "$" + Number(oranges.textContent.slice(1));
            //     total.textContent = "$" + ( Number(subtotal.textContent.slice(1)) + Number(shipping.textContent.slice(1))).toFixed(2);
        
            // }
            // else{
            //     product.remove();
            // }    
        })
        
    // increase.addEventListener("click", ()=> {
    //         buttonspan.textContent = (Number(buttonspan.textContent) + 1);
    //         oranges.textContent = "$" + (Number(buttonspan.textContent)*bag).toFixed(2);
    //         subtotal.textContent = "$" + Number(oranges.textContent.slice(1));
    //         total.textContent = "$" + ( Number(subtotal.textContent.slice(1)) + Number(shipping.textContent.slice(1))).toFixed(2);
        
        
        
    // })
    
    
        
        







