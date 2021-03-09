let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");
//funciones
const guardarNombre = () => {
  let nombre = prompt("Ingrese su nombre");
  if (nombre === "null" || nombre === "") {
    console.log(nombre);
    alert("Escribe tu nombre , NO LO DEJES VACIO");
  } else {
    hNombre.innerHTML = "Hola: " + nombre;
  }
};
//onclick
btnNombre.onclick = function () {
  guardarNombre();
};
