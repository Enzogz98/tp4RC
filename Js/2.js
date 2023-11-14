var cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      cantidad = parseFloat(cantidad);
  
      if (!isNaN(cantidad) && cantidad > 0) {
        this.saldo += cantidad;
        mostrarInformacion("Se ingresaron $" + cantidad + " a la cuenta.\nSaldo actual: $" + this.saldo);
      } else {
        mostrarInformacion("Por favor, ingresa una cantidad válida para depositar.");
      }
    },
  
    extraer: function(cantidad) {
      cantidad = parseFloat(cantidad);
  
      if (!isNaN(cantidad) && cantidad > 0) {
        if (cantidad <= this.saldo) {
          this.saldo -= cantidad;
          mostrarInformacion("Se extrajeron $" + cantidad + " de la cuenta.\nSaldo actual: $" + this.saldo);
        } else {
          mostrarInformacion("No hay suficiente saldo para extraer la cantidad solicitada.");
        }
      } else {
        mostrarInformacion("Por favor, ingresa una cantidad válida para retirar.");
      }
    }
  };
  
  function mostrarInformacion(mensaje) {
    var infoCuentaElement = document.getElementById("infoCuenta");
    infoCuentaElement.textContent = mensaje;
  }
  
  function realizarIngreso() {
    var cantidad = document.getElementById("cantidadIngreso").value;
    cuenta.ingresar(cantidad);
  }
  
  function realizarExtraccion() {
    var cantidad = document.getElementById("cantidadExtraccion").value;
    cuenta.extraer(cantidad);
  }