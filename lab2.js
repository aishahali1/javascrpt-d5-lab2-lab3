let tvScreen = document.getElementById('screen');
let ChannelContainer = document.getElementsByClassName("channels-container");
let channelOne = document.getElementById("one");
let channelTwo = document.getElementById("two");
let channelThree = document.getElementById("three");
let channelFour = document.getElementById("four");
let channelFive = document.getElementById("five");
let channelSix = document.getElementById("six");
let channelSeven = document.getElementById("seven");
let channelEight = document.getElementById("eight");
let channelNine = document.getElementById("nine");
 
channelOne.addEventListener("click", ()=>{
 let image1=tvScreen.getElementsByTagName('img');
image1.src=`url("https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg")`;
})


channelTwo.addEventListener("click", ()=>{
 let image2=tvScreen.getElementsByTagName("img");
image2.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg"
})


channelThree.addEventListener("click", ()=>{
 let image3=tvScreen.getElementsByTagName("img");
image3.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg"
})




channelFour.addEventListener("click", ()=>{
 let image4=tvScreen.getElementsByTagName("img");
image4.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg"
})


channelFive.addEventListener("click", ()=>{
 let image5=tvScreen.getElementsByTagName("img");
image5.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg"
})


channelSix.addEventListener("click", ()=>{
 let image6=tvScreen.getElementsByTagName("img");
image6.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg"
})


channelSeven.addEventListener("click", ()=>{
 let image7=tvScreen.getElementsByTagName("img");
image7.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg"
})


channelEight.addEventListener("click", ()=>{
 let image8=tvScreen.getElementsByTagName("img");
image8.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg"
})


channelNine.addEventListener("click", ()=>{
 let image9=tvScreen.getElementsByTagName("img");
image9.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg"
})