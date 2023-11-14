let catalogo = [
    { titulo: "Libro1", disponible: true },
    { titulo: "Libro2", disponible: false },
    { titulo: "Libro3", disponible: true }
  ];

  function buscarLibroPorTitulo(titulo) {
    return catalogo.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
  }

  function verificarDisponibilidad(titulo) {
    const libro = buscarLibroPorTitulo(titulo);

    if (libro) {
      if (libro.disponible) {
        return `${titulo} está disponible para préstamo.`;
      } else {
        return `${titulo} no está disponible para préstamo.`;
      }
    } else {
      return `${titulo} no se encontró en el catálogo.`;
    }
  }

  function llevarRegistroDisponibilidad() {
    const librosList = document.getElementById("librosList");
    librosList.innerHTML = "";

    for (let i = 0; i < catalogo.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${catalogo[i].titulo} - ${catalogo[i].disponible ? "Disponible" : "No Disponible"}`;
      librosList.appendChild(listItem);
    }
  }

  window.onload = function () {
    llevarRegistroDisponibilidad();
  };

  const mensajeElement = document.getElementById("mensaje");
  const tituloLibro = "Libro2";
  const disponibilidad = verificarDisponibilidad(tituloLibro);
  mensajeElement.textContent = disponibilidad;