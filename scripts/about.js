let line = document.querySelector("#about-paragraph-id")[0];

function animateLine(){
  const lineLength = line.width;
  const lineOffset = 0;
  // line.style.transition = "width 1s";

  console.log( lineOffset)

  if(lineOffset < lineLength){
    lineOffset++;
    line.style.width = lineOffset + "px";
    setTimeout(animateLine, 10);
  }
}
animateLine()