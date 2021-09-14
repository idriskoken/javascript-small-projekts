import 'regenerator-runtime/runtime';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getElementsTodo = async () => {
try {
  const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
  const data = response.data;
  console.log("GET the todo lists: ", data);
  return data;
} catch (error) {
  console.error(error);
}

}

const createTodoList = item => {
  const todoItem = document.createElement('li');
  todoItem.id = item.id;
  todoItem.appendChild(document.createTextNode(item.title));
  todoItem.onclick = async event => await removeTodoElement(event, todoItem);
  return todoItem;
}

const updateTodoLists = todoItemss => {
  const todoListe = document.querySelector('ul');

  if(Array.isArray(todoItemss) && todoItemss.length > 0) {
    todoItemss.map(todo => {
      todoListe.appendChild(createTodoList(todo));
    })
  }else if(todoItemss) {
    todoListe.appendChild(createTodoList(todoItemss));
  }
};

const main = async () => {
  updateTodoLists(await getElementsTodo());
};

main();

const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const title = document.querySelector('#new-todos__title').value;

  const todo = {
    userId: 1,
    title: title,
    completed: false
  };

  const submitTodoItem = await addTodoItem(todo);
  updateTodoLists(submitTodoItem);
  document.querySelector('#new-todos__title').value = '';
});

export const addTodoItem = async todo => {
  try {
    const response = await axios.post(`${BASE_URL}/todos`, todo);
    const newTodoItem = response.data;

    console.log(`Added a new Todo!`, newTodoItem);

    return newTodoItem;
  } catch (errors) {
    console.error(errors);
  }
};

export const deleteTodoItem = async id => {
  try {
    const response = await axios.delete(`${BASE_URL}/todos/${id}`);
    console.log(`Deleted Todo ID: `, id);

    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

const removeTodoElement = async (event, element) => {
  event.target.parentElement.removeChild(element);
  const id = element.id;

  await deleteTodoItem(id);
};
