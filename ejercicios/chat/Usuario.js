// Usuario
// Propiedades
// id (string)
// nombre (string)
// Constructor
// genera un id automático y lo asigna a su propiedad
// el resto de propiedades las pide como argumentos y las asigna según corresponda
// Métodos
// getters para obtener los valores de todas las propiedades

class Usuario
{
  #id
  #nombre
  constructor(nombre)
  {
    this.#id = uuidv4()
    this.#nombre = nombre
  }
  // Methods
  obtenerValores = () =>
  {
    return {
      id: this.#id,
      nombre: this.#nombre,
    }
  }
}
