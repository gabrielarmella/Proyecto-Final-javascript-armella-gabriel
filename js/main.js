const juegosContent = document.getElementById("juegosContent");
const juegosPlay = document.getElementById("juegosPlay");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async() => {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((juego) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <a href="producto.html${juego.id};">
            <img src="images/${juego.imagen}" width="420px" height="auto">
        </a>
        <h3>${juego.nombre}</h3>
        <p class="price">$ ${juego.precio} </p>
        `;

        juegosContent.append(content);
        
        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar); 
    
        comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === juego.id);
    
        if(repeat === true){
            carrito.map((prod) => {
                if(prod.id === juego.id){
                    prod.cantidad++;
                }
            });
            }else{
                carrito.push({
                    id: juego.id,
                    imagen: juego.imagen,
                    nombre: juego.nombre,
                    precio: juego.precio,
                    categoria: juego.categoria,
                    cantidad: juego.cantidad,
                });
            }
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
                title: "Añadiste con exito un juego a tu carrito🎮"
              });
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            saveLocal();
        });
    }); 
    
};



getProducts();


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito")); 