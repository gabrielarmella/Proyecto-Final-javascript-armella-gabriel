const juegosContent = document.getElementById("juegosContent");
const juegosPlay = document.getElementById("juegosPlay");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* const getProducts = async() => {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <a href="producto.html${product.id};">
            <img src="images/${product.imagen}" width="420px" height="auto">
        </a>
        <h3>${product.nombre}</h3>
        <p class="price">$ ${product.precio} </p>
        `;
    
        juegosContent.append(content);

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);
    
        comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
        if(repeat === true){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
            }else{
                carrito.push({
                    id: product.id,
                    imagen: product.imagen,
                    nombre: product.nombre,
                    precio: product.precio,
                    categoria: product.categoria,
                    cantidad: product.cantidad,
                });
            }
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            saveLocal();
        });
    }); 
    data.forEach((playstation) => {
        let contentPS = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <a href="producto.html${playstation.id};">
            <img src="images/${playstation.imagen}" width="420px" height="auto">
        </a>
        <h3>${playstation.nombre}</h3>
        <p class="price">$ ${playstation.precio} </p>
        `;
    
        juegosPlay.append(contentPS);
    });
};



getProducts();


const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito")); */