// Tweet
// Propiedades
// id (string)
// handle (string)
// texto (string)
// likes (array de Usuario), inicializa en 0
// retweets (array de `Usuario), inicializa en 0
// Constructor
// genera un id automático y lo asigna a su propiedad
// pide handle y texto como argumentos y los agrega a sus respectivas propiedades
// Métodos
// getters para obtener los valores de todas las propiedades
// darLike(usuario) agrega usuario a likes, si ya se encuentra en dicho array, debe removerlo de mismo
// retweetear(usuario) agrega usuario a retweets, si ya se encuentra en dicho array, debe removerlo de mismo

class Tweet
{
  #id
  #handle
  #texto
  #likes = []
  #retweets = []
  constructor(handle, texto)
  {
    this.#id = uuidv4()
    this.#handle = handle
    this.#texto = texto
  }
  // methods
  // getters
  obtenerValores = () =>
  {
    return { id: this.#id, handle: this.#handle, texto: this.#texto, retweets: this.#retweets }
  }
  darLike = (usuario) =>
  {
    const usuarioAModificar = usuario.obtenerValores()
    if (this.#likes.includes(usuarioAModificar.id)) {
      
    } else {
      this.#likes.push(usuarioAModificar)
    }

  }
  retweetear = (usuario) =>
  {
    const usuarioAModificar = usuario.obtenerValores()
    if (this.#retweets.includes(usuarioAModificar.id)) {

    } else {
      this.#retweets.push(usuarioAModificar)
    }

  }
}
