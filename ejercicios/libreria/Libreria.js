// Libreria
// Propiedades
// libros(array de`Libro), inicializa vacío
// ganancias (número), inicializa en 0
// Métodos
// agregar(libro) agrega libro a libros
// eliminar(id) elimina de libros el libro con id
// buscarPorId(id) devuelve la información de un libro con id
// buscarPorTitulo(titulo) devuelve la información de un libro con titulo
// filtrarPorAutor(autor) devuelve un array de libros escritos por autor
// filtrarPorGenero(genero) devuelve un array de libros con genero
// comprarLibros(idLibros) toma un array de ids de libros, si tienen stock, reduce el stock de dichos libros en 1 y suma a ganancias el precio de cada libro comprado
// obtenerGanancias devuelve ganancias

class Libreria {
  #libros = []
  #ganancias = 0
  //Methods
  agregar = (libro) => { this.#libros.push(libro) }
  eliminar = (id) => {
    const eliminarId = (libro, id) => {
      const libroCompleto = libro.obtenerValores()
      return libroCompleto.id !== id;
    }
    this.#libros = [...this.#libros.filter((libro) => eliminarId(libro, id))];
  }
  buscarPorId = (id) => {
    const tieneID = (libro, id) => {
      const libroCompleto = libro.obtenerValores()
      return libroCompleto.id === id
    }
    const aLibro = (acc, libro) => {
      const libroCompleto = libro.obtenerValores()
      acc.push(libroCompleto)
      return acc
    }
    return this.#libros.filter((libro) => tieneID(libro, id)).reduce(aLibro, [])
  }
  buscarPorTitulo = (titulo) => {
    const tieneID = (libro, titulo) => {
      const libroCompleto = libro.obtenerValores()
      return libroCompleto.titulo === titulo
    }
    const aLibro = (acc, libro) => {
      const libroCompleto = libro.obtenerValores()
      acc.push(libroCompleto)
      return acc
    }
    return this.#libros.filter((libro) => tieneID(libro, titulo)).reduce(aLibro, [])
  }
  filtrarPorAutor = (autor) => {
    const esAutor = (libro, autor) => {
      const libroCompleto = libro.obtenerValores()
      return libroCompleto.autor === autor
    }
    const aLibros = (acc, libro) => {
      const libroCompleto = libro.obtenerValores()
      acc.push(libroCompleto)
      return acc
    }
    return this.#libros.filter((libro) => esAutor(libro, autor)).reduce(aLibros, [])
  }
  filtrarPorGenero = (genero) => {
    const esGenero = (libro, genero) => {
      const libroCompleto = libro.obtenerValores()
      return libroCompleto.genero === genero
    }
    const aLibros = (acc, libro) => {
      const libroCompleto = libro.obtenerValores()
      acc.push(libroCompleto)
      return acc
    }
    return this.#libros.filter((libro) => esGenero(libro, genero)).reduce(aLibros, [])
  }

  comprarLibros = (idLibros) => {
    idLibros.forEach(id => {
      const comprarLibro = (libro) => {
        const libroCompleto = libro.obtenerValores()
        if (libroCompleto.id === id) {
          if (libro.tieneStock()) {
            this.#ganancias += libroCompleto.precio
            libro.modificarStock(-1)
          }
        }
      }
      this.#libros.map(comprarLibro)
    });
  }

  obtenerGanancias = () => { return this.#ganancias }

}