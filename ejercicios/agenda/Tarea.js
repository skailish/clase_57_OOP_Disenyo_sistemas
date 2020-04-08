class Tarea
{
  #id
  #descripcion
  #categoria
  #vencimiento
  #finalizada = false
  // Constructor
  constructor(descripcion, categoria, vencimiento)
  {
    this.#descripcion = descripcion
    this.#categoria = categoria
    this.#vencimiento = vencimiento

    this.#id = uuidv4()
  }
  // Métodos
  // finalizar() cambia finalizada a true
  finalizar = () => { this.#finalizada = true }
  // getters para obtener los valores de todas las propiedades
  obtenerValores = () =>
  {
    return {
      id: this.#id,
      descripcion: this.#descripcion,
      categoria: this.#categoria,
      vencimiento: this.#vencimiento,
      finalizada: this.#finalizada
    }
  }
}
