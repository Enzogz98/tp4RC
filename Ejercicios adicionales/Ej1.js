let inventario = ["Producto1", "Producto2", "Producto3"];
    let precios = [10, 20, 30];

    function actualizarListaInventario() {
      const inventarioList = document.getElementById("inventarioList");
      inventarioList.innerHTML = "";
      for (let i = 0; i < inventario.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `${inventario[i]} - $${precios[i]}`;
        inventarioList.appendChild(listItem);
      }
    }

    function agregarProducto() {
      const nombre = prompt("Ingrese el nombre del nuevo producto:");
      const precio = parseFloat(prompt("Ingrese el precio del nuevo producto:"));
      if (!isNaN(precio) && nombre) {
        inventario.push(nombre);
        precios.push(precio);
        actualizarListaInventario();
      } else {
        alert("Por favor, ingrese valores válidos.");
      }
    }

    function eliminarProductosAgotados() {
      for (let i = inventario.length - 1; i >= 0; i--) {
        if (precios[i] === 0) {
          alert(`Producto ${inventario[i]} agotado. Eliminando del inventario.`);
          inventario.splice(i, 1);
          precios.splice(i, 1);
        }
      }
      actualizarListaInventario();
    }

    function calcularValorTotal() {
      let valorTotal = 0;
      for (let i = 0; i < inventario.length; i++) {
        valorTotal += precios[i];
      }
      document.getElementById("resultado").textContent = `El valor total del inventario es: $${valorTotal}`;
    }

    window.onload = function () {
      actualizarListaInventario();
    };