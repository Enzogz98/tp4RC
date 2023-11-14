class Auto {
    constructor(color, marca, modelo) {
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.estaEncendido = false;
    }
  
    encender() {
      if (!this.estaEncendido) {
        this.estaEncendido = true;
        mostrarEstado("El auto está encendido.");
      } else {
        mostrarEstado("El auto ya está encendido.");
      }
    }
  
    apagar() {
      if (this.estaEncendido) {
        this.estaEncendido = false;
        mostrarEstado("El auto está apagado.");
      } else {
        mostrarEstado("El auto ya está apagado.");
      }
    }
  }
  
  var miAuto = new Auto("rojo", "Toyota", "Camry");
  
  function mostrarEstado(mensaje) {
    var estadoAutoElement = document.getElementById("estadoAuto");
    estadoAutoElement.textContent = mensaje;
  }
  
  function encenderApagarAuto() {
    miAuto.estaEncendido ? miAuto.apagar() : miAuto.encender();
  }  