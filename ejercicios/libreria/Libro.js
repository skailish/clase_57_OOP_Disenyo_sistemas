// Libro
// Propiedades
// id(string)
// titulo(string)
// autor(Autor)
// precio(número)
// genero(string)
// stock(número)
// Constructor
// genera un id automático y lo asigna a su propiedad
// el resto de propiedades las pide como argumentos y las asigna según corresponda
// Métodos
// tieneStock() devuelve true si stock es mayor a 0, false sino
// getters para obtener los valores de todas las propiedades, menos stock
// setter para modificar los valores de precio y stock
// Observaciones
// stock y precio tienen como valor mínimo 0

class Libro {
  #id
  #titulo
  #autor
  #precio
  #genero
  #stock
  constructor(titulo, autor, precio, genero, stock) {
    this.#id = uuidv4()
    this.#titulo = titulo
    this.#autor = autor
    this.#precio = precio
    this.#genero = genero
    this.#stock = stock
  }
  // Methods
  tieneStock = () => {
    return this.#stock > 0
  }
  // getters
  obtenerValores = () => {
    return { id: this.#id, titulo: this.#titulo, autor: this.#autor, precio: this.#precio, genero: this.#genero }
  }
  // setters
  modificarPrecio = (valor) => {
    this.#precio = valor
    this.#precio = this.#precio < 0 ? 0 : this.#precio
  }
  modificarStock = (cantidad) => {
    this.#stock += cantidad
    this.#stock = this.#stock < 0 ? 0 : this.#stock
  }
}