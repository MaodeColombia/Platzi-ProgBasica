var aux = document.getElementById("lienzo_html");
var lienzo_JS = aux.getContext("2d");
var user_input_js = document.getElementById('user_input_html');
var boton_js = document.getElementById('boton_html');
boton_html.addEventListener("click",dibujoPorClick);
console.log(user_input_html);

var pixeles_canvas = 300; //los pixeles que hay en el pixeles_canvas
var densidad = 50;//las lineas que quiero
var dxdy = pixeles_canvas/densidad; //cantidad de pixeles que distancian una linea y la siguiente

for (aux1=0;dxdy*aux1<pixeles_canvas;aux1++){
    dibujarLinea("grey",dxdy*aux1,0,300,dxdy*(aux1+1));}

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
  lienzo_JS.beginPath();
  lienzo_JS.moveTo(xinicial,yinicial);
  lienzo_JS.lineTo(xfinal,yfinal);
  lienzo_JS.closePath();
  lienzo_JS.strokeStyle=color;
  lienzo_JS.stroke();}
function dibujoPorClick(){alert(user_input_js.value);}
