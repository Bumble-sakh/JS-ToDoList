var submitBtn = document.querySelector('.btn');
var taskInput = document.querySelector('input');
var numDo = document.querySelector('.count-todo');
var numDone = document.querySelector('.count-done');
var todoList = document.querySelector('.mask-list');
var completeList = document.querySelector('.complete-list');

function addRemoveBtnEvent(){
    var removeBtn = document.querySelectorAll('.btn-remove');
    for(var i = removeBtn.length; i--;){
        removeBtn[i].addEventListener('click', delTask);
    }
}

function addCheckboxEvent(){
    var checkbox = document.querySelectorAll('.checkbox');
    for(var i = checkbox.length; i--;){
        checkbox[i].addEventListener('click', switchTask);
    }
}

function switchTask(event){
    var countTodo = Number(numDo.textContent);
    var countDone = Number(numDone.textContent);

    var li = event.target.parentElement.parentElement;
    var checked = event.target.checked;

    if(checked){
        completeList.prepend(li);
        numDone.textContent = ++countDone;
        numDo.textContent = --countTodo;

        addRemoveBtnEvent();
        addCheckboxEvent();
    }
    else{
        todoList.prepend(li);
        numDone.textContent = --countDone;
        numDo.textContent = ++countTodo;

        addRemoveBtnEvent();
        addCheckboxEvent();
    }
}

function addTask(){
    var task = taskInput.value;
    if(task == ''){
        return;
    }
    
    var countTodo = Number(numDo.textContent);     
    var li = document.createElement('li');

    li.innerHTML = '<div><input type="checkbox" class="checkbox"><span>' + task + '</span></div><button class="btn-remove">Remove</button>';   
    todoList.prepend(li);
    numDo.textContent = ++countTodo;

    taskInput.value = '';
    addRemoveBtnEvent();
    addCheckboxEvent();
}

function delTask(event){
    var li = event.target.parentElement;
    var taskCount = li.parentElement.previousElementSibling.children[1];
    var countTodo = Number(taskCount.textContent);

    li.remove();

    taskCount.textContent = --countTodo;
}

addRemoveBtnEvent();
addCheckboxEvent();

submitBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addTask();
    }
});