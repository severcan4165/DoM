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
let operand = [];
let sonuc = 0;
let sonuc2;
let sayilar = "";
let flag =false;
container.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("num")){  
           
        result.innerHTML += e.target.innerText;
        sayilar += e.target.innerText; 
    }
    
    else if(e.target.classList.contains("islem")){
 
       
           if(e.target.id == "toplama") {
                flag ? (dizi[0]=0):dizi.push(sayilar);
                
                operand.unshift("+");
                sonuc = topla()
                console.log(dizi,sonuc)
                sayilar="";
                result.innerHTML += " + "
               
            }
            else if(e.target.id == "cikarma") {
                if(dizi.length<1){
                    flag ? (dizi[0]=sonuc):dizi.push(sayilar);
                 
                    operand.unshift("-");
                    sonuc = sayilar;
                    result.innerHTML += " - "
                    sayilar ="";
                }
                else{
                    flag ? (dizi[0]=sonuc):dizi.push(sayilar);

                
                    operand.unshift("-");
                    sonuc = cikar()
                    result.innerHTML += " - "
                    sayilar ="";
                }
                
            }            
            else if(e.target.id == "carpma"){
                if(dizi.length<1){
                    flag ? (dizi[0]=1):dizi.push(sayilar);

                    operand.unshift("x");
                    sonuc = sayilar;
                    result.innerHTML += " x "
                    sayilar ="";
                }
                else{
                    flag ? (dizi[0]=1):dizi.push(sayilar);

                    operand.unshift("x");
                    sonuc = carp()
                    result.innerHTML += " x "
                    sayilar ="";
                } 
            } 
            else if(e.target.id == "bolme"){
                if(dizi.length<1){
                    dizi.push(sayilar)
                    operand.unshift("/");
                    sonuc = sayilar;
                    result.innerHTML += " / "
                    sayilar ="";
                }
                else{
                    dizi.push(sayilar)
                    operand.unshift("/");
                    sonuc = bol()
                    result.innerHTML += " / "
                    sayilar ="";
                } 
            }     
            else if(e.target.id == "negatif"){
                result.innerHTML = "-" + result.innerHTML;
            } 

            }
    else if(e.target.classList.contains("equal")){
           
                dizi.push(sayilar);
                switch(operand[0]){
                    case "+": topla()
                    break;
                    case "-": cikar()
                    break;
                    case "x": carp()
                    break;
                    case "/": bol()
                    break;
                }
           
        result.innerHTML = sonuc;
        dizi = [];
        operand = [];
        sayilar =sonuc;
        flag =true;
    }

})
 
function topla() {

    let i = dizi.length-1;
    sonuc +=Number(dizi[i]);
        
  
  return sonuc;

}
function cikar() {
    let i = dizi.length-1;
    sonuc -= Number(dizi[i]);
        
  
  return sonuc;
}
function carp() {

    let i = dizi.length-1;
  
    sonuc *= Number(dizi[i]);
        
  return sonuc;
}
function bol() {

    let i = dizi.length-1;

    sonuc /= Number(dizi[i]);
        
  
  return sonuc;
}
  
  


        
// const container = document.querySelector(".container");
// const previous = document.querySelector(".previous")
// const operator = document.querySelector(".operator")
// const current = document.querySelector(".current")
