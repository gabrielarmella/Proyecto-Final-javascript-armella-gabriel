function renderProducto() {
    const producto = cargarProductoLS();
    let htmlImagenProducto = `<img src="images/${producto.imagen}" class="img-fluid" alt=${producto.nombre} />`;
    let htmlDetalleProducto = `<h1>${producto.nombre}</h1>
    <p class="text-danger fs-3">$${producto.precio} ARS</p>
    <p><b>ATENCIÓN:</b> Recomendado:
    Requiere un procesador y un sistema operativo de 64 bits
    SO: Windows 10 or higher (64-bit)
    Procesador: 3.2 Ghz Quad Core CPU or faster
    Memoria: 12 GB de RAM
    Gráficos: 4 GB Dedicated Memory
    DirectX: Versión 11
    Red: Conexión de banda ancha a Internet
    Almacenamiento: 15 GB de espacio disponible
    Tarjeta de sonido: Sound Card: DirectX® Compatible
    Notas adicionales: Running a Dedicated Server and Client on the same computer will double ram requirements. Also future releases may require more hard drive space.</p>
    <p><b>Descripción del contenido para adultos</b> ${producto.descripcion}</p>
    <p class="card-text"><button class="btn btn-dark rounded-pill" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>`;
    document.getElementById("imagenProducto").innerHTML = htmlImagenProducto;
    document.getElementById("detalleProducto").innerHTML = htmlDetalleProducto;
}

renderProducto();
renderBotonCarrito();