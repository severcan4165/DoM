let randomNumber = Math.round(Math.random()*100);
console.log(randomNumber)
let score = 10;
let topScore =0;

document.querySelector(".check-btn").addEventListener("click", ()=> {
    const guessInput = Number(document.querySelector(".guess-input").value);
    let msg = document.querySelector(".msg");
    const body = document.querySelector("body");
    const scr = document.querySelector(".score");
    const topscr = document.querySelector(".top-score");

    if(!guessInput){
      msg.innerText ="please enter a number";
    }
    else if(randomNumber === guessInput){
        msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
        // document.querySelector("body").style.background ="green";
        body.className = "bg-success";
        document.querySelector(".secret-number").textContent=randomNumber;
        scr.innerText = score;
        document.querySelector(".check-btn").disabled = true;

        if(score>topScore){
            topScore=score;
            topscr.innerText = topScore;
        }
    }
    else{
        if(score>1){
            score--;
            guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
        
       
        scr.innerText =score;
        }else{
            msg.innerText="You lost";
            document.querySelector(".check-btn").disabled = true;
            scr.innerText =--score;
            body.className = "bg-danger";
            document.querySelector(".secret-number").textContent=randomNumber;


        }
    }

});



document.querySelector(".again-btn").addEventListener("click", () => {
    score =10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber);
    document.querySelector(".secret-number").textContent = "?";
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText = `Starting..`;

} )