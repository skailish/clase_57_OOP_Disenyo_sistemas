class Producto {
  // Propiedades
  #id
  #nombre
  #precio
  #cantidad = 1;//(número)
  #tieneImpuesto
  // Constructor
  constructor(nombre, precio, cantidad, tieneImpuesto) {
    this.#nombre = nombre
    this.#precio = precio > 0 ? precio : 0;
    this.#cantidad = cantidad != 0 ? cantidad : 1;
    this.#tieneImpuesto = tieneImpuesto
    this.#id = uuidv4()
  }
  //Methods
  // Getters
  obtenerValores = () => {
    return { id: this.#id, nombre: this.#nombre, precio: this.#precio, cantidad: this.#cantidad, tieneImpuesto: this.#tieneImpuesto }
  }
  // Setters
  cambiarCantidad = (cantidad) => {
    this.#cantidad = cantidad > 0 ? cantidad : 1;
  }
}