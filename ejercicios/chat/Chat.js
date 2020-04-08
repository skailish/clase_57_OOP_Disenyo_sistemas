// Chat
// Propiedades
// usuario (Usuario)
// contactos (array de Usuario), inicializa vacío
// mensajes (array de Mensaje), inicializa vacío
// Constructor
// pide usuario como argumento y lo agrega a su respectiva propiedad
// Métodos
// agregarContacto(usuario) agregar usuario a contactos
// obtenerContactos() devuelve un array con la lista de contactos
// obtenerMensaje() devuelve un array con la lista de mensajes
// filtrarPorContacto(id) devuelve un array con la lista de mensajes que tienen como destinatario un usuario con id
// filtrarPorFecha(fecha) devuelve un array con la lista de mensajes que tienen fecha (mismo día, mes y año)
// mandarMensaje(mensaje) agrega mensaje a mensajes, si destinatario es un usuario de la lista de contactos con y si mensaje no se encuentra ya en el array de mensajes
// Observaciones
// solo se pueden mandar mensajes a usuarios de la lista de contactos. En caso contrario, arrojar un error.

class Chat
{
  #usuario
  #contactos = []
  #mensajes = []
  constructor(usuario)
  {
    this.#usuario = usuario
  }
  // Methods
  agregarContacto = (usuario) =>
  {
    this.#contactos.push(usuario)
  }
  obtenerContactos = () =>
  {
    const aContactos = (acc, contacto) =>
    {
      const contactoCompleto = contacto.obtenerValores()
      acc.push(contactoCompleto)
      return acc
    }
    return this.#contactos.reduce(aContactos, [])
  }
  obtenerMensaje = () =>
  {
    const aMensajes = (acc, mensaje) =>
    {
      const mensajeCompleto = mensaje.obtenerValores()
      acc.push(mensajeCompleto)
      return acc
    }
    return this.#mensajes.reduce(aMensajes, [])
  }
  filtrarPorContacto = (id) =>
  {
    const tieneID = (mensaje, id) =>
    {
      const mensajeCompleto = mensaje.obtenerValores()
      const destinatario = mensajeCompleto.destinatario.obtenerValores()
      return destinatario.id === id
    }
    const aMensajesPorContacto = (acc, contacto) =>
    {
      const contactoCompleto = contacto.obtenerValores()
      acc.push(contactoCompleto)
      return acc
    }
    return this.#mensajes.filter((mensaje) => tieneID(mensaje, id)).reduce(aMensajesPorContacto, [])
  }
  filtrarPorFecha = (fecha) =>
  {
    const tieneFecha = (mensaje, fecha) =>
    {
      const mensajeCompleto = mensaje.obtenerValores()
      return mensajeCompleto.fecha.toLocaleDateString() === fecha.toLocaleDateString()
    }
    const aMensajes = (acc, mensaje) =>
    {
      const mensajeCompleto = mensaje.obtenerValores()
      acc.push(mensajeCompleto)
      return acc
    }
    return this.#mensajes.filter((mensaje) => tieneFecha(mensaje, fecha)).reduce(aMensajes, [])
  }

  mandarMensaje = (mensaje) =>
  {
    const mensajeCompleto = mensaje.obtenerValores()
    if (this.#contactos.includes(mensajeCompleto.destinatario) || this.#contactos.includes(mensajeCompleto.remitente)) {
      this.#mensajes.push(mensaje)
    } else {
      const destinatario = mensajeCompleto.destinatario.obtenerValores()
      throw new Error(`${destinatario.nombre} no existe en la lista de contactos`)
    }
  }
}
