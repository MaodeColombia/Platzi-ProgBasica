document.write("<br>La vaca hace 'mmmm' <br>");
var canvas_js = document.getElementById("canvas_html");
var lienzo = canvas_js.getContext("2d");

// NOTE: objeto con la sintaxis de JSON
// NOTE: el JS no hay forma que agregar un objeto a una definicion de JSON (se requiere agregar el objeto "new Image();" )
// NOTE: como este es un objeto que estoy creando, yo lo llamaría "mi (OWN) super-objeto"
var objetoimagenOWN_fondo = {url:"as.jpg",cargaOk:false};
// NOTE: como no se puede agregar un objeto a una definicion JSON, se relaciona así como está a continuación en la linea de código, que es equivalente a  "var objetoimagenOWN_fondo = {url:"as.jpg",cargaOk:false, objetimagen: new Image()};"
objetoimagenOWN_fondo.objetoimagenJS = new Image();
objetoimagenOWN_fondo.objetoimagenJS.src = objetoimagenOWN_fondo.url;
objetoimagenOWN_fondo.objetoimagenJS.addEventListener("load", mostrarFondo);

var objetoimagenOWN_vaca = {url:"vaca.png",cargaOk:false};
objetoimagenOWN_vaca.objetoimagenJS = new Image();
objetoimagenOWN_vaca.objetoimagenJS.src = objetoimagenOWN_vaca.url;
objetoimagenOWN_vaca.objetoimagenJS.addEventListener("load",mostrarVaca);

var objetoimagenOWN_cerdo = {url:"cerdo.png", cargaOk:false};
objetoimagenOWN_cerdo.objetoimagenJS = new Image();
objetoimagenOWN_cerdo.objetoimagenJS.src = objetoimagenOWN_cerdo.url;
objetoimagenOWN_cerdo.objetoimagenJS.addEventListener("load",mostrarCerdo);

var objetoimagenOWN_pollo = {url:"pollo.png",cargaOk:false};
objetoimagenOWN_pollo.objetoimagenJS = new Image();
objetoimagenOWN_pollo.objetoimagenJS.src = objetoimagenOWN_pollo.url
objetoimagenOWN_pollo.objetoimagenJS.addEventListener("load",mostrarPollo);


function mostrarFondo() {
  objetoimagenOWN_fondo.cargaOk = true;
  mostrarVilla();
  objetoimagenOWN_fondo.cargaOk = false;}

function mostrarVaca() {
  objetoimagenOWN_vaca.cargaOk = true;
  mostrarVilla();
  objetoimagenOWN_vaca.cargaOk = false;}

function mostrarCerdo() {
  objetoimagenOWN_cerdo.cargaOk = true;
  mostrarVilla();
  objetoimagenOWN_cerdo.cargaOk = false;}

function mostrarPollo() {
  objetoimagenOWN_pollo.cargaOk = true;
  mostrarVilla();
  objetoimagenOWN_pollo.cargaOk = false;}


function mostrarVilla() {
  if (objetoimagenOWN_fondo.cargaOk) {
    lienzo.drawImage(objetoimagenOWN_fondo.objetoimagenJS,0,0);}
  if (objetoimagenOWN_vaca.cargaOk) {
    var max_num_animalesXoY =  parseInt(500/80); // como es cuadrada la imagen de fondo la cantidad de animales que caben es la misma
    var num_animales = aleatorio(0,36); // si el max_num_animalesXoY en x o en y entonces el maximo numero de animales en el tablero es 6*6
    console.log(num_animales + " vacas");
    for (var i = 0; i < num_animales; i++) {
      x = aleatorio(0,max_num_animalesXoY)*70;//6*70=420
      y = aleatorio(0,max_num_animalesXoY)*70;
      lienzo.drawImage(objetoimagenOWN_vaca.objetoimagenJS,x,y);
    console.log("1");}}
  console.log("3");
  if (objetoimagenOWN_cerdo.cargaOk) {
    lienzo.drawImage(objetoimagenOWN_cerdo.objetoimagenJS,20,20)}
  if (objetoimagenOWN_pollo.cargaOk) {
    lienzo.drawImage(objetoimagenOWN_pollo.objetoimagenJS,30.,30)}}

// NOTE: entre 0 y 420
function cantidadAleatoria() {


}

// NOTE: número aleatorio en un intervalo, para este caso está predefinido entre 10 y 20
function aleatorio(mini=0,maxim=420) {
  z = Math.floor(Math.random()*((maxim-mini)+1))+mini
  return z;}
document.write (aleatorio());

lienzo.beginPath();
lienzo.lineWidth=10;
lienzo.moveTo(0,500);
lienzo.lineTo(500,500);
lienzo.closePath();
lienzo.strokeStyle="black";
lienzo.stroke()
