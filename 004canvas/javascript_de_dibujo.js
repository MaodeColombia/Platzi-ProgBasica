var texto_js=document.getElementById("texto_lineas");
var boton_js= document.getElementById("boton");
boton_js.addEventListener("click", cliqueame);

var d = document.getElementById("id_canvas"); // NOTE: traemos a JavaScrip el lienzo
var lienzo = d.getContext("2d");// NOTE: le decimos al lienzo que sea 2D
console.log(lienzo);
var ancho = d.width;

function dibujar_lineas(color, xini,yini,xfin,yfin){
  lienzo.beginPath();
      lienzo.strokeStyle=color;
      lienzo.moveTo(xini,yini);
      lienzo.lineTo(xfin,yfin);
    lienzo.stroke();
  lienzo.closePath();
}

function cliqueame(){
  var x=parseInt(texto_js.value);
  console.log(texto_js);

  var lineas = x;
  // NOTE: var incolor = prompt ("Color");
  var espacio=ancho/parseInt(lineas);
  var aux=0;
  var yi,xf;

  while (aux<lineas+1){
    yi=espacio*aux;
    xf=espacio*(aux+1);
    dibujar_lineas("blue",0,yi,xf,300);// NOTE: <<<<<<<<<<<<<<<<<<<<<<<<<<
    //console.log("linea " + aux);
    aux=aux+1;
  }
}
