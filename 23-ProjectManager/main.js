const form = document.getElementById("form");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");

form.onsubmit = (e) => {
  e.preventDefault();
  addTask();
}

function addTask(task) {
  let taskValue = input.value;
  console.log(taskValue);

  task ? (taskValue = task.text) : task;

  taskValue ? displayTask() : taskValue;


  function displayTask() {
    const newTask = document.createElement("li");
    newTask.innerHTML = taskValue;

    newTask.onclick = () => {
      newTask.classList.toggle("completed");
      if (newTask.classList.contains("completed")) {
        newTask.innerHTML = `<span>${taskValue} &#10004;</span>`;
        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "&#10060;";
        deleteBtn.classList.add("delete_task");
        deleteBtn.onclick = () => deleteTask(newTask);
        newTask.appendChild(deleteBtn);
      } else {
        newTask.innerHTML = `${taskValue}`;
      }
    };

    taskList.appendChild(newTask);
    input.value = "";
  }
}

function deleteTask (task) {
  task.remove();
}
