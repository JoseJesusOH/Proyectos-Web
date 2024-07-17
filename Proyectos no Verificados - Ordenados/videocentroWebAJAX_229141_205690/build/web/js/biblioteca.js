/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_CONNECTIO_ESTABLISHED = 1;
let READY_STATE_REQUEST_RECEIVED = 2;
let READY_STATE_PROCESSING_REQUEST = 3;
let READY_STATE_RESONSE_READY = 4;

let REQUEST_STATUS_OK = 200;

let peticion_http;

let menuPrincipalItems = ["Catalogo de Revistas", "Inventario de Revistas"];



let menuRevistasItems = ["Agregar", "Actualizar","Despliega Revista", "Eliminar", "Consultar", "Regresar"];

let menuInventarioItems = ["Inventariar", "Desinventariar", "Consultar", "Regresar"];


let menuPrincipalFunciones = ["despliegaMenuRevistas()",
    "despliegaMenuInventario()"];


let menuRevistasFunciones = ["capturaIsbn()", "","despliegaRevista()", "", "despliegaRevistas()", "despliegaMenuPrincipal()"];

let menuInventarioFunciones = ["capturaRevistaInventariar()", "", "despliegaInventarioRevistas()", "despliegaMenuPrincipal()"];

function despliegaMenuPrincipal() {
    borraHijos("mainId");
    borraHijos("navId");
    despliegaMenu("navId", menuPrincipalItems, menuPrincipalFunciones);

    let padre = document.getElementById("mainId");
    let titulo = document.createElement("h1");
    titulo.innerHTML = "Bienvenida";
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Bienvenidos a la Biblioteca Web donde podras realizar acciones tales como"+
                    " registro, edicion, eliminación de revistas.Ademas podras inventariar"+
                   " y desinventariar revistas."+ 
                    " Por lo tanto, espero que la aplicacion le sea de utilidad y el"+
                    " diseño"+
                    " sea completamente de su agrado, las opciones de la aplicacion se encuentran en su lado izquierdo."+
                    " La aplicacion es creada por su servidor José Jesús Orozco Hernández,"+
                    " mi"+
                    " telefono de celular es 6442138093 y correo de contacto"+
                     " jose.orozco229141@potros.itson.edu.mx.";
    padre.appendChild(titulo);
    padre.appendChild(parrafo);

}

function despliegaMenuRevistas() {
    borraHijos("mainId");
    borraHijos("navId");
    despliegaMenu("navId", menuRevistasItems, menuRevistasFunciones);
}

function despliegaMenuInventario() {
    borraHijos("mainId");
    borraHijos("navId");
    despliegaMenu("navId", menuInventarioItems, menuInventarioFunciones);
}
