var aux = document.getElementById("lienzo_html");
var lienzo_JS = aux.getContext("2d");
console.log(lienzo_JS);
console.log(aux);
dibujarLinea("red",200,200,200,100);


// NOTE: la funcion puede ir en "cualquier" lugar ya que JS -lee todo el código pone las funiones en la memoria y luego empieza a poner todo los que este fuera de la memoria.
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo_JS.beginPath();
  lienzo_JS.moveTo(xinicial,yinicial);
  lienzo_JS.lineTo(xfinal,yfinal);
  lienzo_JS.closePath();
  lienzo_JS.strokeStyle=color;
  lienzo_JS.stroke();
}
