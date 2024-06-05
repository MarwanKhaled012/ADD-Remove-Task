function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", toggleSelected);
    taskItem.innerHTML += `
        <button onclick="changeBackground(this)">Done</button>
            <button onclick="removeTask(this)">Delete</button>
        `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function toggleSelected() {
  this.classList.toggle("selected");
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}

function changeBackground() {
  document.classList.add("green-background");
  var changeBackgroundBtn = document.querySelector("button:last-of-type");
  changeBackgroundBtn.parentNode.removeChild(changeBackgroundBtn);
}
