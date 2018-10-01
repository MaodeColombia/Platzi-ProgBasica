var canvas_js = document.getElementById("canvas_html");
var lienzo_2D = canvas_js.getContext("2d");

// NOTE: las variablesa continuación son definir el punto inicial en el canvas, tambien para recordar cual es la posicion actual tras cada movimiento con las flechas
var x_actual = 150;
var y_actual = 150;
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
  lienzo_2D.beginPath();
  lienzo_2D.lineWidth = 3;
  lienzo_2D.moveTo(xinicial,yinicial);
  lienzo_2D.lineTo(xfinal,yfinal);
  lienzo_2D.closePath();
  lienzo_2D.strokeStyle=color;
  lienzo_2D.stroke();
}
// NOTE: Una buena práctica cuando se tienen números que tienen significacdo (37 es izquierda ,38 es arriba,39 es derecha y 40 es derecha) es crear un objeto para asociarlo a su 'interprelacion'
var teclas = {LEFT:37,UP:38,RIGHT:39,DOWN:40};
document.addEventListener("keydown", eventoTeclado);
// NOTE: cuando se está definiendo el nombre de una funcion, una buena práctica es colocar letras mayusculas cuando hay nuevas palabras
function eventoTeclado(objeto_evento){
  var color = "white";
  var movimiento = 10;
  switch (objeto_evento.keyCode) {
    case teclas.LEFT:
      dibujarLinea (color,x_actual,y_actual,x_actual-movimiento,y_actual);
      x_actual=x_actual-movimiento;
      console.log("iz");
      break;
    case teclas.UP:
    dibujarLinea (color,x_actual,y_actual,x_actual,y_actual-movimiento);
    y_actual = y_actual-movimiento;
      console.log("ar");
      break;
    case teclas.RIGHT:
    dibujarLinea (color,x_actual,y_actual,x_actual+movimiento,y_actual);
    x_actual=x_actual+movimiento;
      console.log("dr");
      break;
    case teclas.DOWN:
    dibujarLinea (color,x_actual,y_actual,x_actual,y_actual+movimiento);
    y_actual = y_actual+movimiento;
      console.log("ab");
      break;
    default:
    console.log("otra");
  }
}
