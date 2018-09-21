var aux = document.getElementById("lienzo_html");
var lienzo_JS = aux.getContext("2d");
console.log(lienzo_JS);
console.log(aux);
// NOTE: lo cacarcteristico de las siguiente 6 lineas es que desdpues de -iniciar linea -ir al lugar inicial -desplazarce a lugar final y -terminar la linea es que (depues de hace todo el trayecto) es cuando se le da color
lienzo_JS.beginPath();
lienzo_JS.moveTo(100,100);
lienzo_JS.lineTo(200,200);
lienzo_JS.closePath();
lienzo_JS.strokeStyle="blue";
lienzo_JS.stroke();
