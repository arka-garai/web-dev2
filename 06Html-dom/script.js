let todoCount = 1;
function addTodo() {
  //grab the input box and get the value
  const element = document.getElementById("todoInput");
  const todo = element.value;
  //if no task present
  if (todo === "") {
    return;
  }
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("id", "todo-" + todoCount);

  const spanTodo = document.createElement("span");
  spanTodo.innerHTML = todo;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.setAttribute("onclick", "deleteTodo(" + todoCount + ")");

  todoDiv.appendChild(spanTodo);
  todoDiv.appendChild(deleteBtn);

  document.getElementById("todos").appendChild(todoDiv);
  //clear the input
  element.value = "";
  todoCount++;
}
function deleteTodo(todoCount) {
  const element = document.getElementById("todo-" + todoCount);
  // element.parentElement.removeChild(element);
  document.getElementById("todos").removeChild(element);
}
