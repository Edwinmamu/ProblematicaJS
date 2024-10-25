import { registrarTiempo } from "../controllers/controllerTiempos.js";
import { listarProyectos, filtrarPorEmpresa, filtrarPorProyecto, filtrarPorTipoProyecto } from "../controllers/controllerProyecto.js"

//agregar un evento al elemento 
let btnRegistrar = document.getElementById("btnRegistrar")
if (btnRegistrar) {
    7
    btnRegistrar.addEventListener("click", registrarTiempo)
}

let listaProyectos = document.getElementById("listarProyectos")
if (listaProyectos) {
    listaProyectos.addEventListener('click', listarProyectos)
    
}