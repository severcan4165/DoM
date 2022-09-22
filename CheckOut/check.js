
const sectionR = document.querySelector(".right");

const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
    calculateTotal();
    //set items to LocalStorage
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    localStorage.setItem("shippingFreePrice", shippingFreePrice);
  
    //set items to sessionStorage
    //  sessionStorage.setItem("taxRate", taxRate);
    //  sessionStorage.setItem("shippingPrice", shippingPrice);
    //  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
  });



    sectionR.addEventListener("click", (event)=> {

        if(event.target.className == "fa-solid fa-minus"){
       
    
             if(event.target.nextElementSibling.innerText > 1){
                event.target.nextElementSibling.innerText--;
                calculateProducts(event.target);
                calculateTotal(event.target);
                
              
             }
             else {
                if(confirm("are you sure to delete!")){
                event.target.parentElement.parentElement.parentElement.remove();
                calculateTotal(event.target);
            }
             }
        }  

        else if(event.target.className == "fa-solid fa-plus"){
            
            event.target.previousElementSibling.innerText++;
            calculateProducts(event.target);
            calculateTotal(event.target);
        
     


        }


        else if(event.target.className == "remove"){
           event.target.parentElement.parentElement.remove();
           calculateTotal(event.target);
     
        }

        else{
            console.log("others")
        }

    
    
    });


const calculateProducts = (clickedBtn)=> {
const productDiv = clickedBtn.parentElement.parentElement;
const priceCheap = productDiv.querySelector(".oranges").innerText;
const quantity = productDiv.querySelector(".buttonspan").innerText;
const productTotal = productDiv.querySelector(".producttotal");


productTotal.innerText = (priceCheap * quantity).toFixed(2);




};

const calculateTotal = () =>{
    const total = document.getElementById("total");
    const subTotal = document.getElementById("subTotal");

    const shipping = document.getElementById("shipping");
    const tax = document.getElementById("tax");
    const totalPrices = Array.from(document.getElementsByClassName("producttotal"));
  
    let subT = 0;
    totalPrices.forEach(a=> {
        subT += Number(a.innerText);
    })
    subTotal.innerText = subT;
    const taxPrice = Number((subT * localStorage.getItem("taxRate"))).toFixed(2);

    const shippingPrice = Number(subT > 0 && subT < localStorage.getItem("shippingFreePrice")? localStorage.getItem("shippingPrice"): 0);
    tax.innerText = Number(taxPrice);
    shipping.innerText = shippingPrice;
    subTotal.innerText = subT;
    
    total.innerText = (Number(taxPrice) + shippingPrice+ subT).toFixed(2);
};

