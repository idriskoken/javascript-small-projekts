const clock = document.getElementById("clock");
const seconddiv = document.getElementById("second");

const par = document.createElement('p');

function createAClock(){
  const timeNow = new Date();
  let h = timeNow.getHours();
  let m = timeNow.getMinutes();
  let s = timeNow.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = h + ":" + m + ":" + s;

}

const checkTime = (i) => {
  if(i < 10) {
    i = "0" + i;
  };
  return i;
}

setInterval(createAClock, 1000);
