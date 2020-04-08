// Usuario
// Propiedades
// handle (string)
// siguiendo (array de Usuario), inicializa vacío
// Constructor
// pide handle como argumento y lo agrega a su respectiva propiedad
// Métodos
// seguir(usuario) agrega usuario a siguiendo, si no se encuentra ya en dicho array y si no es el propio usuario (no se puede seguir a sí mismo)
// getters para obtener los valores de todas las propiedades

class Usuario
{
  #handle
  #siguiendo = []
  constructor(handle)
  {
    this.#handle = handle
  }
  // Methods
  seguir = (usuario) =>
  {
    const usuarioAModificar = usuario.obtenerValores()
    if (this.#siguiendo.includes(usuarioAModificar.id)) {

    } else {
      this.#siguiendo.push(usuarioAModificar)
    }
  }
  obtenerValores = () =>
  {
    return { handle: this.#handle, siguiendo: this.#siguiendo }
  }
}
