//variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const ul = document.querySelector(".list-group");
const clearBtn = document.querySelector(".clear-btn");

//Adding task function
const addTask = (e) => {
    if(taskInput.value === "") {
        alert("Add a task!");
    }
    else {
        //creating an elements
        const li = document.createElement("li");
        const a = document.createElement("a");
        const i = document.createElement("i");
        //adding a classes
        li.className = "list-group-item";
        a.className = "delete-item";
        i.className = "fas fa-trash";
        //creating a text nodes
        let text = document.createTextNode(taskInput.value);
        //append elements to relevent elements
        li.appendChild(text);
        a.appendChild(i);
        li.appendChild(a);
        ul.appendChild(li);
    }
    //reseting input value after task has been added
    taskInput.value = "";

    //preventing the default behavior of the form
    e.preventDefault();
}
form.addEventListener("submit", addTask);

//Removing task function
const removeTask = (e) => {
    if(confirm("Are you sure! Delete Item?"))
    if(e.target.parentElement.classList.contains("delete-item")) {
        e.target.parentElement.parentElement.remove();
    }
}
ul.addEventListener("click", removeTask);

//Clearing all tasks function 
function deleteAll() {
    if(confirm("Are you sure! Delete All"))
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}
clearBtn.addEventListener("click", deleteAll);
