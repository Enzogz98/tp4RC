class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    setAlto(nuevoAlto) {
      if (nuevoAlto > 0) {
        this.alto = nuevoAlto;
        mostrarResultado("Altura modificada exitosamente.");
      } else {
        mostrarResultado("La altura debe ser un número positivo.");
      }
    }
  
    setAncho(nuevoAncho) {
      if (nuevoAncho > 0) {
        this.ancho = nuevoAncho;
        mostrarResultado("Ancho modificado exitosamente.");
      } else {
        mostrarResultado("El ancho debe ser un número positivo.");
      }
    }
  
    mostrarPropiedades() {
      mostrarResultado(`Rectángulo: Alto = ${this.alto}, Ancho = ${this.ancho}`);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  function crearRectangulo() {
    const alto = parseFloat(document.getElementById("altoInput").value);
    const ancho = parseFloat(document.getElementById("anchoInput").value);
  
    if (!isNaN(alto) && !isNaN(ancho) && alto > 0 && ancho > 0) {
      rectangulo = new Rectangulo(alto, ancho);
      mostrarResultado("Rectángulo creado.");
    } else {
      mostrarResultado("Por favor, ingresa valores válidos y positivos para alto y ancho.");
    }
  }
  
  function modificarAltura() {
    const nuevaAltura = parseFloat(prompt("Ingrese la nueva altura:"));
    rectangulo.setAlto(nuevaAltura);
  }
  
  function modificarAncho() {
    const nuevoAncho = parseFloat(prompt("Ingrese el nuevo ancho:"));
    rectangulo.setAncho(nuevoAncho);
  }
  
  function calcularPerimetro() {
    if (rectangulo) {
      mostrarResultado(`Perímetro: ${rectangulo.calcularPerimetro()}`);
    } else {
      mostrarResultado("Primero crea un rectángulo.");
    }
  }
  
  function calcularArea() {
    if (rectangulo) {
      mostrarResultado(`Área: ${rectangulo.calcularArea()}`);
    } else {
      mostrarResultado("Primero crea un rectángulo.");
    }
  }
  
  function mostrarResultado(mensaje) {
    document.getElementById("resultado").textContent = mensaje;
  }
  
  let rectangulo;