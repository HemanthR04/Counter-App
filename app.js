console.log("Counte App")
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const counter = document.querySelector(".counter");
var count = 0 ;

function counterDecrease() {
    if(count>0){
        count = count - 1;
        counter.textContent = count;
    }
 
}

function counterReset() {
  count = 0;
  counter.textContent = count;
}

function counterIncrease() {
  count = count + 1;
  counter.textContent = count;
}


decrease.addEventListener('click',counterDecrease);
reset.addEventListener('click',counterReset);
increase.addEventListener('click',counterIncrease);