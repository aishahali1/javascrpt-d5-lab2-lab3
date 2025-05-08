let greenLight = document.getElementById("goLight");
let YellowLight = document.getElementById("slowLight");
let RedLight = document.getElementById("stopLight");
let stopBtn = document.getElementById("stopButton");
let YellowBtn = document.getElementById("slowButton");
let GoBtn = document.getElementById("goButton");


GoBtn.addEventListener("click", ()=>{
    greenLight.style.backgroundColor="green";
})

stopBtn.addEventListener("click", ()=>{
    RedLight.style.backgroundColor="red";
})

YellowBtn.addEventListener("click", ()=>{
    YellowLight.style.backgroundColor="yellow";
})


