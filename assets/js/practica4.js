let btnDatos = document.getElementById("btnDatos");
let tituNombre = document.getElementById("tituNombre");
let tituEdad = document.getElementById("tituEdad");
let tituDocumento = document.getElementById("tituDocumento");
let tituTelefono = document.getElementById("tituTelefono");
//funciones
const guardarDatos = () => {
  let nombre = prompt("Ingrese su nombre");
  let edad =prompt("Ingrese edad");
  let doc =prompt("Ingrese documento");
  let telefono =prompt("Ingrese telefono");
  if (nombre === "" || edad === "" || doc==="" || telefono==="" ) {
    
    alert("Escribe tu datos , NO LOS DEJES VACIOS");
  } else {
    tituNombre.innerHTML = "Nombre: " + nombre;
    tituEdad.innerHTML = "Edad: " + edad;
    tituDocumento.innerHTML = "Documento: " + doc;
    tituTelefono.innerHTML = "Telefono: " + telefono;
  }
};
//onclick
btnDatos.onclick = function () {
  guardarDatos();
};