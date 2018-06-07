var context = document.getElementById('puzzle').getContext('2d');
var img = new Image();
img.src = 'gollum.jpg'

function jrr(){img.src = 'jrr.jpg';}
function gimli(){img.src = 'gimli.jpg';}
function aragorn(){img.src = 'aragorn.jpg';}
function legolas(){img.src = 'legolas.jpg';}
function gandalf(){img.src = 'gandalf.jpg';}
function frodo(){img.src = 'frodo.jpg';}
function sam(){img.src = 'sam.jpg';}
function merry_pippin(){img.src = 'merry_pippin.jpg';}
function gollum(){img.src = 'gollum.jpg';}

img.addEventListener('load', fichas, false); //GARANTIZA QUE LA IMG SE TERMINE DE CARGAR

var tamannoTablero = document.getElementById('puzzle').width;
var contadorFicha = document.getElementById('tamanno').value;

var tamannoFichas = tamannoTablero / contadorFicha;

var clickeado = new Object;
clickeado.x = 0;
clickeado.y = 0;

var espacioVacio = new Object;
espacioVacio.x = 0;
espacioVacio.y = 0;

var resuelto = false;

var partesTablero;
tablero();

function tablero() {
  partesTablero = new Array(contadorFicha);
  for (var i = 0; i < contadorFicha; ++i) {
    partesTablero[i] = new Array(contadorFicha);
    for (var j = 0; j < contadorFicha; ++j) {
      partesTablero[i][j] = new Object;
      partesTablero[i][j].x = (contadorFicha - 1) - i;
      partesTablero[i][j].y = (contadorFicha - 1) - j;
    }
  }
  espacioVacio.x = partesTablero[contadorFicha - 1][contadorFicha - 1].x;
  espacioVacio.y = partesTablero[contadorFicha - 1][contadorFicha - 1].y;
  resuelto = false;
}

document.getElementById('tamanno').onchange = function() { //RECALCULA LAS FICHAS
  contadorFicha = this.value;
  tamannoFichas = tamannoTablero / contadorFicha;
  tablero();
  fichas();
  iniciar_tiempo();
};

document.getElementById('puzzle').onclick = function(e) {
  clickeado.x = Math.floor((e.pageX - this.offsetLeft) / tamannoFichas);
  clickeado.y = Math.floor((e.pageY - this.offsetTop) / tamannoFichas);
  if (distancia(clickeado.x, clickeado.y, espacioVacio.x, espacioVacio.y) == 1) {
    moverFicha(espacioVacio, clickeado);
    fichas();
  }
};

function fichas() {
  context.clearRect ( 0 , 0 , tamannoTablero , tamannoTablero );
  var i;
  var j;
  for (i = 0; i < contadorFicha; ++i) {
    for (j = 0; j < contadorFicha; ++j) {
      var x = partesTablero[i][j].x;
      var y = partesTablero[i][j].y;
      if(i != espacioVacio.x || j != espacioVacio.y || resuelto == true) {
        context.drawImage(img, x * tamannoFichas, y * tamannoFichas, tamannoFichas, tamannoFichas,
            i * tamannoFichas, j * tamannoFichas, tamannoFichas, tamannoFichas);
      }
    }
  }
}

function distancia(x1, y1, x2, y2) { //PARA SABER SI ESTÁ AL LADO DEL VACÍO
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function moverFicha(toLoc, fromLoc) {
  if (!resuelto) {
    partesTablero[toLoc.x][toLoc.y].x = partesTablero[fromLoc.x][fromLoc.y].x;
    partesTablero[toLoc.x][toLoc.y].y = partesTablero[fromLoc.x][fromLoc.y].y;
    partesTablero[fromLoc.x][fromLoc.y].x = contadorFicha - 1;
    partesTablero[fromLoc.x][fromLoc.y].y = contadorFicha - 1;
    toLoc.x = fromLoc.x;
    toLoc.y = fromLoc.y;
    puzzleTerminado();
  }
}

function puzzleTerminado() {
  var i;
  var j;
  var flag = true;
  for (i = 0; i < contadorFicha; ++i) {
    for (j = 0; j < contadorFicha; ++j) {
      if (partesTablero[i][j].x != i || partesTablero[i][j].y != j) {
        flag = false;
      }
    }
  }
  resuelto = flag;
}

var context = document.getElementById('puzzle').getContext('2d');
