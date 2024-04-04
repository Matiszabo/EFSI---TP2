var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    li.dataset.creationTime = new Date().toISOString(); // Add creation time attribute
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function masrapida() {
  var listItems = document.getElementsByTagName("li");
  var minTime = Infinity;
  var tarearapida = "";
  for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i];
    if (!item.classList.contains("checked")) {
      var comienzo = new Date(item.dataset.creationTime).getTime();
      var ahora = new Date().getTime();
      var timer = ahora - comienzo;
      if (timer < minTime) {
        minTime = timer;
        tarearapida = item.textContent;
      }
    }
  }
  if (tarearapida !== "") {
    alert("La tarea mas rapida completada fue: " + tarearapida.trim());
  } else {
    alert("No hay tareas completadas.");
  }
}
