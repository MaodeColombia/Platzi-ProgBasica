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
