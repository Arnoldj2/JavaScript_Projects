



/* this function gets the task from the input */
function get_todos() {

/*this creats an array of task that are inputed*/
var todos = new Array;

/*this pulls teh task that was saved in the web browswer memory*/
var todos_str = localStorage.getItem('todo');

/* if the input is not null then JSON.parse will communicate with the web browers to make the task a javascipt object . */
if (todos_str !== null) {

    todos = JSON.parse(todos_str);

    }
    return todos;
}

/* this function adds the inputed task to the get_todos function array*/
function add() {

    /* this takses the inputed task and created a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* this adds a new task at the end of the array*/
    todos.push(task);

    /* this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "" ;
    show();

    return false;
}

/*this fucntions keeps the tasks permanetely displayed on the screen */

function show() {
    /* this sets the task that was retrieved as a variable */
    var todos = get_todos();

    /*this set s up each task as an unordered list*/
    var html = '<ul>';

    /*this displays a task to the list in order that it is inputed */

    for ( var i = 0; i < todos.length; i++)  {
        /* this also displays the task as a list and creates the buttons with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="" + i + "">x</button></li>';
    };
    html += '</ul>';
    /*this displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    
}

/*this displays the inputed task when the "add item" button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs duplsated permantal on the screen*/
show();

/* this creates the functionality of removing a todo item from the array */

function remove() {

    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the show() how to display a removed item on the screen */
    show();

    return false;


}

/* This tells the browser how to display the todo array after an item has been removed */
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++)  {
    buttons[i].addEventListener('click', remove);

};
