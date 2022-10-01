const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const parts = document.querySelector(".parts");


let part;
// console.log(hh, mm, ss);



const showTime = ()=> {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    if(hh>=12){
        part ="P.M"
        hh = hh - 12;
    }
    else if(hh<12){
        part = "A.M"
    }
    if(mm<10){
        minutes.innerHTML ="0" + mm + " : ";

    }
    else{
        minutes.innerHTML =" " + mm + " : ";

    }
    if(hh<10){
        hours.innerHTML = "0" + hh + " : ";

    }
    else{
        hours.innerHTML = hh + " : ";

    }
    if(ss < 10){
        seconds.innerHTML ="0" + ss;

    }
    else{
        seconds.innerHTML =ss;

    }
    parts.innerHTML = part;
}
setInterval((showTime),1000);


