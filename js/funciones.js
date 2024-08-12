const productos = [
    {id:1, nombre:"Red Dead Redemption 2", descripcion:"Este juego puede incluir contenido no apto para todas las edades o para verlo en el trabajo: Contenido general para adultos",precio:64600, imagen:"red-dead-redemption-2.jpeg", categoria:"juego" },
    {id:2, nombre:"Grand Theft Auto V", descripcion:"Este juego puede incluir contenido no apto para todas las edades o para verlo en el trabajo: Contenido general para adultos",precio:45000, imagen:"gta-v.jpeg", categoria:"juego" },
    {id:3, nombre:"EA Sports FC 24", descripcion:"Apto para todas las edades",precio:77000, imagen:"ea-sports-fc-24.jpg", categoria:"juego" },
    {id:4, nombre:"Counter-Strike 2", descripcion:"Este juego puede incluir contenido no apto para todas las edades o para verlo en el trabajo: Contenido general para adultos",precio:3500, imagen:"counter-strike-2.jpeg", categoria:"juego" },
    {id:5, nombre:"Elden Ring", descripcion:"Este juego puede incluir contenido no apto para todas las edades o para verlo en el trabajo: Violencia o gore frecuentes, Contenido general para adultos",precio:108000, imagen:"elden-ring.jpeg", categoria:"juego" },
]

function agregarProducto(id) { 
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha agregado correctamente!");
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    console.log("El producto #" + id + " se ha eliminado correctamente!");
}

function renderBotonCarrito() {
    let total = totalProductos();
    document.getElementById("totalCarrito").innerHTML = total;
}

function totalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.length;
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    console.log("El carrito se ha vaciado correctamente!");
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);

    return producto;
}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}