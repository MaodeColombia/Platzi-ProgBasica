class Pakiman
{
  constructor()
  {
    // NOTE: propiedades
    this.nombre = "vaca";
    this.tipo = "tierra"
    this.vida = 70;
    this.ataque = 7;
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
