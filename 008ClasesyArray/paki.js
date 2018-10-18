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

// NOTE: la colección de objetos dentro de un vector
var paki_coleccion = [];
paki_coleccion.push(vaquera);
paki_coleccion.push(chancho);
paki_coleccion.push(gallo);
// NOTE: dentro de JS hay un ciclo especial FOR, la versión for-in y la versión for-of que están diseñados solo iterar por un objeto y mostrar
// - el indice de la iteraciones "versión for-in"
// - o el contenido de un indice "versión for-of"
// NOTE: la versión for-in
//for (var variable in object) {
//  if (object.hasOwnProperty(variable)) {
//  }
//}
// NOTE: funciona por cantidad de objetos que exista en el VECTOR; (si hay 1 o X no tengo que saber la cantidad)
// NOTE: hace tantas iteraciones como objetos haya en el vector
// NOTE: esta funcion es como contar, me muestra el indice.
for (var temporal in paki_coleccion) {
  console.log(temporal);
}
// NOTE: el ciclo anterior fue para vectores (con OBJETOS), ahora el ciclo ejecutado sobre OBJETOS hace tantas iteraciones como PROPIEDADES tenga
for (temporal in paki_coleccion[0]) {
  console.log(temporal);
}
// NOTE: PROPIEDADES que han podido ser OBJETOS (imagen es un OBJETO de tipo "new Image()")
for (temporal in paki_coleccion[0].imagen) {
  console.log(temporal);
}
// NOTE: el otro ciclo espeial FOR, la versión for-of
//for (variable of iterable) {
//}
// NOTE: esta version itera por cada una de los componente (indices) y lo que retorna es el contenido en el indice
for (var temporal of paki_coleccion) {
  console.log(temporal);
}


// NOTE: el uso de las versiones for-of y for-in para vestores asociativos
// for-in devuelve en nombre del indice
for (temporal in imagenes_tipo_vectorAsociativo) {
  console.log(temporal);
}
//... y el forof no devuelve "nada" (a menos que se haga explcidamente la forma en como debe iterar, pero es tema avanzado), ni siquiera entra al ciclo.
for (temporal of imagenes_tipo_vectorAsociativo) {
  console.log("nada de nada retorné con el vector asociativo");
  console.log(temporal);
}
