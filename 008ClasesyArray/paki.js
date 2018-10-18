// NOTE: visto lo de vectores se usara para crear el diccionario (estructura de datos de tipo diccionario)
var imagenes_tipo_vectorAsociativo = [];
imagenes_tipo_vectorAsociativo["vaca"] = "vaca.png";
imagenes_tipo_vectorAsociativo["cerdo"] = "cerdo.png";
imagenes_tipo_vectorAsociativo["pollo"] = "pollo.png";
//console.log(imagenes_tipo_vectorAsociativo);

// NOTE: el anterior bloque  es equivalente a
var imagenes_Tipo_Objeto =
{
  vaquera: "vaca.png",
  chancho: "cerdo.png",
  gallo: "pollo.png"
}
//console.log(imagenes_Tipo_Objeto);

class Pakiman
{
  constructor(n,t,v,a)
  {
    // NOTE: propiedades
    this.nombre = n;
    this.tipo = t;
    this.vida = v;
    this.ataque = a;
    this.imagen = new Image();
    this.imagen.src = imagenes_tipo_vectorAsociativo[this.nombre];
  }
  // NOTE: funciones
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
      document.write ("<strong>" + this.nombre + "</strong><br/>");
      document.write ("Tipo: " + this.tipo + "<br/>");
      document.write ("Vida: " + this.vida + "<br/>");
      document.write ("Ataque: " + this.ataque + "<hr/><br/> ");
    document.write("</p>");
  }
}

// NOTE: crear el objeto "vaquera" (es una instancia de la clase "Pakiman")
var vaquera = new Pakiman("vaca","tierra",100,27);
// NOTE: invocar PROPIEDAD "vaquera.nombre" para asignarle el valor que no se le asignó cuando se creó; como se observa en el constructor se requiere de cuatro PARAMETROS para definir el objeto, solo se va a definir "nombre", los demas van a quedar como indefinidos
// siguiente 4 renglones pasana comentarios para solucionar el problema de this.imagen.src de vaca (ver la verisonanterior)
//vaquera.nombre = "vaca";
//vaquera.tipo = "tierra";
//vaquera.vida = 100;
//vaquera.ataque = 27;
// NOTE: invocar FUNCION "vaquera.hablar()"; FUNCION que usa la PROPIEDAD que se acaba de definir
//vaquera.hablar();
// NOTE: Definición de los valores de las PROPIEDADES por PARAMETROS del constructor
var chancho = new Pakiman("cerdo","tierra",80,17);
var gallo = new Pakiman("pollo","aire",7,100);
//console.log(vaquera,chancho,gallo);


// NOTE: creacion de vector vacio
var vector = [];
// NOTE: agregando texto a la posición 0
vector[0] = "hola";
vector[1] = "Mao";
vector[2] = 3.141592654;
// NOTE: agrega la informacion en la posicion final del vector
vector.push("otra");
// NOTE: si invoco el vector por su nombre "vector" mostraria todo su contenido
//console.log(vector);

// NOTE: Array asociativo; es donde las posiciones están definida por un string
// NOTE: ojo el mismo vector "vector" se asigna
// NOTE: esto es lo que se llama un diccionario (estructura de datos de tipo diccionario)
vector["Apellido"] = "Martín"
// NOTE: a diferencia del anterior console.log(); dondde con solo invocar el vector los valores se muestran, los valores que fueron ubicados destro de posiciones definidas con string NO se muestran
//console.log(vector);

vaquera.mostrar();
chancho.mostrar();
gallo.mostrar();
