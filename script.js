let newTask = document.querySelector("#new-task");
let addTaskBtn = document.querySelector("#addTask");
let toDoUl = document.querySelector(".todo-list ul");
let completeUL = document.querySelector(".complete-list ul");

function addTask() {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let label = document.createElement("label");
  label.innerText = newTask.value;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  toDoUl.appendChild(listItem); //it will add tasks in incomplete tasks section

  newTask.value="";

  handleInCompleteItem(listItem);

}
function checkBoxClick() {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button"); //<button>
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  console.log(deleteBtn);
  console.log("latest", listItem);

  let checkboxIn = listItem.querySelector("input[type=checkbox]");
  checkboxIn.remove();
  console.log("update", listItem);

  completeUL.appendChild(listItem);
  handelCompleteItem(listItem);
}

function handleInCompleteItem(listItem) {
  let checkboxIn = listItem.querySelector("input[type=checkbox]");
  checkboxIn.onchange = checkBoxClick;
}
let handelCompleteItem = (listItem) => {
  let deleteButton = listItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonPress;
};

function deleteButtonPress() {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);

}

addTaskBtn.addEventListener("click", addTask);

