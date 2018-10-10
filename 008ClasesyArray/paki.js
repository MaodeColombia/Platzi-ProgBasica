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

// NOTE: invocar PROPIEDAD "vaquera.ataque"
// NOTE: invocar FUNCION "vaquera.hablar()"
var vaquera = new Pakiman();

// NOTE: cambiar los valores de las PROPIEDADES por PARAMETROS del constructor
var chancho = new Pakiman("cerdo",2,3,4);


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
