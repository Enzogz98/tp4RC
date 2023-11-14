class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimirDatos() {
      return `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}<br>`;
    }
  }
  
  const producto1 = new Producto("001", "Producto 1", 20.99);
  const producto2 = new Producto("002", "Producto 2", 15.49);
  const producto3 = new Producto("003", "Producto 3", 30.00);
  
  const productosArray = [producto1, producto2, producto3];
  
  function imprimirDatosProductos() {
    const resultadoElement = document.getElementById("resultado");
  
    resultadoElement.innerHTML = "";
  
    for (const producto of productosArray) {
      resultadoElement.innerHTML += producto.imprimirDatos();
    }
  }