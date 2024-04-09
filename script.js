var tasks = []; // Array para almacenar las tareas

function renderizarTareas() {
  var list = document.getElementById("myUL");
  list.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var li = document.createElement("li");
    li.textContent = task.title + " - Creada: " + task.creationTime;
    if (task.completed) {
      li.classList.add("checked");
    }
    
    var closeBtn = document.createElement("span");
    closeBtn.textContent = "\u00D7";
    closeBtn.className = "close";
    li.appendChild(closeBtn);
    
    list.appendChild(li);
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    var index = Array.prototype.indexOf.call(ev.target.parentElement.children, ev.target);
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
      tasks[index].completionTime = new Date().toISOString();
    } else {
      tasks[index].completionTime = null;
    }
  } else if (ev.target.className === 'close') {
    var li = ev.target.parentElement;
    var index = Array.prototype.indexOf.call(li.parentElement.children, li);
    tasks.splice(index, 1);
    renderizarTareas();
  }
}, false);

function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("Debes escribir algo!");
    return;
  }
  var newTask = {
    title: inputValue,
    creationTime: new Date().toISOString(),
    completed: false,
    completionTime: null
  };
  tasks.push(newTask);
  renderizarTareas();
  document.getElementById("myInput").value = "";
}

function masrapida() {
  if (tasks.length === 0) {
    alert("No hay tareas completadas.");
    return;
  }
  
  var minTime = Infinity;
  var tarearapida = "";
  
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    if (task.completed) {
      var comienzo = new Date(task.creationTime).getTime();
      var ahora = new Date(task.completionTime).getTime();
      var timer = ahora - comienzo;
      
      if (timer < minTime) {
        minTime = timer;
        tarearapida = task.title;
      }
    }
  }
  
  if (tarearapida !== "") {
    alert("La tarea más rápida completada fue: " + tarearapida);
  }
}
