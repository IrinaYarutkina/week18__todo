function createTasks() {
    let elemInput = document.getElementById("ToDo__input");
    let elem = elemInput.value;

    if (!elem) return;

    let taskElem = document.getElementById("ToDo__tasks");

    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let taskText = document.createElement("div");
    taskText.classList.add("task__text");
    taskText.innerHTML = elem; 

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Очистить";
    deleteButton.classList.add("delete__button")
    deleteButton.onclick = function () {
        taskElem.removeChild(newTask);
};
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    taskElem.appendChild(newTask);

    elemInput.value = "";
}
document.getElementById("ToDo__button").addEventListener("click", createTasks); 