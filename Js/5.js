class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo.toUpperCase(); 
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
      this.DNI = this.generaDNI();
    }
  
    mostrarGeneracion() {
      const generacion = this.calcularGeneracion();
      const rasgo = this.calcularRasgoGeneracion(generacion);
      return `Pertenece a la generación ${generacion}. Rasgo característico: ${rasgo}.`;
    }
  
    esMayorDeEdad() {
      return this.edad >= 18;
    }
  
    mostrarDatos() {
      return `Nombre: ${this.nombre}<br>Edad: ${this.edad}<br>DNI: ${this.DNI}<br>Sexo: ${this.sexo}<br>Peso: ${this.peso} kg<br>Altura: ${this.altura} m<br>Año de Nacimiento: ${this.añoNacimiento}<br>Es mayor de edad: ${this.esMayorDeEdad() ? 'Sí' : 'No'}`;
    }
  
    generaDNI() {
      return Math.floor(Math.random() * 90000000) + 10000000;
    }
  
    calcularGeneracion() {
      const año = new Date().getFullYear();
      const edad = año - this.añoNacimiento;
  
      if (edad >= 0 && edad <= 12) {
        return 'Alpha';
      } else if (edad >= 13 && edad <= 29) {
        return 'Z';
      } else if (edad >= 30 && edad <= 42) {
        return 'Millennial';
      } else if (edad >= 43 && edad <= 54) {
        return 'X';
      } else if (edad >= 55 && edad <= 74) {
        return 'Baby Boomer';
      } else if (edad >= 75 && edad <= 94) {
        return 'Silenciosa';
      } else {
        return 'No identificada';
      }
    }
  
    calcularRasgoGeneracion(generacion) {
      switch (generacion) {
        case 'Alpha':
          return 'Nacidos después de 2012, crecen con tecnología avanzada desde temprana edad.';
        case 'Z':
          return 'Nativos digitales, crecieron con internet y tecnologías móviles.';
        case 'Millennial':
          return 'Fuerte uso de tecnología y conciencia social.';
        case 'X':
          return 'Adaptabilidad y transición entre la era analógica y digital.';
        case 'Baby Boomer':
          return 'Énfasis en la lealtad y estabilidad.';
        case 'Silenciosa':
          return 'Valores tradicionales y respeto por la autoridad.';
      
        default:
          return 'Generación no identificada.';
      }
    }
  }
  
  function mostrarInformacion() {
    const nombre = document.getElementById("nombreInput").value;
    const edad = parseInt(document.getElementById("edadInput").value);
    const sexo = document.getElementById("sexoInput").value;
    const peso = parseFloat(document.getElementById("pesoInput").value);
    const altura = parseFloat(document.getElementById("alturaInput").value);
    const añoNacimiento = parseInt(document.getElementById("añoNacimientoInput").value);
  
    if (!nombre || isNaN(edad) || !sexo || isNaN(peso) || isNaN(altura) || isNaN(añoNacimiento)) {
      alert("Por favor, complete todos los campos con valores válidos.");
    }

    const persona = new Persona(nombre, edad, sexo, peso, altura, añoNacimiento);
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<p>${persona.mostrarDatos()}</p><p>${persona.mostrarGeneracion()}</p>`;
}
