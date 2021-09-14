const input = document.getElementById("input");
const form = document.getElementById('form');
const todosUl = document.getElementById('tools');

JSON.parse(localStorage.getItem("todos"));
const todosArray = [];


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerHTML = todoText;
    todosArray.push(todoText);
    todosUl.appendChild(todoEl);
    input.value = '';
    todosArray.length > 0 ? todosArray.map(w => console.log(w)) : console.log('No storage gefunden');
    localStorage.setItem('todos', JSON.stringify(todosArray))
  }
  const a =document.createElement('p');

  a.innerHTML = "<strong>" + todosArray.map(w => w) + "</strong>";
  todosUl.appendChild(a);
})