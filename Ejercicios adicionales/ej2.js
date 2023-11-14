let estudiantes = ["Estudiante1", "Estudiante2", "Estudiante3"];
let notas = [[90, 80, 70], [20, 75, 40], [85, 90, 95]];

function calcularPromedio(notasEstudiante) {
  const sumaNotas = notasEstudiante.reduce((total, nota) => total + nota, 0);
  return sumaNotas / notasEstudiante.length;
}

function mostrarResumen() {
  const resumenList = document.getElementById("resumenList");
  resumenList.innerHTML = "";

  for (let i = 0; i < estudiantes.length; i++) {
    const promedio = calcularPromedio(notas[i]);
    const listItem = document.createElement("li");

    if (promedio >= 70) {
      listItem.textContent = `${estudiantes[i]} - Aprobado (Promedio: ${promedio.toFixed(2)})`;
      listItem.style.color = "green";
    } else {
      listItem.textContent = `${estudiantes[i]} - Reprobado (Promedio: ${promedio.toFixed(2)})`;
      listItem.style.color = "red";
    }

    resumenList.appendChild(listItem);
  }
}

window.onload = function () {
  mostrarResumen();
};
