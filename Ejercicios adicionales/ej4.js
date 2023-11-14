let nombresProyectos = ["Proyecto1", "Proyecto2", "Proyecto3"];
    let estadosProyectos = ["En Curso", "En Curso", "En Curso"];
    let responsablesProyectos = ["Responsable1", "Responsable2", "Responsable3"];

    function agregarProyecto(nombre, estado, responsable) {
      nombresProyectos.push(nombre);
      estadosProyectos.push(estado);
      responsablesProyectos.push(responsable);
      actualizarListaProyectos();
    }

    function cambiarEstadoProyecto(nombre, nuevoEstado) {
      const indiceProyecto = nombresProyectos.indexOf(nombre);

      if (indiceProyecto !== -1) {
        estadosProyectos[indiceProyecto] = nuevoEstado;
        actualizarListaProyectos();
      }
    }

    function asignarResponsableProyecto(nombre, nuevoResponsable) {
      const indiceProyecto = nombresProyectos.indexOf(nombre);

      if (indiceProyecto !== -1) {
        responsablesProyectos[indiceProyecto] = nuevoResponsable;
        actualizarListaProyectos();
      }
    }

    function generarResumenProyectosEnCurso() {
      const proyectosEnCurso = nombresProyectos.filter((_, index) => estadosProyectos[index] === "En Curso");
      const resumenProyectosElement = document.getElementById("resumenProyectos");

      if (proyectosEnCurso.length > 0) {
        resumenProyectosElement.textContent = `Proyectos en Curso: ${proyectosEnCurso.join(", ")}`;
      } else {
        resumenProyectosElement.textContent = "No hay proyectos en curso.";
      }
    }

    function actualizarListaProyectos() {
      const proyectosList = document.getElementById("proyectosList");
      proyectosList.innerHTML = "";

      for (let i = 0; i < nombresProyectos.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `${nombresProyectos[i]} - Estado: ${estadosProyectos[i]} - Responsable: ${responsablesProyectos[i]}`;
        proyectosList.appendChild(listItem);
      }

      generarResumenProyectosEnCurso();
    }

    window.onload = function () {
      actualizarListaProyectos();
    };

    agregarProyecto("Proyecto4", "En Curso", "Responsable4");
    cambiarEstadoProyecto("Proyecto2", "Completado");
    asignarResponsableProyecto("Proyecto3", "NuevoResponsable3");