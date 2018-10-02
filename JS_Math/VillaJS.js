document.write("la vaca hace 'mmmm'");
canvas_js=document.getElementById('canvas_html');
lienzo=canvas_js.getContext('2d');





lienzo.beginPath();
lienzo.lineWidth=10;
lienzo.moveTo(0,500);
lienzo.lineTo(500,500);
lienzo.closePath();
lienzo.strokeStyle="black";
lienzo.stroke()
