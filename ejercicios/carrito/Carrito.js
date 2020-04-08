class Carrito {
  // Propiedades
  #id = uuidv4()
  #productos = []
  //Methods
  agregarProducto = (producto) => {
    this.#productos.push(producto)
  }
  actualizarCantidadProducto = (id, cantidad) => {
    const cambiarCantidad = (producto, id, cantidad) => {
      const productoCompleto = producto.obtenerValores()
      productoCompleto.cantidad = productoCompleto.id === id ? cantidad : productoCompleto.cantidad;
      return productoCompleto
    }
    this.#productos.map((producto) => cambiarCantidad(producto, id, cantidad));
  }
  eliminarProducto = (id) => {
    const eliminarId = (producto, id) => {
      const productoCompleto = producto.obtenerValores()
      return productoCompleto.id !== id;
    }
    this.#productos = [...this.#productos.filter((producto) => eliminarId(producto, id))];
  }
  calcularTotal = () => {
    const aTotalSinImpuestos = (acc, producto) => {
      const productoCompleto = producto.obtenerValores()
      acc += (productoCompleto.precio * productoCompleto.cantidad)
      return acc
    }
    const totalSinImpuestos = this.#productos.reduce(aTotalSinImpuestos, 0)
    return totalSinImpuestos + this.calcularImpuestoTotal()
  }
  calcularImpuestoTotal = () => {
    const tieneImpuesto = producto => {
      const productoCompleto = producto.obtenerValores()
      return productoCompleto.tieneImpuesto === true;
    }
    const aImpuestoTotal = (acc, producto) => {
      const productoCompleto = producto.obtenerValores()
      acc += (productoCompleto.precio * 0.1)
      return acc
    }
    const productosConImpuesto = this.#productos.filter(tieneImpuesto)
    const impuestoTotal = productosConImpuesto.reduce(aImpuestoTotal, 0)
    return impuestoTotal
  }
  obtenerCantidadTotal = () => {
    const aCantidadTotal = (acc, producto) => {
      const productoCompleto = producto.obtenerValores()
      acc += productoCompleto.cantidad;
      return acc;
    }
    const cantidadTotal = this.#productos.reduce(aCantidadTotal, 0)
    return cantidadTotal
  }
  toString = () => {
    const aListaDeProductos = (stringParcial, producto) => {
      const productoCompleto = producto.obtenerValores()

      stringParcial += `Nombre: ${productoCompleto.nombre}, precioPorUnidad: ${productoCompleto.precio}, cantidad: ${productoCompleto.cantidad}\n`
      return stringParcial
    }
    const aSubtotalSinImpuesto = (acc, producto) => {
      const productoCompleto = producto.obtenerValores()
      acc += (productoCompleto.precio * productoCompleto.cantidad)
      return acc
    }
    const listaDeProductos = this.#productos.reduce(aListaDeProductos, "")
    const subtotalSinImpuesto = this.#productos.reduce(aSubtotalSinImpuesto, 0)
    const subtotalDeImpuesto = this.calcularImpuestoTotal()
    return `${listaDeProductos}\nSubtotal: $${subtotalSinImpuesto}\nImpuestos: $${subtotalDeImpuesto}\nTOTAL FINAL: $${subtotalSinImpuesto + subtotalDeImpuesto}`
  }

}

