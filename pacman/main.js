var gameLoop;
window.onload = function(){
  canvas = document.getElementById('main_canvas');
  canvasContext = canvas.getContext("2d");

  window.addEventListener(
    "keydown",
    function(e) {
      estadoTecla[e.keyCode || e.which] = true;
    },
    true
  );
  window.addEventListener(
    "keyup",
    function(e) {
      estadoTecla[e.keyCode || e.which] = false;
    },
    true
  );
  gameLoop = setInterval(pacmanGame, 1000/16.67);
};


let estadoTecla = {};
const tamannoPacMan = 30;
const  tamannoPildoras = 5;
var direccion = 0;

var posx = 10;
var posy = 10;
const distancia = 42;

var fantasma = [
  {
    x: 10 + distancia *6,
    y: 10 + distancia *6,
    direccion: 4,
    color: "Cyan",
    active: true
  },
  {
    x: 10 + distancia *7,
    y: 10 + distancia *6,
    direccion: 1,
    color: "Red",
    active: true
  },
  {
    x: 10 + distancia *8,
    y: 10 + distancia *6,
    direccion: 2,
    color: "Grey",
    active: true
  }
];
const muros = window.muros(distancia);

var murosCreados = false;

//canvas para los muros
var canvasMuros = document.createElement('canvas');
var murosCtx = canvasMuros.getContext('2d');
canvasMuros.width = canvasMuros.height = 600;
//canvas para los pacman
var canvasPacMan = document.createElement('canvas');
var pacmanCtx = canvasPacMan.getContext('2d');
canvasPacMan.width = canvasPacMan.height = tamannoPacMan;
//canvas para las pildoras
var canvasPildoras = document.createElement('canvas');
pildorasCtx = canvasPildoras.getContext('2d');
canvasPildoras.width = canvasPildoras.height = tamannoPildoras;
pildorasCtx.fillStyle = "Yellow";
pildorasCtx.fillRect(0, 0, tamannoPildoras, tamannoPildoras);

var pildoras = [];
var contPild = 0;

function pacmanGame(){
  canvasContext.fillStyle = "Black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  crearMuros();
  crearPacMan();
  moverPacMan();
  crearFantasmas();
  crearPildoras();
}

function crearMuros(){
  if(!murosCreados){
    var i;
    for(i = 0; i<muros.length; i++){
      x = muros[i][0][0];
      y = muros[i][0][1];
      width = muros[i][1];
      height = muros[i][2];
      murosCtx.fillStyle = "Blue"
      murosCtx.fillRect(x, y, width, height);
    }
    murosCreados = true;
  }else{
    canvasContext.drawImage(murosCtx.canvas, 0, 0);
  }
}

function crearPacMan(){
  pacmanCtx.fillStyle = "Yellow";
  pacmanCtx.fillRect(0, 0, tamannoPacMan, tamannoPacMan);
  //pongo 10, que es el ancho de muro
  canvasContext.drawImage(pacmanCtx.canvas, posx, posy);
}

const desplazamiento = 10;

function moverPacMan(){
  if(estadoTecla[38]){
    direccion = 1;
  }else if (estadoTecla[39]){
    direccion = 2;
  }else if (estadoTecla[40]){
    direccion = 3;
  }else if (estadoTecla[37]){
    direccion = 4;
  }

  if (direccion !=0){
    switch (direccion) {
      case 1:
        posy = posy - desplazamiento;
        break;
      case 3:
        posy = posy + desplazamiento;
        break;
      case 2:
        posx = posx + desplazamiento;
        break;
      case 4:
        posx = posx - desplazamiento;
        break;
    }
  }
}

function crearFantasmas(){
  fantasma.forEach(fantasma =>{
    var canvasFantasma = document.createElement('canvas');
    var fantasmaCtx = canvasFantasma.getContext('2d');
    canvasFantasma.width = canvasFantasma.height = tamannoPacMan;
    fantasmaCtx.fillStyle = fantasma.color;
    fantasmaCtx.fillRect(0, 0, tamannoPacMan, tamannoPacMan);
    canvasContext.drawImage(fantasmaCtx.canvas, fantasma.x, fantasma.y);
  })
}

function crearPildoras(){
  var j;
  var l;
  if(pildoras.length == 0){
    for(j=23; j <= 600; j = j + distancia){
      for(l=23; l<=600; l = l + distancia){
        pildoras.push([j, l, 0]);
      }
    }
  }

  var m;
  for(m=0; m<pildoras.length; m++){
    canvasContext.drawImage(pildorasCtx.canvas, pildoras[m][0], pildoras[m][1]);
  }

}
