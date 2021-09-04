<template>
  <div id="cover">
    <h1>test</h1>
    <div class="card">
      <div class="welcome">
        Welcome to
      </div>
      <div class="year">
        <span>Twenty</span>
        <span>Twenty</span>
        <span>One</span>
      </div>  
    </div>
  </div>
</template>

<script>
  let h1;
  let card;

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let speed = 0.009;

  window.onload = function(){
    h1 = document.getElementsByTagName("h1")[0];
    card = document.getElementsByClassName("card")[0];
    console.log(card)

    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e){
      x = (e.clientX - window.innerWidth / 2);
      y = (e.clientY - window.innerHeight / 2);
    }
    loop();
  }

  function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    h1.innerHTML = "x: " + x + " mx: " + mx;
    // bg.style.transform = "translate("+ -(mx/8) +"px," + -(my/8) +"px)";

    //3d 텍스트 모션
    //rotate3d 속성
    card.style.transform = "translate3d("+ -(mx/2) +"px," + -(my/2) +"px,0) rotate3d(0,1,0,"+ -mx / 50 +"deg)";


    window.requestAnimationFrame(loop);
  }

export default {
  name: "Cover",
}



</script>

<style>
/* 
scoped lang="scss"
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sacramento&display=swap');

$cursive: 'Great Vibes', cursive;
$handwriting: 'Sacramento', cursive;


div{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: 5vmin;
}

#cover{
  display: grid;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: $handwriting;
  color: #fff;
  background: #333;
  background-image: 
    radial-gradient(ellipse at bottom left, rgba(0,163,203,1) 40%, rgba(0,163,203,0) 40%),
    radial-gradient(ellipse at top right, rgba(0,163,203,1) 30%, rgba(0,163,203,0) 30%),
    linear-gradient(to right, rgba(98,87,147,1) 0%, rgba(98,87,147,1) 33%, rgba(213,93,100,1) 33%, rgba(213,93,100,1) 66%, rgba(228,145,41,1) 66%);
  background-size: 50% 100%;
  
  .message{
    position: absolute;
    right:  0.5vw;
    top: 1vw;
    max-width: 60vw;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;

    a{
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid #444;
      &:hover{
        border-width: 3px;
      }
    }

  }
  
  .card {
    margin: auto;
    padding: 2em;
    border-radius: 1em;
    border: 1px solid transparentize(#fff, 0.5);
    text-shadow: 0 0 1em transparentize(#000, 0.5);
    background: transparentize(#fff, 0.8);
    backdrop-filter: blur(20px);
    transform: perspective(500px);
    transform-style: preserve-3d;
    
    .welcome {
      font-family: $handwriting;
      transform: translateZ(20px);
    }
    
    .year {
      font-family: $cursive;
      font-size: 2.5em;
      
      span {
        display: block;
        transform: translateZ(40px);
        &:nth-child(2){
          padding-left: 1em;
          transform: translateZ(60px);
        }
        &:nth-child(3){
          padding-left: 2em;
          transform: translateZ(80px);
        }
      }
      
    }
    
  }
  
} */
</style>