
/* Constante de array de objetos */
const productos = [
    {
        id: 1,
        nombre: "honda500",
        precio: 2000,
        cantidad: 0
    },
    {
        id: 2,
        nombre: "benelli",
        precio: 2400,
        cantidad: 0
    },
    {
        id: 3,
        nombre: "cfmoto",
        precio: 3000,
        cantidad: 0
    }
]

let carrito = []
const carritoHtml = document.querySelector(".carrito")


function total() {
    let total = 0
    /* Ciclo forEach */
    carrito.forEach(prod => {
        total += prod.precio
    })
    const totalHtml = document.querySelector(".total")
    totalHtml.innerHTML = `Total: $${total}`
}

function agregarProducto(id) {
    let productoAAgregar = productos.find(prod => prod.id === id)
    console.log("Producto a Agregar: ", productoAAgregar);

    carrito.push(productoAAgregar)

    console.log("Carrito: ", carrito)

    carritoHtml.innerHTML += `
        <div class="producto${productoAAgregar.id}" id="${productoAAgregar.id}">
            <p>${productoAAgregar.nombre}</p>
            <p class="precio">$${productoAAgregar.precio}</p>
            <button class="agregar" onclick="eliminar(${productoAAgregar.id})">Eliminar</button>
        </div>
  `
    total()
}

function eliminar(id) {
    const producto = document.querySelector(`.producto${id}`)
    producto.remove()
    const nuevoCarrito = carrito.filter(prod => prod.id !== id);
    carrito = nuevoCarrito;
    console.log(carrito)
    total()
}

function vaciar() {
    if (confirm("Estas seguro que deseas vacia el carrito!")) {
        carrito = []
        carritoHtml.innerHTML =
            console.log("Carrito: ", carrito)
    } else {
        console.log("Carrito: ", carrito)
    }
}


