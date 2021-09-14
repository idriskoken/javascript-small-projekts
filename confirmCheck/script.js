const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
  
  if(confirm("Press a Button")) {
    btn.innerText = "You pressed OK..";
    
  }else{
    btn.innerText = 'You pressed CANCEL!!!';
  }
})

function myFunktion() {
  if(confirm("Press a Button")) {
    btn.innerText = "You pressed OK..";
    
  }else{
    btn.innerText = 'You pressed CANCEL!!!';
  }
}
