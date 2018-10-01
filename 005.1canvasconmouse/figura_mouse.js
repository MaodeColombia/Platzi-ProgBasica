var canvas_js = document.getElementById("canvas_html");
var lienzo_2D = canvas_js.getContext("2d");
var x_actual;
var y_actual;
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
  lienzo_2D.beginPath();
  lienzo_2D.lineWidth = 1;
  lienzo_2D.moveTo(xinicial,yinicial);
  lienzo_2D.lineTo(xfinal,yfinal);
  lienzo_2D.closePath();
  lienzo_2D.strokeStyle=color;
  lienzo_2D.stroke();}
canvas_js.addEventListener("mousemove", eventoMouse);
function eventoMouse(objeto_evento){
  var color = "red";
    dibujarLinea (color,x_actual,y_actual,objeto_evento.offsetX,objeto_evento.offsetY);
    x_actual=objeto_evento.offsetX;
    y_actual = objeto_evento.offsetY;}
