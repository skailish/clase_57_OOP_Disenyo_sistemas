class Agenda {
  #tareas = []
  // Métodos
  agregar = (tarea) => {
    this.#tareas.push(tarea)
  }
  eliminar = (id) => {
    const eliminarId = (tarea, id) => {
      const tareaCompleta = tarea.obtenerValores()
      return tareaCompleta.id !== id;
    }
    this.#tareas = [...this.#tareas.filter((tarea) => eliminarId(tarea, id))];
  }
  finalizar = (id) => {
    const finalizarTarea = (tarea, id) => {
      const tareaCompleta = tarea.obtenerValores()
      tareaCompleta.id === id ? tarea.finalizar() : false;
    }
    this.#tareas.map((tarea) => finalizarTarea(tarea, id));
  }
  obtener = (id) => {
    const tieneID = (tarea, id) => {
      const tareaCompleta = tarea.obtenerValores()
      return tareaCompleta.id === id
    }
    const aTareas = (acc, tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      acc.push(tareaCompleta)
      return acc
    }
    return this.#tareas.filter((tarea) => tieneID(tarea, id)).reduce(aTareas, [])
  }
  obtenerTodas = () => {
    const aTareas = (acc, tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      acc.push(tareaCompleta)
      return acc
    }
    const tareas = this.#tareas.reduce(aTareas, [])
    return tareas
  }
  filtrarActivas = () => {
    const estaActiva = (tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      return tareaCompleta.finalizada === false
    }
    const aTareas = (acc, tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      acc.push(tareaCompleta)
      return acc
    }
    return this.#tareas.filter(estaActiva).reduce(aTareas, [])
  }
  filtrarFinalizadas = () => {
    const estaFinalizada = (tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      return tareaCompleta.finalizada === true
    }
    const aTareas = (acc, tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      acc.push(tareaCompleta)
      return acc
    }
    return this.#tareas.filter(estaFinalizada).reduce(aTareas, [])
  }
  filtrarPorCategoria = (categoria) => {
    const esCategoria = (tarea, categoria) => {
      const tareaCompleta = tarea.obtenerValores()
      return tareaCompleta.categoria === categoria
    }
    const aTareas = (acc, tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      acc.push(tareaCompleta)
      return acc
    }
    return this.#tareas.filter((tarea) => esCategoria(tarea, categoria)).reduce(aTareas, [])
  }
  filtrarPorVencimiento = (fecha) => {
    const venceEnFecha = (tarea, fecha) => {
      const tareaCompleta = tarea.obtenerValores()
      return tareaCompleta.vencimiento.toLocaleDateString() === fecha.toLocaleDateString()
    }
    const aTareas = (acc, tarea) => {
      const tareaCompleta = tarea.obtenerValores()
      acc.push(tareaCompleta)
      return acc
    }
    return this.#tareas.filter((tarea) => venceEnFecha(tarea, fecha)).reduce(aTareas, [])
  }
}
