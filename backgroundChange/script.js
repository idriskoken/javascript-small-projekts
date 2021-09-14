const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
  const change = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  document.body.style.background = change;
})
