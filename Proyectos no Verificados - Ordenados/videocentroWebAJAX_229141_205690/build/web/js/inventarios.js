
/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function capturaRevistaInventariar() {
    borraHijos("mainId");
    let padre = document.getElementById("mainId");
    let titulo = document.createElement("h1");
    titulo.innerHTML = "Capturar Revistar a inventariar";
    padre.appendChild(titulo);

    let formulario = document.createElement("form");
    padre.appendChild(formulario);

    let contenedorFormulario = document.createElement("div");
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    formulario.appendChild(contenedorFormulario);


//Revista
    let celdaEtiqRevista = document.createElement("div");
    celdaEtiqRevista.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqRevista);
    let etiqRevista = document.createElement("label");
    etiqRevista.setAttribute("for", "tipoRevistaId");
    etiqRevista.innerHTML = "Revista *";
    celdaEtiqRevista.appendChild(etiqRevista);

    let celdaRevista = document.createElement("div");
    celdaRevista.setAttribute("id", "celdaRevistaId");
    contenedorFormulario.appendChild(celdaRevista);
    let valores = ["Ninguno", "Nombre: Dias del ayer ID: 2212121", "Nombre: Mar del Cortez ID: 5552121"];
    despliegaListaSel("celdaRevistaId", "tipoRevistaId", valores, valores, null);


    let celdaVacia2 = document.createElement("div");
    celdaVacia2.setAttribute("class", "span centrada");
    celdaVacia2.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia2);

//Cantidad


    let celdaEtiqCantidad = document.createElement("div");
    celdaEtiqCantidad.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqCantidad);
    let etiqCantidad = document.createElement("label");
    etiqCantidad.setAttribute("for", "cantidadId");
    etiqCantidad.innerHTML = "Cantidad *";
    celdaEtiqCantidad.appendChild(etiqCantidad);


    let celdaCantidadRevista = document.createElement("div");
    celdaCantidadRevista.setAttribute("id", "celdaCantidadRevistaId");
    contenedorFormulario.appendChild(celdaCantidadRevista);
    let campoCantidadRevista = document.createElement("input");
    campoCantidadRevista.setAttribute("type", "number");
    campoCantidadRevista.setAttribute("id", "cantidadId");
    campoCantidadRevista.setAttribute("name", "cantidad");
    campoCantidadRevista.setAttribute("maxlength", "9");
    campoCantidadRevista.setAttribute("min", "1");
    campoCantidadRevista.setAttribute("max", "999999999");
    campoCantidadRevista.setAttribute("placeholder", "123456789");
    campoCantidadRevista.setAttribute("size", "16");
    campoCantidadRevista.setAttribute("maxlength", "9");
    campoCantidadRevista.setAttribute("pattern", "^[1-9]\d*$");
    campoCantidadRevista.setAttribute("value", "1");
    campoCantidadRevista.setAttribute("required", "required");
    celdaCantidadRevista.appendChild(campoCantidadRevista);

    let celdaVacia3 = document.createElement("div");
    celdaVacia3.setAttribute("class", "span centrada");
    celdaVacia3.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia3);
    let celdaBoton = document.createElement("div");
    celdaBoton.setAttribute("class", "span centrada");
    contenedorFormulario.appendChild(celdaBoton);
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("class", "botones");
    boton.setAttribute("onclick", "despliegaInventarioRevistas()");
    boton.innerHTML = "Continuar";
    celdaBoton.appendChild(boton);
    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "reset");
    boton2.setAttribute("class", "botones");
    boton2.innerHTML = "Limpiar";
    celdaBoton.appendChild(boton2);
    let resultados = document.createElement("div");
    resultados.setAttribute("id", "resultadosId");
    padre.appendChild(resultados);
}

function despliegaInventarioRevistas() {
     borraHijos("mainId");
    let  revistas = [{ISBN: "22222", Existencia: "12", Disponibilidad: "11"}
        , {ISBN: "23322", Existencia: "12", Disponibilidad: "11"}
        , {ISBN: "22331211", Existencia: "13", Disponibilidad: "14"}];
    let encabezados = ["ISBN", "Existencia", "Disponibilidad"];
    let titulo = "Lista de Revistas";
    despliegaTabla("mainId", titulo, encabezados, revistas);
 
}
