class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    // Métodos GET y SET
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(value) {
      this._ISBN = value;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(value) {
      this._titulo = value;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(value) {
      this._autor = value;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(value) {
      this._numPaginas = value;
    }
  
    mostrarLibro() {
      return `El libro "${this._titulo}" con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas.`;
    }
  }
  function mostrarInformacionLibros() {
    const libro1 = new Libro("123456789", "Don Quijote", "Miguel de Cervantes", 300);
    const libro2 = new Libro("987654321", "Cien años de soledad", "Gabriel García Márquez", 400);
  
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<p>${libro1.mostrarLibro()}</p>`;
    resultadoElement.innerHTML += `<p>${libro2.mostrarLibro()}</p>`;
  
    if (libro1.numPaginas > libro2.numPaginas) {
      resultadoElement.innerHTML += "<p>El libro 1 tiene más páginas que el libro 2.</p>";
    } else if (libro1.numPaginas < libro2.numPaginas) {
      resultadoElement.innerHTML += "<p>El libro 2 tiene más páginas que el libro 1.</p>";
    } else {
      resultadoElement.innerHTML += "<p>Ambos libros tienen la misma cantidad de páginas.</p>";
    }
  }
  
  
  
  
  
  
  