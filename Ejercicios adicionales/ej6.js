let listaTareas = {
    tareas: [],
    agregarTarea: function (tarea) {
      this.tareas.push({ descripcion: tarea, completada: false });
      actualizarListaTareas();
    },
    completarTarea: function (indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].completada = true;
        actualizarListaTareas();
      }
    }
  };

  function agregarTarea() {
    const nuevaTarea = document.getElementById("nuevaTarea").value;
    if (nuevaTarea.trim() !== "") {
      listaTareas.agregarTarea(nuevaTarea);
      document.getElementById("nuevaTarea").value = "";
    }
  }

  function completarTarea() {
    const indice = prompt("Ingrese el índice de la tarea a completar:");
    listaTareas.completarTarea(parseInt(indice) - 1);
  }

  function actualizarListaTareas() {
    const tareasList = document.getElementById("tareasList");
    tareasList.innerHTML = "";

    listaTareas.tareas.forEach((tarea, indice) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${indice + 1}. ${tarea.descripcion} - ${tarea.completada ? 'Completada' : 'Pendiente'}`;
      tareasList.appendChild(listItem);
    });
  }