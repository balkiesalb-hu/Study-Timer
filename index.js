
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const stopButton = document.getElementById("stop-btn");


let inter =null;
let s=0 ; 
let m=0 ; 
let h=2 ; 

function startTimer(){
    if(inter !== null ){
        alert("the timer is already running 🤨😒!");
        return ;
    }
    inter = setInterval(
    ()=>{
    if(s>0){
       s--;
       secondEl.textContent=s;
    }
    if(s ==0 ){
        if( m==0 ){
            if(h==0){
                clearInterval(inter);
            }else if(h>0){
                h--;
                hourEl.textContent=h;
                m=59;
                minuteEl.textContent=m;
                s=60;
                secondEl.textContent=s;
            }
        }else if(m>0){
            m--;
            minuteEl.textContent=m;
            s=60;
            secondEl.textContent=s;
        }
    }
},1000);

}

function stopTimer(){
    if(inter !== null){
        clearInterval(inter);
        inter =null;
    }
}

function restartTimer(){
    stopTimer();
    s = 0;
    secondEl.textContent = s;
    m = 0;
    minuteEl.textContent = m;
    h = 2;
    hourEl.textContent = h;
    startTimer();
}

startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
restartButton.addEventListener("click",restartTimer);