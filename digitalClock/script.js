let clockDiv = document.querySelector(".clock");

const clock = ()=>{
    
    let date = new Date();
    let time = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds() +":"+ date.getMilliseconds();
    clockDiv.innerHTML = time;

}

setInterval(clock,100);