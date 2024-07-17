/* 
 * amanteMusica.js
 * 
 * Contiene los menues de la aplicacion Web 
 * AmanteMusicaWebFetch.
 */

let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_CONNECTIO_ESTABLISHED = 1;
let READY_STATE_REQUEST_RECEIVED = 2;
let READY_STATE_PROCESSING_REQUEST = 3;
let READY_STATE_RESONSE_READY = 4;

let REQUEST_STATUS_OK = 200;

let peticion_http;

// Opciones del menu principal de la aplicacion 
let menuPrincipalItems = ["Canciones", "Películas", "Géneros"];

// Funciones que implementan las operaciones de las opciones
// del menu principal de la aplicacion 
let menuPrincipalFunciones = ["despliegaMenuCanciones()", 
                              "despliegaMenuPeliculas()", 
                              "despliegaMenuGeneros()"];
                          
// Opciones del menu de las operaciones con las canciones 
let menuCancionesItems = ["Agregar canción", "Actualizar canción",
                          "Eliminar canciones", "Listar canciones",
                          "Listar canciones por género",
                          "Listar canciones por periodo",
                          "Página Inicial"];
                      
// Funciones que implementan las operaciones con las canciones 
let menuCancionesFunciones = ["", "", "", 
                              "", "", "", 
                              "despliegaMenuPrincipal()"];   
                          
// Opciones del menu de las operaciones con las peliculas 
let menuPeliculasItems = ["Agregar película", "Actualizar película",
                        "Eliminar películas", "Listar películas",
                        "Listar películas por actor",
                        "Listar películas por director",
                        "Página Inicial"];
                    
// Funciones que implementan las operaciones con las peliculas 
let menuPeliculasFunciones = ["", "", "",  
                              "", "", "",
                              "despliegaMenuPrincipal()"];      
                          
// Opciones del menu de las operaciones con los generos 
let menuGenerosItems = ["Agregar género", "Actualizar género",
                        "Eliminar géneros", "Listar géneros",
                        "Página Inicial"];
                    
// Funciones que implementan las operaciones con los generos 
let menuGenerosFunciones = ["capturaCveGenero()", 
                             "", "", 
                            "listarGeneros()",
                            "despliegaMenuPrincipal()"];                      

/**
 * Esta funcion despliega el menu principal de la aplicacion
 */
function despliegaMenuPrincipal() {
    // Limpia la seccion main
    borraHijos("mainId");
    
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuPrincipalItems, menuPrincipalFunciones);
}

/**
 * Esta funcion despliega el menu de las operaciones con las canciones
 */
function despliegaMenuCanciones() {
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuCancionesItems, menuCancionesFunciones);
}

/**
 * Esta funcion despliega el menu de las operaciones con las peliculas
 */
function despliegaMenuPeliculas() {
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuPeliculasItems, menuPeliculasFunciones);
}

/**
 * Esta funcion despliega el menu de las operaciones con los generos
 */
function despliegaMenuGeneros() {
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuGenerosItems, menuGenerosFunciones);
}
