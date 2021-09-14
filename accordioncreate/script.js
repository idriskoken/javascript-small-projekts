const panel = document.getElementById('panel');
const  flip = document.getElementById('flip');

function clickToOpen(){

  if(panel.style.display !== "none"){
    panel.style.display = "none"
  }
  else{
    panel.style.display = "block"
  }
  console.log('Geklickt schon!!!');
}