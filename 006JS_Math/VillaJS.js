document.write("<br>La vaca hace 'mmmm' <br>");
var canvas_js = document.getElementById("canvas_html");
var lienzo = canvas_js.getContext("2d");

// NOTE: objeto con la sintaxis de JSON
// NOTE: el JS no hay forma que agregar un objeto a una definicion de JSON (se requiere agregar el objeto "new Image();" )
// NOTE: como este es un objeto que estoy creando, yo lo llamaría "mi (OWN) super-objeto"
var objetoimagenOWN_fondo = {
  url:"tile.png",
  cargaOk:false};
// NOTE: como no se puede agregar un objeto a una definicion JSON, se relaciona así como está a continuación en la linea de código, que es equivalente a  "var objetoimagenOWN_fondo = {url:"tile.png",cargaOk:false, objetimagen: new Image()};"
objetoimagenOWN_fondo.objetoimagenJS = new Image();
objetoimagenOWN_fondo.objetoimagenJS.src = objetoimagenOWN_fondo.url;
//console.log(fondo);
objetoimagenOWN_fondo.objetoimagenJS.addEventListener("load", mostrarFondo);
function mostrarFondo(objeto) {
  //console.log(objeto);
  objetoimagenOWN_fondo.cargaOk = true;
  lienzo.drawImage(objetoimagenOWN_fondo.objetoimagenJS,0,0);}



var objetoimagenOWN_vaca = {url:"vaca.png",cargaOk:false};
objetoimagenOWN_vaca.objetoimagenJS = new Image();
objetoimagenOWN_vaca.objetoimagenJS.src = objetoimagenOWN_vaca.url;
objetoimagenOWN_vaca.objetoimagenJS.addEventListener("load",mostrarVaca);
function mostrarVaca(){lienzo.drawImage(objetoimagenOWN_vaca.objetoimagenJS,10,10);}

var objetoimagenOWN_cerdo = {url:"cerdo.png", cargaOk:false};
objetoimagenOWN_cerdo.objetoimagenJS = new Image();
objetoimagenOWN_cerdo.objetoimagenJS.src = objetoimagenOWN_cerdo.url;
objetoimagenOWN_cerdo.objetoimagenJS.addEventListener("load",mostrarCerdo);
function mostrarCerdo(){lienzo.drawImage(objetoimagenOWN_cerdo.objetoimagenJS,20,20);}

var objetoimagenOWN_pollo = {url:"pollo.png",cargaOk:false};
objetoimagenOWN_pollo.objetoimagenJS = new Image();
objetoimagenOWN_pollo.objetoimagenJS.src = objetoimagenOWN_pollo.url
objetoimagenOWN_pollo.objetoimagenJS.addEventListener("load",mostrarPollo);
function mostrarPollo (){lienzo.drawImage(objetoimagenOWN_pollo.objetoimagenJS,30,30);}






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
