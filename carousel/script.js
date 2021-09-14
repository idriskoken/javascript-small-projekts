
const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let i = 0;

function run() {
  i++;
  if(i > img.length - 1) {
    i = 0;
  }

  imgs.style.transform = `translateX(${-i * 500}px)`;

}
setInterval(run, 2000);