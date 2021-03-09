let btnNombre= document.getElementById("btnNombre");
let hNombre= document.getElementById("hNombre");
//funciones
const guardarNombre =()=>{
    let nombre =prompt("Ingrese su nombre");
    hNombre.innerHTML= "Hola: "+ nombre;
        
    } 
//onclick
btnNombre.onclick= function () {
    guardarNombre();

}