const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', e => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
  input.focus();
});
