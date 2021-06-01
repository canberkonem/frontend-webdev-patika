const taskInput = document.querySelector("#task")
const ekleBtn = document.querySelector("#ekleBtn")
const list = document.querySelector("#list")
const CLOSE_BTN = '<button type="button" class="btn-close float-end" aria-label="Close"></button>'
let storedTasks = localStorage.getItem("tasks") ? localStorage.getItem("tasks") : ""

if(storedTasks){
    list.innerHTML = storedTasks
}

// TOAST BEGIN

var option = {
    animation : true,
    delay: 2000,
    autohide: true
}

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})

// TOAST END

list.addEventListener("click",taskDelete)

ekleBtn.addEventListener("click", taskAdd)

list.addEventListener("click", checkTask)

window.addEventListener("keydown", function(event){
    switch(event.key){
        case "Enter": 
        taskAdd()
        break;
        default:
            return;
    }
})



function taskAdd(){
    if(taskInput.value.trim()){
    const newTask = document.createElement("li")
    newTask.innerHTML = `${taskInput.value.trim()}${CLOSE_BTN}`
    list.appendChild(newTask)
    taskInput.value = ""
    updateLocalStorage()
    toastList[0].show()
    }else{
        toastList[1].show()
        taskInput.value=""
    }
}

function taskDelete(event){
    if(event.target.classList.contains("btn-close")){
        event.target.parentNode.remove()
        updateLocalStorage()
    }
}


function checkTask(event){
    if(!event.target.classList.contains("checked")){
        event.target.classList.add("checked")
    }else{
        event.target.classList.remove("checked")
    }
    updateLocalStorage()
}

function updateLocalStorage(){
    localStorage.setItem("tasks",list.innerHTML)
}