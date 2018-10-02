document.write("la vaca hace 'mmmm' ");
canvas_js=document.getElementById('canvas_html');
lienzo=canvas_js.getContext('2d');



function aleatorio(mini=10,maxim=20) {
  z = Math.floor(Math.random()*((maxim-mini)+1))+mini
  return z;
}
for (var i = 0; i < 10; i++) {
  document.write (aleatorio(1,100) +", ")
}


lienzo.beginPath();
lienzo.lineWidth=10;
lienzo.moveTo(0,500);
lienzo.lineTo(500,500);
lienzo.closePath();
lienzo.strokeStyle="black";
lienzo.stroke()
