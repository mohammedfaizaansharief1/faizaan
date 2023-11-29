function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    const editButton = document.createElement("button");
    editButton.textContent = "✎";
    editButton.onclick = function () {
      const newText = prompt("Edit task:", li.textContent);
      if (newText !== null && newText.trim() !== "") {
        li.textContent = newText.trim();
        li.appendChild(deleteButton);
        li.appendChild(editButton);
      }
    };

    li.appendChild(editButton);
    taskList.appendChild(li);

    taskInput.value = "";

    // taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}
