class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    saludar() {
      return `Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
    }
  
    despedirse() {
      return `Adiós, me estoy despidiendo. Hasta luego.`;
    }
  }
  

const persona1 = new Persona("Juan", 25, "Ingeniero");
const persona2 = new Persona("María", 30, "Médico");

function mostrarSaludo() {
  mostrarMensaje(persona1.saludar());
}

function mostrarDespedida() {
  mostrarMensaje(persona1.despedirse());
}

function mostrarSaludoPersona2() {
  mostrarMensaje(persona2.saludar());
}

function mostrarDespedidaPersona2() {
  mostrarMensaje(persona2.despedirse());
}

function mostrarMensaje(mensaje) {
  const mensajeElement = document.getElementById("mensaje");
  mensajeElement.innerHTML = `<p>${mensaje}</p>`;
}