const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Tu carrito de compras</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalbutton);
    
    carrito.forEach((juego) =>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
                <img src="images/${juego.imagen}" width="150px" height="auto">
                <h3>${juego.nombre}</h3>
                <p>$${juego.precio}</p>
                <p>${juego.categoria}</p>
                <p>${juego.cantidad}</p>
                <span class="restar"> - </span>
                <span class="sumar"> + </span>
                <p>Total: ${juego.cantidad * juego.precio}$</p>
                <span class="delete-product"> ❎ </span>
            `;
                
        modalContainer.append(carritoContent);
        
        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(juego.cantidad !== 1) {
                juego.cantidad--;
            }
            saveLocal();
            pintarCarrito();
            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 1200,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Eliminaste un juego de tu carrito💔"
              });
        })
        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () => {
            juego.cantidad++;
            saveLocal();
            pintarCarrito();

            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 1200,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Agregaste un juego  a tu carrito😎"
              });
        });

        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 1200,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Eliminaste un juego de tu carrito💔"
              });
            eliminarProducto(juego.id);
        });
        
    });


    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total estimado: ${total} $`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        
    });
    

    carritoCounter();
    saveLocal();
    pintarCarrito();
};


const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carrito.length));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};


carritoCounter();

