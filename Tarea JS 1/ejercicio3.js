//objeto a respetar
let carrito = {
  montoTotal: 10,
  productos: ["Leche"],
};
//Clase creada
class Carrito {
  montoTotal;
  productos;

  constructor(montoInicial, productoInicial) {
    this.montoTotal = montoInicial;
    this.productos = productoInicial;
  }

  agregarProducto(nombre, precio, unidades) {
    if (this.productos.includes(nombre)) {
    } else {
      this.productos.push(nombre);
      this.montoTotal = this.montoTotal + precio * unidades;
    }
  }
}

let CarritoPrueba = new Carrito(carrito.montoTotal, carrito.productos);

console.log(CarritoPrueba);

CarritoPrueba.agregarProducto("Yerba", 15, 2);

console.log(CarritoPrueba);
