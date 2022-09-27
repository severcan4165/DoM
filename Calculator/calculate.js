/*
1- container classına click eventi tanımlayıp capture yap
2- tıklanan şey numara ise numaraları yanyana yazdır(.dahil)
3- tıklanan şey işlemlerden (artı ise)
    ==> ekrana artı yazdır ve önceki girilen rakamları bir dizinin ilk elemanı olarak ata
        ==>artıya tıklandıktan sonra sadece rakamlara tıklanmalı, değil yöntemiyle controlu yap,
        ==> tıklanan rakamları yanyana yaz
4- eşittire basılırsa       
    ==> dizideki sayıları topla, sonra diziyi boşa çevir



*/

const container = document.querySelector(".container");
const result = document.querySelector(".result")
let dizi = [];
let sonuc = 0;
let sonuc2;
let sayilar = "";

container.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("num")){  
           
        result.innerHTML += e.target.innerText;
        sayilar += e.target.innerText; 
    }
    
    else if(e.target.classList.contains("islem")){
 
       
           if(e.target.id == "toplama") {
                dizi.push(sayilar)
                sonuc = topla()
                console.log(dizi,sonuc)
                sayilar="";
                result.innerHTML += " + "
               
            }
            else if(e.target.id == "cikarma") {
                dizi.push(sayilar)
                sonuc = cikar()
                console.log(dizi,sonuc)
                result.innerHTML += " - "
                sayilar ="";   
            }            
            else if(e.target.id == "carpma"){
                dizi.push(sayilar)

                result.innerHTML += " x "
                sayilar ="";   
            } 
            else if(e.target.id == "bolme"){
                dizi.push(sayilar)

                result.innerHTML += " / "
                sayilar ="";   
            }     
            else if(e.target.id == "negatif"){
                result.innerHTML = "-" + result.innerHTML;
            } 

            }
    else if(e.target.classList.contains("equal")){
            result.innerHTML = sonuc;
                // dizi.push(sayilar);

                // if(e.target.id == "toplama"){
                //     topla(dizi);
                // }
                // else if(e.target.id == "cikarma"){
                //     cikar(dizi);
                // }
                // else if(e.target.id == "carpma"){
                //     carp(dizi);
                // }
                // else if(e.target.id == "bolme"){
                //     bol(dizi);
                // }
              
            console.log(dizi)
    }

})
 
function topla() {

    let i = dizi.length-1;
    sonuc +=Number(dizi[i]);
        
  
  return sonuc;
    // result.innerHTML = sonuc;
}
function cikar() {
    let i = dizi.length-1;
    sonuc -=Number(dizi[i]);
        
  
  return sonuc;
}
function carp() {

    let i = dizi.length-1;
    sonuc = 1;
    sonuc *=Number(dizi[i]);
        
  
  return sonuc;
}
function bol() {

    let i = dizi.length-1;
    sonuc = 1;
    sonuc /=Number(dizi[i]);
        
  
  return sonuc;
}
  
  
//   function cikar() {
  
//     let  sayi1 = document.getElementById("input1").value;
//     let  sayi2 = document.getElementById("input2").value;
  
//       let sayi3 = parseFloat(sayi1) - parseFloat(sayi2);
  
//       document.getElementById("sonuc").innerHTML =
  
//       sayi3.toFixed(3);
//   }
  
  
//   function carp() {
  
//     let  sayi1 = document.getElementById("input1").value;
//     let  sayi2 = document.getElementById("input2").value;
  
//       let sayi3 = parseFloat(sayi1) * parseFloat(sayi2);
  
//       document.getElementById("sonuc").innerHTML =
  
//       sayi3.toFixed(3);
//   }
  
  
//   function bol() {
  
//     let  sayi1 = document.getElementById("input1").value;
//     let  sayi2 = document.getElementById("input2").value;
  
//       let sayi3 = parseFloat(sayi1) / parseFloat(sayi2);
  
//       document.getElementById("sonuc").innerHTML =
  
//       sayi3.toFixed(3);
//   }




 
        // if(dizi.length<1){
        //     switch (e.target) {
        //         case toplama: dizi.push(result.innerHTML)
        //                     result.innerHTML += " + "
                 
                    
        //             break;
        //         case cikarma: dizi.push(result.innerHTML)
        //         result.innerHTML += " - "
                    
        //             break;
        //         case carpma: dizi.push(result.innerHTML)
        //         result.innerHTML += " x "
                    
        //             break;
        //         case bolme:dizi.push(result.innerHTML) 
        //         result.innerHTML += " / "
                    
        //             break;
        //         case negatif: result.innerHTML = "-" +result.innerHTML
                    
        //             break;
            
        //         default:
        //             break;
        //     }

        // }