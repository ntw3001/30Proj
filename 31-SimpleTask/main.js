const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let taskIndex = 1;

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskValue = taskInput.value.trim();


  if (taskValue) {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskIndex} - ${taskValue}`;

    taskItem.onclick = () => {
      taskItem.classList.toggle('completed');
    };

    taskList.appendChild(taskItem);
    taskItem.classList.add ("task-item");
    taskInput.value = '';
    taskIndex++;
  } else {
    alert('Please enter a task');
  }
});
