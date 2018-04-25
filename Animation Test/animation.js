var imageSelected = false;
var easterCount = 0;
var isWalking = false;


if(document.readyState === "complete") {
  document.getElementById("play").innerHTML = "Click Image to Play"
}
else {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("play").innerHTML = "Click Image to Start"
  }, false);
}

function animateImage(e){
  imageSelected = !imageSelected;
  easterCount++;

  document.getElementById("clicks").innerHTML = easterCount == 0?"" : "Clicks: "+easterCount+" / 7"
  document.getElementById("play").innerHTML = easterCount == 0?"Thanks!" : ""

  if(!isWalking){
    walk();
    isWalking = true;
  }

  if(easterCount > 3){
    if(imageSelected){
      TweenMax.to(".profileImg", 1, {x:0, rotation:0}, 0.5);
    }
    else{
      TweenMax.to(".profileImg", 1, {x:-350, rotation:-360}, 0.5);
    }

    if(easterCount > 6){
      easterCount = -1;
    }
  }
  else{
    if(imageSelected){
      TweenMax.to(".profileImg", 1, {y:350, ease:Bounce.easeOut}, 0.5);
    }
    else{
      TweenMax.to(".profileImg", 1, {y:0, ease:Back.easeIn.config(1)}, 0.5);
    }
  }
}

function walk(){
  TweenMax.to(".guy", 3, {left:682, repeat:1,  yoyo:false, onComplete:myFunction, repeatDelay:0.5, ease:Linear.easeNone});

  function myFunction() {
    TweenMax.set(".guy", {left:-182});
    TweenMax.to(".guy", 3, {left:159});
  }
}
