document.write("<br>La vaca hace 'mmmm' <br>");
var canvas_js=document.getElementById("canvas_html");
var lienzo=canvas_js.getContext("2d");

var image_name = "tile.png";
// NOTE: construtor del objeto Image()
var imagen = new Image();
// NOTE: se asigna el nombre de la imagen a la propiedad .src del objeto Imagen
imagen.src = image_name;
console.log(imagen);
// NOTE: se "aplica" la función "load" a la imagen que se quiere cargar con "imagen"
imagen.addEventListener("load", dibujar);
// NOTE: y una vez que se de y se complete el evento "load" se "imprime" en el canvas
function dibujar(objeto) {
  //console.log(objeto);
  lienzo.drawImage(imagen,0,0);}


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
