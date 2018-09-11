var area_dibujo_html = document.getElementById("area_dibujo");
var area_dibujo_js = area_dibujo_html.getContext("2d");
console.log(area_dibujo_js);

var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};
var color="blue"

var x = 150;
var y = 150;
var movimiento=10;
document.addEventListener("keydown",dibujarTeclado)

// NOTE: document.addEventListener("mousedown",dibujarmouse)
document.addEventListener("mouseup",dibujarmouse)
// NOTE: document.addEventListener("mousemove",dibujarmouse)
// NOTE: console.log(document);
// NOTE: console.log(area_dibujo);

function dibujarmouse(objeto_By_Escuchador){
  // NOTE: console.log("linea8 "+ objeto_By_Escuchador.altKey);// NOTE: cuando el atl esta activo cuando mouseup
  // NOTE: console.log("linea14 "+objeto_By_Escuchador.clientX);// NOTE: valor en X del document; el xmas grande cambia segun el zoom que se tenga
  // NOTE: console.log("linea15 "+objeto_By_Escuchador.clientY);
  console.log("linea16 "+objeto_By_Escuchador.composed);
  // NOTE: console.log("linea17 "+objeto_By_Escuchador.altKey);// NOTE: cuando el ctl esta activo cuando mouseup
}

function dibujar_lineas(color, xini,yini,xfin,yfin,lienzo){
  lienzo.beginPath();
      lienzo.strokeStyle=color;
      lienzo.lineWidth=3;
      lienzo.moveTo(xini,yini);
      lienzo.lineTo(xfin,yfin);
    lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento){
  switch (evento.keyCode) {
    case teclas.UP:
    console.log(y);
    dibujar_lineas(color,x,y,x,y-movimiento,area_dibujo_js);
    y=y-movimiento;
      break;
    case teclas.DOWN:
    console.log(y);
    dibujar_lineas(color,x,y,x,y+movimiento,area_dibujo_js);
    y=y+movimiento;
      break;
    case teclas.LEFT:
    console.log(x);
    dibujar_lineas(color,x,y,x-movimiento,y,area_dibujo_js);
    x=x-movimiento;
      break;
    case teclas.RIGHT:
    console.log(x);
    dibujar_lineas(color,x,y,x+movimiento,y,area_dibujo_js);
    x=x+movimiento;
        break;
    default:

  }
}
