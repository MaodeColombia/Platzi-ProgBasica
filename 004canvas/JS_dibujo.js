// NOTE: variables para el canvas en javascript
var objeto_canvas = document.getElementById("lienzo_html");
var lienzo_2D = objeto_canvas.getContext("2d");

// NOTE: variables para el cuador de tecto y el boton
var user_input_js = document.getElementById('user_input_html');
var boton_js = document.getElementById('boton_html');

boton_js.addEventListener("click",dibujoPorClick);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
  lienzo_2D.beginPath();
  lienzo_2D.moveTo(xinicial,yinicial);
  lienzo_2D.lineTo(xfinal,yfinal);
  lienzo_2D.closePath();
  lienzo_2D.strokeStyle=color;
  lienzo_2D.stroke();}
function dibujoPorClick(){
  var pixeles_canvas = objeto_canvas.width; //los pixeles que hay en el pixeles_canvas
  var densidad = parseInt(user_input_js.value);//las lineas que quiero
  var dxdy = pixeles_canvas/densidad; //cantidad de pixeles que distancian una linea y la siguiente.
  for (aux1=0;dxdy*aux1<pixeles_canvas;aux1++){
      dibujarLinea("grey",dxdy*aux1,0,300,dxdy*(aux1+1));}}
