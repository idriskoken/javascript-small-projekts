const btnRemove = document.getElementById('box1');
const btnHide = document.getElementById('box2');
const btnReset = document.getElementById('box3');

function removeElement() {
  btnRemove.style.display = 'none';
}

function changeVisibility() {
  btnHide.style.visibility = 'hidden';
}

function resetElement() {
  btnRemove.style.display = '';
  btnHide.style.visibility = 'visible';
}