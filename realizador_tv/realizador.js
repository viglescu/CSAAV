var interval1;
function audioOFF(elemt){
  var camara = document.getElementById(elemt.id);
  camara.muted = true;
}

function audioON(elemt){
  var camara = document.getElementById(elemt.id);
  camara.muted = false;
}

// vueltas = número de veces que queremos que realice el bucle,,,, pasadas = número de vueltas que lleva
function bucle(){
  var inicio = document.getElementById("inicio").value;
  var fin = document.getElementById("fin").value;
  var vueltas = prompt("Cuantas veces?", "0");
  var video_principal = document.getElementById("video_principal");

  video_principal.currentTime = inicio;
  video_principal.play();

  var pasadas = 0;
  var interval2 = setInterval(function(){
    if(video_principal.currentTime >= fin){
      video_principal.currentTime = inicio;
      pasadas++;
    }
    if(pasadas >= vueltas){
      clearInterval(interval2);
    }
  }, 1000)
}

function cambiar_video(button) {
  var video_principal = document.getElementById("video_principal");
  var inicio =  document.getElementById("inicio");
  var fin =  document.getElementById("fin");
  var inicio_mostrar = document.getElementById("inicio_mostrar");
  var fin_mostrar = document.getElementById("fin_mostrar");

  var camaras = [];
  for(var i=1; i<5; i++){
    camaras[i] = document.getElementById("camara" + i);
  }
  var camara_elegida = document.getElementById("camara" + button.id);


  video_principal.src = "video" + button.id + ".mp4";
  video_principal.currentTime = camara_elegida.currentTime;
  clearInterval(interval1);
  interval1 = setInterval(reloj, 1000, video_principal);
  video_principal.play();

  function valores_marcador(){
    inicio.max = camara_elegida.duration;
    fin.max = camara_elegida.duration;

    inicio_mostrar.innerHTML = inicio.value;
    fin_mostrar.innerHTML = fin.value;
  }

// el maximo y el minimo del rango dependerá del video que menos dure
  inicio.addEventListener("click", function(){
    valores_marcador();
    }
    ,false);

  fin.addEventListener("click", function(){
    valores_marcador();
    }
    ,false);
}
