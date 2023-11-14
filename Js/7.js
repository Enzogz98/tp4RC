class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
  class Agenda {
    constructor(tamanio = 10) {
      this.tamanio = tamanio;
      this.contactos = [];
    }
  
    aniadirContacto(contacto) {
      if (!this.agendaLlena()) {
        if (!this.existeContacto(contacto)) {
          this.contactos.push(contacto);
          return `Contacto ${contacto.nombre} añadido a la agenda.`;
        } else {
          return `El contacto ${contacto.nombre} ya existe en la agenda.`;
        }
      } else {
        return "La agenda está llena, no se pueden añadir más contactos.";
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some(c => c.nombre === contacto.nombre);
    }
  
    listarContactos() {
      let listaContactos = "Lista de Contactos:<br>";
      this.contactos.forEach(c => listaContactos += `Nombre: ${c.nombre}, Teléfono: ${c.telefono}<br>`);
      return listaContactos;
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
      if (contactoEncontrado) {
        return `Contacto encontrado - Nombre: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}`;
      } else {
        return `No se encontró ningún contacto con el nombre ${nombre}.`;
      }
    }
  
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex(c => c.nombre === contacto.nombre);
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        return `Contacto ${contacto.nombre} eliminado de la agenda.`;
      } else {
        return `No se encontró ningún contacto con el nombre ${contacto.nombre}.`;
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamanio;
    }
  
    huecosLibres() {
      return this.tamanio - this.contactos.length;
    }
  }
  
  const agenda = new Agenda();
  
  function mostrarOpcion(opcion) {
    const resultadoElement = document.getElementById("resultado");
  
    switch (opcion) {
      case 1:
        const nombreNuevo = prompt("Ingrese el nombre del contacto:");
        const telefonoNuevo = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
        resultadoElement.innerHTML = agenda.aniadirContacto(nuevoContacto);
        break;
  
      case 2:
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        resultadoElement.innerHTML = agenda.buscarContacto(nombreBuscar);
        break;
  
      case 3:
        const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar, "");
        resultadoElement.innerHTML = agenda.eliminarContacto(contactoEliminar);
        break;
  
      case 4:
        resultadoElement.innerHTML = agenda.listarContactos();
        break;
  
      default:
        resultadoElement.innerHTML = "Opción no válida. Por favor, seleccione una opción válida.";
    }
  }
  