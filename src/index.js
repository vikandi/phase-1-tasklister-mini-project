document.addEventListener("DOMContentLoaded", () => {
  // your code here

const form = document.getElementById("create-task-form");

form.addEventListener("submit", (event) => {
  
  event.preventDefault();

  const task = event.target.elements["new-task-description"].value;

  buildToDo(task);

  event.target.reset();
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const taskList = document.getElementById("tasks");
  taskList.appendChild(li);
}

});
