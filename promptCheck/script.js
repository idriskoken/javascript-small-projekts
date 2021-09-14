const btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
  let person = prompt("Please enter your name!!", "");
  if(person == null || person =='') {
    btn.innerHTML = "Please enter an appropriate Name!!!";
  }else{
    btn.innerText = person + " welcome Home:))";
  }
});


