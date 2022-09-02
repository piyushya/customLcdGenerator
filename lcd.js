/*

      Created By Piyush Yadav

    ___ ____  _ _   _  ___  _  _
   | _ \| \ \/ | | | |/ __)| || |
   | __/| |\  /| |_| |\___ | __ |
   |_|  |_| |_| \___/  __ \|_||_|
                      (___/

 */
let block = 1;
let row = 1;
let pix = 1;
let pixBR;

load = function(){
    pixBR = document.getElementsByTagName("table")[block-1].rows[row-1].cells[pix-1];
    updateMat();
}

window.onscroll = function() {infoSH()};

function infoSH() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementsByClassName("info")[0].style.left = "-35px";
  }
  else {
 document.getElementsByClassName("info")[0].style.left = "10px";
  }
}

setBlock = function(n){
    block = n;
    load();
    if(pixBR.style.backgroundColor == "blue"){
        pixBR.style.backgroundColor = "lightgreen";
        updateMat();
        return;
    }
    pixBR.style.backgroundColor = "blue";
    updateMat();
}
setRow = function(n){
    row = n;
    load();
}
setPix = function(n){
    pix = n;
    load();
}
updateMat = function(){
  val1 = 0;
  val2 = 4;
  for(c = 0; c < 4; c++){
    for(a = 0; a < 8; a++){
        for(b = 0; b < 5; b++){
            if( document.getElementsByTagName("table")[val1].rows[a].cells[b].style.backgroundColor == "blue"){
                document.getElementsByTagName("table")[val2].rows[a].cells[b+1].innerHTML = "1";
            }
            else{
                document.getElementsByTagName("table")[val2].rows[a].cells[b+1].innerHTML = "0";
            }
        }
    }
    val1+=1;
    val2+=1;
  }
}
info = function(){
    swal('How To use',
         'You can create Your custom shapes, characters etc. by clicking on the green boxes. Clicking again on the box will deselect it. The code generated is for 16×2 LiquidCrystal displays connected with Arduino. You can create characters and shapes on 2×2 block Rather than a single block that most of the generators on the internet provide.',
         'info');
}