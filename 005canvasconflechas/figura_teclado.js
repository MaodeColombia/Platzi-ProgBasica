var teclas ={LEFT:37,UP:38,RIGHT:39,DOWN:40};
console.log(teclas);

document.addEventListener("keyup", eventoTeclado);
// NOTE: cuando se está definiendo el nombre de una funcion, una buena práctica es colocar letras mayusculas cuando hay nuevas palabras
function eventoTeclado(objeto_evento){
  switch (objeto_evento.keyCode) {
    case teclas.LEFT:
      console.log("iz");
      break;
    case teclas.UP:
      console.log("ar");
      break;
    case teclas.RIGHT:
      console.log("dr");
      break;
    case teclas.DOWN:
      console.log("ab");
      break;
    default:
    console.log("otra");
  }
}
