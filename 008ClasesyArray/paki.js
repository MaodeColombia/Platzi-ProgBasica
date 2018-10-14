class Pakiman
{
  constructor(n,t,v,a)
  {
    // NOTE: propiedades
    this.nombre = n;
    this.tipo = t;
    this.vida = v;
    this.ataque = a;
  }
  // NOTE: funciones
  hablar()
  {
    alert(this.nombre);
  }
}

// NOTE: crear el objeto "vaquera" (es una instancia de la clase "Pakiman")
var vaquera = new Pakiman();
// NOTE: invocar PROPIEDAD "vaquera.nombre" para asignarle el valor que no se le asignó cuando se creó; como se observa en el constructor se requiere de cuatro PARAMETROS para definir el objeto, solo se va a definir "nombre", los demas van a quedar como indefinidos
vaquera.nombre = "vaca";
vaquera.tipo = "tierra";
vaquera.vida = 100;
vaquera.ataque = 7;
// NOTE: invocar FUNCION "vaquera.hablar()"; FUNCION que usa la PROPIEDAD que se acaba de definir
vaquera.hablar();
// NOTE: Definición de los valores de las PROPIEDADES por PARAMETROS del constructor
var chancho = new Pakiman("cerdo","tierra",80,17);


// NOTE: creacion de vector vacio
var vector = [];
// NOTE: agregando texto a la posición 0
vector[0] = "hola";
vector[1] = "Mao";
vector[2] = 3.141592654;
// NOTE: agrega la informacion en la posicion final del vector
vector.push("otra");
// NOTE: Array asociativo; es donde las posiciones están definida por un string
// NOTE: ojo el mismo vector "vector" se asigna
// NOTE: esto es lo que se llama un diccionario (estructura de datos de tipo diccionario)
vector["Apellido"] = "Martín"
