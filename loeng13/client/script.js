const todoListHtml = document.querySelector('#todo-list');
const todoInputHtml = document.querySelector('#todo-input');

todoInputHtml.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') {
      addTodo();
  }
})


let uusId = 0;
let todoItems = [
  {
    id:999,
    isChecked:false,
    text:"todo1"
  }
];

function renderTodos() {
  todoListHtml.innerHTML = '';

  for (let i = 0; i < todoItems.length; i++) {
    let checkedString = '';
    if (todoItems[i].isChecked) {
      checkedString = 'checked'
    }
    todoListHtml.innerHTML += `
      <li>
        <span class="${checkedString}">${todoItems[i].text}</span>
        <div>
        <input
          type="checkbox"
          onclick="toggleTodo(${todoItems[i].id})"
          ${checkedString} 
        />
          <a onclick="deleteTodo(${todoItems[i].id})">&#128686;</a>
          </div>
          </li>
    `
  }
}

renderTodos();

function addTodo() {
  if (todoInputHtml.value == '') {
    console.log('input on tühi!');
    return;
  }

  todoItems.push({
    id: uusId,
    isChecked: false,
    text: todoInputHtml.value,
  });

  uusId++;
  renderTodos();
  todoInputHtml.value = '';
}

function toggleTodo(todoId) {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == todoId) {
      todoItems[i].isChecked = !todoItems[i].isChecked;
      break;
    }
  }
  renderTodos();
}
function deleteTodo(todoId){
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].id == todoId) {
      todoItems.splice(i,1);
      break;
    }
  }

  renderTodos();
}
