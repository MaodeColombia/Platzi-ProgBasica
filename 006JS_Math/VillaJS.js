document.write("<br>La vaca hace 'mmmm' <br>");
var canvas_js = document.getElementById("canvas_html");
var lienzo = canvas_js.getContext("2d");

// NOTE: objeto con la sintaxis de JSON
// NOTE: el JS no hay forma que agregar un objeto a una definicion de JSON (se requiere agregar el objeto "new Image();" )
// NOTE: como este es un objeto que estoy creando, yo lo llamaría "mi (OWN) super-objeto"
var objetoimagenOWN_fondo = {url:"tile.png",cargaOk:false};
// NOTE: como no se puede agregar un objeto a una definicion JSON, se relaciona así como está a continuación en la linea de código, que es equivalente a  "var objetoimagenOWN_fondo = {url:"tile.png",cargaOk:false, objetimagen: new Image()};"
objetoimagenOWN_fondo.objetoimagenJS = new Image();
objetoimagenOWN_fondo.objetoimagenJS.src = objetoimagenOWN_fondo.url;
//console.log(fondo);
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

  var num_max_animales_XoY = parseInt(canvas_js.width/80);// canvas_js.width es tanto el ancho del canvas y del tamaño del fondo ("tile.png") y 80 es el ancho del la imagen vaca ("vaca.png"), el resultado de esta mimagen es el MAXimo_NUMero_animales que caben verticalmente u horizontalmente.
  var num_max_animales_canvas = (0,36);// como el canvas es cuadrado, el mámimo numero de vacas cerdos o pollo en el tableron son 36 (esto es 6x6)

// NOTE:"a lanzar los dados" para determinar el porcentaje de animales de cada especie que van a aparecer"
var xvacas = aleatorio(0,10);//lo puse de cero a "cualquier valor" o sea 10
var xcerdos = aleatorio(0,10);
var xpollos = aleatorio(0,10);
var aux_porcentaje = (xvacas+xcerdos+xpollos);

var porcentaje_vacas = Math.round(xvacas/aux_porcentaje*100);
var porcentaje_cerdos = Math.round(xcerdos/aux_porcentaje*100);
var porcentaje_pollos = Math.round(xpollos/aux_porcentaje*100);

var num_vacas = Math.round(porcentaje_vacas*num_max_animales_canvas/100);
var num_cerdos = Math.round(porcentaje_cerdos*num_max_animales_canvas/100);
var num_pollos = Math.round(porcentaje_pollos*num_max_animales_canvas/100);

function mostrarVilla() {
  if (objetoimagenOWN_fondo.cargaOk) {
    lienzo.drawImage(objetoimagenOWN_fondo.objetoimagenJS,0,0);}
  if (objetoimagenOWN_vaca.cargaOk) {
    for (var i = 0; i < num_vacas; i++) {
      x = aleatorio(0,num_max_animales_XoY)*70;//6*70=420
      y = aleatorio(0,num_max_animales_XoY)*70;
      lienzo.drawImage(objetoimagenOWN_vaca.objetoimagenJS,x,y);}}
  if (objetoimagenOWN_cerdo.cargaOk) {
    for (var i = 0; i < num_cerdos; i++) {
      x = aleatorio(0,num_max_animales_XoY)*70;//6*70=420
      y = aleatorio(0,num_max_animales_XoY)*70;
    lienzo.drawImage(objetoimagenOWN_cerdo.objetoimagenJS,x,y);}}
  if (objetoimagenOWN_pollo.cargaOk) {
    for (var i = 0; i < num_pollos; i++) {
      x = aleatorio(0,num_max_animales_XoY)*70;//6*70=420
      y = aleatorio(0,num_max_animales_XoY)*70;
    lienzo.drawImage(objetoimagenOWN_pollo.objetoimagenJS,x,y);}}
  }



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
