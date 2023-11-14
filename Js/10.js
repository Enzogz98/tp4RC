class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaDeAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaDeAviones.push(avion);
    }
  
    buscarAvion(nombreAvion) {
      return this.listaDeAviones.find(avion => avion.nombre === nombreAvion);
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaDePasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaDePasajeros.length < this.capacidad) {
        this.listaDePasajeros.push(pasajero);
        mostrarMensaje(`¡${pasajero} abordó el avión ${this.nombre} con destino a ${this.destino}!`);
      } else {
        mostrarMensaje(`¡El avión ${this.nombre} está lleno! No se puede abordar a más pasajeros.`);
      }
    }
  }
  
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

    const avion1 = new Avion("Vuelo001", 150, "Nueva York");
    const avion2 = new Avion("Vuelo002", 200, "París");
    const avion3 = new Avion("Vuelo003", 100, "Tokio");

    aeropuertoInternacional.agregarAvion(avion1);
    aeropuertoInternacional.agregarAvion(avion2);
    aeropuertoInternacional.agregarAvion(avion3);

    function buscarAvion() {
      const nombreAvion = prompt("Ingrese el nombre del avión a buscar:");
      const avionBuscado = aeropuertoInternacional.buscarAvion(nombreAvion);

      if (avionBuscado) {
        mostrarMensaje(`Avión encontrado: ${avionBuscado.nombre} con destino a ${avionBuscado.destino}`);
      } else {
        mostrarMensaje("No se encontró el avión.");
      }
    }

    function abordarAvion() {
      const nombreAvion = prompt("Ingrese el nombre del avión para abordar:");
      const avionBuscado = aeropuertoInternacional.buscarAvion(nombreAvion);

      if (avionBuscado) {
        const pasajero = prompt("Ingrese el nombre del pasajero:");
        avionBuscado.abordar(pasajero);
      } else {
        mostrarMensaje("No se encontró el avión.");
      }
    }

    function mostrarMensaje(mensaje) {
      const mensajeElement = document.getElementById("mensaje");
      mensajeElement.innerHTML = `<p>${mensaje}</p>`;
    }