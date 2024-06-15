function preload() {
    //escribe el código para cargar archivos aquí
    //por ejemplo, cargar imágenes
  }
  
  function setup() {
    //escribe el código para configurar elementos aquí
    //por ejemplo, configurar el lienzo
canvas=createCanvas(500,500);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
m="";
}
  
  function draw() {
    image(video, 0, 0, 640, 480); tint(m);
    //escribe el código para dibujar aquí 
    //por ejemplo, dibujar un círculo
  }
  
function g() {
    m=document.getElementById("e").value;
}

function h() {
  save("t.png")
}