var move = document.getElementById("btn1")

// BUTTON 1 FUNCTIONS
 
 document.getElementById("btn1").onclick = function (){
  var i = Math.floor(Math.random()*300)+10;
  var j = Math.floor(Math.random()*150)+120;
   
   move.style.top=i+"px"
   move.style.left=j+"px"
 }

// BUTTON 2 FUNCTIONS

  document.getElementById("btn2").onclick = function(){
    document.getElementById("h4").innerHTML = "Love mo pa ako diba?🥺";
    
    move.style.top="114px"
    move.style.left="170px"
   
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn3").style.display = "block"
    
    
   
}

// BUTTON 3 FUNCTIONS  ||  RAINING HEART

const yes = document.getElementById("btn3").onclick = function(){
  
  var audio = document.getElementById("music");
   audio.play();
   document.getElementById("h4").innerHTML = "ILOVEYOUUMOREEE!!😘";
 
  
  document.getElementById("btn2").style.visibility = "hidden"
  document.getElementById("btn3").style.visibility = "hidden"
  document.getElementById("picture").style.display = "block"
  document.getElementById("cat1").style.display = "block"
  document.getElementById("cat2").style.display = "block"
  
  
  function heart(){
  const heart = document.createElement("div")
  heart.classList.add("heart");
  heart.style.left = Math.random()*100 + "vw"
  heart.style.animationDuration = Math.random()*2 + 3;
  heart.innerText = "♥️";
  document.body.appendChild(heart);
  setTimeout(()=>{
    heart.remove();
  },3000)
}
setInterval(heart,100)
}