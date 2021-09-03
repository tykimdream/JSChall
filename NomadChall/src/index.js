const back = document.querySelector("body");

function windowResized() {
  const innerwidth = window.innerWidth;
  const bluecolor = "bluecolor";
  const skybluecolor = "skybluecolor";
  const yellowcolor = "yellowcolor";

  if(innerwidth > "800"){
    back.classList.remove("bluecolor");
    back.classList.remove("skybluecolor");
    back.classList.add("yellowcolor");    
  }
  else if (innerwidth < "800" && innerwidth > "500"){
    back.classList.remove("yellowcolor");
    back.classList.remove("bluecolor");
    back.classList.add("skybluecolor")
  }
  else if(innerwidth < "500"){
    back.classList.remove("yellowcolor");
    back.classList.remove("skybluecolor");
    back.classList.add("bluecolor");
  }
}

window.addEventListener("resize", windowResized);
