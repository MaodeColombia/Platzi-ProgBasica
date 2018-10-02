document.write("<br>La vaca hace 'mmmm' <br>");
var canvas_js = document.getElementById("canvas_html");
var lienzo = canvas_js.getContext("2d");

// NOTE: construtor del objeto Image() (invocamos el objeto Image() para instanciar imagen, creando el objeto imagen)
var fondo = new Image();
// NOTE: se asigna el nombre de la imagen a la propiedad .src del objeto Imagen
fondo.src = "tile.png";
console.log(fondo);
// NOTE: se "aplica" la función "load" a la imagen que se quiere cargar con "imagen"
fondo.addEventListener("load", mostrar);
// NOTE: y una vez que se de y se complete el evento "load" se "muestra" en el canvas
function mostrar(objeto) {
  //console.log(objeto);
  lienzo.drawImage(fondo,0,0);}


var vaca = new Image();
vaca.src = "vaca.png"
vaca.addEventListener("load",mostrarVaca);
function mostrarVaca(){lienzo.drawImage(vaca,10,10);}

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", mostrarCerdo);
function mostrarCerdo (){lienzo.drawImage(cerdo,20,20);}

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", mostrarPollo);
function mostrarPollo() { lienzo.drawImage(pollo,30,30);}







// NOTE: número aleatorio en un intervalo, para este caso está predefinido entre 10 y 20
function aleatorio(mini=10,maxim=20) {
  z = Math.floor(Math.random()*((maxim-mini)+1))+mini
  return z;}

lienzo.beginPath();
lienzo.lineWidth=10;
lienzo.moveTo(0,500);
lienzo.lineTo(500,500);
lienzo.closePath();
lienzo.strokeStyle="black";
lienzo.stroke()
