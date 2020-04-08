// Carrito con Producto
// Producto
// Propiedades
// id (string)
// nombre (string)
// precio (número)
// cantidad (número)
// tieneImpuesto (booleano)
// Constructor
// toma como argumentos nombre, precio, cantidad y tieneImpuesto y los asigna a sus respectivas propiedades
// genera un id automático y lo asigna a su propiedad
// Métodos
// getters para obteners los valores de todas las propiedades
// setter para modificar el valor de cantidad
// Observaciones
// la cantidad nunca puede ser 0
// el precio no puede ser menor a 0
// Carrito
// Propiedades
// productos (array de Producto), inicializa vacío
// Métodos
// agregarProducto(producto) agrega producto a `productos
// actualizarCantidadProducto(id, cantidad) actualiza la cantidad del producto en productos con id
// eliminarProducto(id) elimina de productos el producto con id
// calcularTotal() devuelve el total del carrito(con impuestos incluidos)
// calcularImpuestoTotal() devuelve el total de la suma de los impuestos de cada producto que tieneImpuesto
// obtenerCantidadTotal() devuelve la cantidad total de ítems en el producto
// toString() devuelve un string con
// la lista de productos, detallando nombre, precio por unidad y cantidad
// subtotal de todos los productos sin sumar impuesto
// subtotal de todos los impuestos sumados
// total final(suma de los subtotales)
// Observaciones
// el impuesto es del 10 % sobre el precio del producto

const carrito = new Carrito();
const leche = new Producto("Leche", 50, 2, true);
const manteca = new Producto("Manteca", 30, 3, false);
const yogur = new Producto("Yogur", 90, 1, true);
carrito.agregarProducto(leche);
carrito.agregarProducto(manteca);
carrito.agregarProducto(yogur);


// Agenda con Tareas
// Tarea
// Propiedades
// id(string)
// descripcion(string)
// categoria(string)
// vencimiento(Date)
// finalizada(booleano), inicializa en false
// Constructor
// toma como argumentos descripcion, categoria, vencimiento y los asigna a sus propiedades
// genera un id automático y lo asigna a su propiedad
// Métodos
// finalizar() cambia finalizada a true
// getters para obtener los valores de todas las propiedades
// Agenda
// Propiedades
// tareas(array de Tarea), inicializa vacío
// Métodos
// agregar(tarea) agrega tarea a tareas
// eliminar(id) elimina de tareas la tarea con id
// finalizar(id) finaliza la Tarea con id
// obtener(id) devuelve la tarea con id
// obtenerTodas() devuelve un array con todas las tareas
// filtrarActivas() devuelve un array de tareas que no estén finalizadas
// filtrarFinalizadas() devuelve un array de tareas que estén finalizadas
// filtrarPorCategoria(categoria) devuelve un array de tareas que tenga categoria
// filtrarPorVencimiento(fecha) devuelve un array de tareas que tenga vencimiento en fecha


const agenda = new Agenda();
const tarea1 = new Tarea("Ejercicios de programacion", "programacion", new Date(2020, 3, 8))
const tarea2 = new Tarea("Ejercicios de cocina", "cocina", new Date(2020, 3, 10));
const tarea3 = new Tarea("Ejercicios de javascript", "programacion", new Date(2020, 3, 13));
const tarea4 = new Tarea("Ejercicios de html", "programacion", new Date(2020, 3, 13));
agenda.agregar(tarea1);
agenda.agregar(tarea2);
agenda.agregar(tarea3);
agenda.agregar(tarea4);



// Librería con Libros con Autor
// Autor
// Propiedades
// nombre(string)
// nacionalidad(string)
// Constructor
// pide como argumentos nombre y nacionalidad y los asigna a sus respectivas propiedades
// Métodos
// getters para obtener los valores de todas las propiedades
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

const libreria = new Libreria();
const galeano = new Autor("Galeano", "Uruguayo")
const cortazar = new Autor("Cortázar", "Argentino")
const libro1 = new Libro("las venas abiertas de america latina", galeano, 150, "ensayo periodístico", 3)
const libro2 = new Libro("el libro de los abrazos", galeano, 200, "poesía épica", 2);
const libro3 = new Libro("rayuela", cortazar, 50, "contranovela", 1);
const libro4 = new Libro("bestiario", cortazar, 79, "narración", 2);
libreria.agregar(libro1);
libreria.agregar(libro2);
libreria.agregar(libro3);
libreria.agregar(libro4);

// Chat con Usuarios y Mensajes
// Usuario
// Propiedades
// id (string)
// nombre (string)
// Constructor
// genera un id automático y lo asigna a su propiedad
// el resto de propiedades las pide como argumentos y las asigna según corresponda
// Métodos
// getters para obtener los valores de todas las propiedades
// Mensaje
// Propiedades
// remitente (Usuario)
// destinatario (Usuario)
// texto (string)
// fecha (Date), inicializa con la fecha actual (new Date())
// Constructor
// pide las propiedades no inicializadas como argumentos y las asigna según corresponda
// Métodos
// getters para obtener los valores de todas las propiedades
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

// const usuario1 = new Usuario("Galeano")
// const usuario2 = new Usuario("Cortázar")
// const usuario3 = new Usuario("Pepe")
// const usuario4 = new Usuario("Maria")
// const mensaje = new Mensaje(usuario1, usuario2, "Hola Julio")
// const mensaje2 = new Mensaje(usuario1, usuario3, "Qué hacés Eduardo")
// const mensaje3 = new Mensaje(usuario1, usuario4, "Todo bien Julio")
// const mensaje4 = new Mensaje(usuario1, usuario3, "Me alegro Edu")
// const chat = new Chat(usuario1);
// chat.agregarContacto(usuario2)
// chat.agregarContacto(usuario3)
// chat.mandarMensaje(mensaje)
// chat.mandarMensaje(mensaje2)
// chat.mandarMensaje(mensaje3)
// chat.mandarMensaje(mensaje4)


// Twitter con Tweets y Usuarios
// Usuario
// Propiedades
// handle (string)
// siguiendo (array de Usuario), inicializa vacío
// Constructor
// pide handle como argumento y lo agrega a su respectiva propiedad
// Métodos
// seguir(usuario) agrega usuario a siguiendo, si no se encuentra ya en dicho array y si no es el propio usuario (no se puede seguir a sí mismo)
// getters para obtener los valores de todas las propiedades
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
// Twitter
// Propiedades
// usuarios(array de Usuario), inicializa vacío
// tweets(array de Tweet), inicializa vacío
// Métodos
// twittear(tweet) agrega tweet a tweets, si dicho tweet no se encuentra actualmente en el array
// obtenerTimeline(usuario) devuelve un array de tweets del usuario.Este array se compone de
// todos los tweets publicados por los usuarios que sigue
// todos los tweets likeados por los usuarios que sigue
// todos los tweets retweeteados por los usuarios que sigue
// no debe haber tweets repetidos
// deben estar ordenados de más nuevos a más viejos
// Observaciones
// Es recomendable crear métodos privados para simplificar obtenerTimeline


const usuario1 = new Usuario("@Galeano")
const usuario2 = new Usuario("@Cortázar")
const usuario3 = new Usuario("@Pepe")
const usuario4 = new Usuario("@Maria")
const tweet = new Tweet("@Galeano", "Este es mi Tweet - Edu")
const tweet2 = new Tweet("@Cortázar", "Este es mi Tweet - Cortázar")
const tweet3 = new Tweet("@Pepe", "Este es mi Tweet - Pepe")
const tweet4 = new Tweet("@Maria", "Este es mi Tweet - Maria")
const twitter = new Twitter();
twitter.twittear(tweet)
twitter.twittear(tweet2)
twitter.twittear(tweet3)
twitter.twittear(tweet4)
tweet2.darLike(usuario1)
tweet4.darLike(usuario3)

// Netflix con Series, Episodios y Usuarios
