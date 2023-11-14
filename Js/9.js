class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      return "Haciendo sonido genérico...";
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      return "¡Guau! ¡Guau!";
    }
  }
  
  class Gato extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad);
    }
  
    emitirSonido() {
      return "¡Miau! ¡Miau!";
    }
  }
  const perro = new Perro("Buddy", 3);
  const gato = new Gato("Mittens", 2);

  function hacerSonido(animal) {
    mostrarMensaje(animal.emitirSonido());
  }

  function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById("mensaje");
    mensajeElement.innerHTML = `<p>${mensaje}</p>`;
  }
