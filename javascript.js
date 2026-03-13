// Select elements
const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");

// Add task when button clicked
addBtn.addEventListener("click", addTask);

// Add task when pressing Enter
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add task
function addTask() {

  const taskText = taskInput.value;

  if (taskText === "") {
    return;
  }

  createTaskElement(taskText);

  taskInput.value = "";
}

// Function to create a task
function createTaskElement(taskText) {

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task completed
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // prevents triggering li click
    li.remove();
  });

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

}