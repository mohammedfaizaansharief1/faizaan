<html>
  <head>
    <title>To-Do List</title>
    <style>
      body {
        font-family: sans-serif;
      }
      
      h1 {
        text-align: center;
      }
      
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      
      li {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
      }
      
      li input {
        margin-right: 10px;
      }
      
      li.completed {
        text-decoration: line-through;
      }
    </style>
  </head>
  <body>
    <h1>To-Do List</h1>
    <ul id="todos">
      <li>
        <input type="checkbox" />
        <span>Buy groceries</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>Do laundry</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>Write blog post</span>
      </li>
    </ul>
    <script>
      const todos = document.querySelector("#todos");
      
      // Add a new todo item
      function addTodo() {
        const newTodo = document.createElement("li");
        const checkbox = document.createElement("input");
        const label = document.createElement("span");
        
        checkbox.type = "checkbox";
        label.textContent = "New todo item";
        
        newTodo.appendChild(checkbox);
        newTodo.appendChild(label);
        todos.appendChild(newTodo);
      }
      
      // Mark a todo item as completed
      function markCompleted(todo) {
        todo.classList.add("completed");
      }
      
      // Add an event listener for the submit button
      const form = document.querySelector("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Add a new todo item
        addTodo();
      });
    </script>
  </body>
</html>