var canvas_js = document.getElementById("canvas_html");
var lienzo = canvas_js.getContext("2D");
 
document.addEventListener("keydown", eventoTeclado);
// NOTE: cuando se está definiendo el nombre de una funcion, una buena práctica es colocar letras mayusculas cuando hay nuevas palabras
function eventoTeclado(objeto_evento){console.log(objeto_evento.keyCode);}
//37
