/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function capturaIsbn() {


    borraHijos("mainId");
    let padre = document.getElementById("mainId");
    let titulo = document.createElement("h1");
    titulo.innerHTML = "Agregar Revista";
    padre.appendChild(titulo);

    let formulario = document.createElement("form");
    padre.appendChild(formulario);

    let contenedorFormulario = document.createElement("div");
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    formulario.appendChild(contenedorFormulario);

    let celdaEtiqISBN = document.createElement("div");
    celdaEtiqISBN.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqISBN);

    let etiqISBNRevista = document.createElement("label");
    etiqISBNRevista.setAttribute("for", "campoISBNRevistaId");
    etiqISBNRevista.innerHTML = "ISBN *";
    celdaEtiqISBN.appendChild(etiqISBNRevista);

    let celdaISBNRevista = document.createElement("div");
    celdaISBNRevista.setAttribute("id", "celdaISBNRevistaId");
    contenedorFormulario.appendChild(celdaISBNRevista);

    let campoISBNRevista = document.createElement("input");
    campoISBNRevista.setAttribute("type", "text");
    campoISBNRevista.setAttribute("id", "isbnId");
    campoISBNRevista.setAttribute("name", "isbn");
    campoISBNRevista.setAttribute("size", "13");
    campoISBNRevista.setAttribute("value", "1");
    campoISBNRevista.setAttribute("min", "1");
    campoISBNRevista.setAttribute("pattern", "^[0-9]+");
    campoISBNRevista.setAttribute("maxlength", "13");
    campoISBNRevista.setAttribute("required", "required");
    campoISBNRevista.setAttribute("placeholder", "1234567891234");
    campoISBNRevista.setAttribute("title", "Entero positivo de 13 cifras maximo");
    celdaISBNRevista.appendChild(campoISBNRevista);


    let celdaVacia = document.createElement("div");
    celdaVacia.setAttribute("class", "span centrada");
    celdaVacia.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia);

    let celdaBoton = document.createElement("div");
    celdaBoton.setAttribute("class", "span centrada");
    contenedorFormulario.appendChild(celdaBoton);

    let boton = document.createElement("button");
    boton.setAttribute("type", "click");
    boton.setAttribute("class", "botones");
    boton.setAttribute("onclick", "capturaRevista()");
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


function capturaRevista() {
    isbnRevista = document.getElementById("isbnId").value;
    borraHijos("mainId");
    let padre = document.getElementById("mainId");
    let titulo = document.createElement("h1");
    titulo.innerHTML = "Capturar Revista";
    padre.appendChild(titulo);

    let formulario = document.createElement("form");
    padre.appendChild(formulario);

    let contenedorFormulario = document.createElement("div");
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    formulario.appendChild(contenedorFormulario);

//ISBN
    let celdaEtiqISBN = document.createElement("div");
    celdaEtiqISBN.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqISBN);
    let etiqISBNRevista = document.createElement("label");
    etiqISBNRevista.setAttribute("for", "campoISBNRevistaId");
    etiqISBNRevista.innerHTML = "ISBN *:";
    celdaEtiqISBN.appendChild(etiqISBNRevista);

    let celdaISBNRevista = document.createElement("div");
    celdaISBNRevista.setAttribute("id", "celdaISBNRevistaId");
    contenedorFormulario.appendChild(celdaISBNRevista);

    let campoISBNRevista = document.createElement("input");
    campoISBNRevista.setAttribute("type", "text");
    campoISBNRevista.setAttribute("id", "isbnId");
    campoISBNRevista.setAttribute("name", "isbn");
    campoISBNRevista.setAttribute("size", "20");
    campoISBNRevista.setAttribute("value", isbnRevista);
    campoISBNRevista.setAttribute("readonly", "readonly");
    celdaISBNRevista.appendChild(campoISBNRevista);


    let celdaVacia = document.createElement("div");
    celdaVacia.setAttribute("class", "span centrada");
    celdaVacia.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia);



//Titulo
    let celdaTituloR = document.createElement("div");
    celdaTituloR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaTituloR);
    let etiqTituloR = document.createElement("label");
    etiqTituloR.setAttribute("for", "campoTituloRId");
    etiqTituloR.innerHTML = "Titulo *:";
    celdaTituloR.appendChild(etiqTituloR);

    let celdaTituloRevista = document.createElement("div");
    celdaTituloRevista.setAttribute("id", "celdaTituloRevistaId");
    contenedorFormulario.appendChild(celdaTituloRevista);

    let campoTituloRevista = document.createElement("input");
    campoTituloRevista.setAttribute("type", "text");
    campoTituloRevista.setAttribute("id", "tituloId");
    campoTituloRevista.setAttribute("name", "titulo");
    campoTituloRevista.setAttribute("maxlength", "50");
    campoTituloRevista.setAttribute("required", "required");
    celdaTituloRevista.appendChild(campoTituloRevista);



    let celdaVacia2 = document.createElement("div");
    celdaVacia2.setAttribute("class", "span centrada");
    celdaVacia2.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia2);

//Editorial 
    let celdaEditorialR = document.createElement("div");
    celdaEditorialR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEditorialR);
    let etiqEditorialR = document.createElement("label");
    etiqEditorialR.setAttribute("for", "EditorialRId");
    etiqEditorialR.innerHTML = "Editorial *:";
    celdaEditorialR.appendChild(etiqEditorialR);

    /*
     
     */

    let celdaEditorialRevista = document.createElement("div");
    celdaEditorialRevista.setAttribute("id", "celdaEditorialRevistaId");
    contenedorFormulario.appendChild(celdaEditorialRevista);

    let campoEditorialRevista = document.createElement("input");
    campoEditorialRevista.setAttribute("type", "text");
    campoEditorialRevista.setAttribute("id", "editorialId");
    campoEditorialRevista.setAttribute("name", "editorial");
    campoEditorialRevista.setAttribute("maxlength", "35");
    campoEditorialRevista.setAttribute("required", "required");
    celdaEditorialRevista.appendChild(campoEditorialRevista);


    let celdaVacia3 = document.createElement("div");
    celdaVacia3.setAttribute("class", "span centrada");
    celdaVacia3.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia3);

//ClasificacionR
    let celdaClasificacionR = document.createElement("div");
    celdaClasificacionR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaClasificacionR);
    let etiqClasificacionR = document.createElement("label");
    etiqClasificacionR.setAttribute("for", "ClasificacionRId");
    etiqClasificacionR.innerHTML = "Clasificacion *:";
    celdaClasificacionR.appendChild(etiqClasificacionR);


    let celdaClasificacionRevista = document.createElement("div");
    celdaClasificacionRevista.setAttribute("id", "celdaClasificacionRevistaId");
    contenedorFormulario.appendChild(celdaClasificacionRevista);

    let campoClasificacionRevista = document.createElement("input");
    campoClasificacionRevista.setAttribute("type", "text");
    campoClasificacionRevista.setAttribute("id", "clasificacionId");
    campoClasificacionRevista.setAttribute("name", "clasifiacion");
    campoClasificacionRevista.setAttribute("maxlength", "20");
    campoClasificacionRevista.setAttribute("required", "required");
    celdaClasificacionRevista.appendChild(campoClasificacionRevista);


    let celdaVacia4 = document.createElement("div");
    celdaVacia4.setAttribute("class", "span centrada");
    celdaVacia4.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia4);

//PeriocidadR
    let celdaPeriocidadR = document.createElement("div");
    celdaPeriocidadR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaPeriocidadR);
    let etiqPeriocidadR = document.createElement("label");
    etiqPeriocidadR.setAttribute("for", "PeriocidadRId");
    etiqPeriocidadR.innerHTML = "Periocidad:";
    celdaPeriocidadR.appendChild(etiqPeriocidadR);


    let celdaPeriocidadRevista = document.createElement("div");
    celdaPeriocidadRevista.setAttribute("id", "celdaPeriocidadRevistaId");
    contenedorFormulario.appendChild(celdaPeriocidadRevista);

    let campoPeriocidadRevista = document.createElement("input");
    campoPeriocidadRevista.setAttribute("type", "text");
    campoPeriocidadRevista.setAttribute("id", "periocidadId");
    campoPeriocidadRevista.setAttribute("name", "periocidad");
    campoPeriocidadRevista.setAttribute("maxlength", "20");
    celdaPeriocidadRevista.appendChild(campoPeriocidadRevista);


    let celdaVacia5 = document.createElement("div");
    celdaVacia5.setAttribute("class", "span centrada");
    celdaVacia5.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia5);

//FechaR
    let celdaFechaR = document.createElement("div");
    celdaFechaR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaFechaR);
    let etiqFechaR = document.createElement("label");
    etiqFechaR.setAttribute("for", "FechaRId");
    etiqFechaR.innerHTML = "Fecha: ";
    celdaFechaR.appendChild(etiqFechaR);

    let celdaFechaRevista = document.createElement("div");
    celdaFechaRevista.setAttribute("id", "celdaFechaRevistaId");
    contenedorFormulario.appendChild(celdaFechaRevista);

    let campoFechaRevista = document.createElement("input");
    campoFechaRevista.setAttribute("id", "fechaId");
    campoFechaRevista.setAttribute("name", "fecha");
    campoFechaRevista.setAttribute("type", "date");
    celdaFechaRevista.appendChild(campoFechaRevista);


    let celdaVacia6 = document.createElement("div");
    celdaVacia6.setAttribute("class", "span centrada");
    celdaVacia6.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia6);

    let celdaBoton = document.createElement("div");
    celdaBoton.setAttribute("class", "span centrada");
    contenedorFormulario.appendChild(celdaBoton);

    let boton = document.createElement("button");
    boton.setAttribute("type", "click");
    boton.setAttribute("class", "botones");
    boton.setAttribute("onclick", "despliegaRevistas()");
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

function despliegaRevista() {
    isbnRevista = "1234567789";
    tituloRevista = "Dias del ayer";
    editorialRevista = "Mar de Cortez";
    clasificacionRevista = "Para Adultos";
    periocidadRevista = "Diaria";
    fechaRevista = new Date("11/11/2022");

    borraHijos("mainId");
    let padre = document.getElementById("mainId");
    let titulo = document.createElement("h1");
    titulo.innerHTML = "Capturar Revista";
    padre.appendChild(titulo);

    let formulario = document.createElement("form");
    padre.appendChild(formulario);

    let contenedorFormulario = document.createElement("div");
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    formulario.appendChild(contenedorFormulario);

//ISBN
    let celdaEtiqISBN = document.createElement("div");
    celdaEtiqISBN.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqISBN);
    let etiqISBNRevista = document.createElement("label");
    etiqISBNRevista.setAttribute("for", "campoISBNRevistaId");
    etiqISBNRevista.innerHTML = "ISBN *:";
    celdaEtiqISBN.appendChild(etiqISBNRevista);

    let celdaISBNRevista = document.createElement("div");
    celdaISBNRevista.setAttribute("id", "celdaISBNRevistaId");
    contenedorFormulario.appendChild(celdaISBNRevista);

    let campoISBNRevista = document.createElement("input");
    campoISBNRevista.setAttribute("type", "text");
    campoISBNRevista.setAttribute("id", "isbnId");
    campoISBNRevista.setAttribute("name", "isbn");
    campoISBNRevista.setAttribute("size", "20");
    campoISBNRevista.setAttribute("value", isbnRevista);
    campoISBNRevista.setAttribute("readonly", "readonly");
    celdaISBNRevista.appendChild(campoISBNRevista);


    let celdaVacia = document.createElement("div");
    celdaVacia.setAttribute("class", "span centrada");
    celdaVacia.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia);



//Titulo
    let celdaTituloR = document.createElement("div");
    celdaTituloR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaTituloR);
    let etiqTituloR = document.createElement("label");
    etiqTituloR.setAttribute("for", "campoTituloRId");
    etiqTituloR.innerHTML = "Titulo *:";
    celdaTituloR.appendChild(etiqTituloR);

    let celdaTituloRevista = document.createElement("div");
    celdaTituloRevista.setAttribute("id", "celdaTituloRevistaId");
    contenedorFormulario.appendChild(celdaTituloRevista);

    let campoTituloRevista = document.createElement("input");
    campoTituloRevista.setAttribute("type", "text");
    campoTituloRevista.setAttribute("id", "tituloId");
    campoTituloRevista.setAttribute("name", "titulo");
    campoTituloRevista.setAttribute("maxlength", "50");
    campoTituloRevista.setAttribute("value", tituloRevista);
    campoTituloRevista.setAttribute("readonly", "readonly");
    celdaTituloRevista.appendChild(campoTituloRevista);



    let celdaVacia2 = document.createElement("div");
    celdaVacia2.setAttribute("class", "span centrada");
    celdaVacia2.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia2);

//Editorial 
    let celdaEditorialR = document.createElement("div");
    celdaEditorialR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEditorialR);
    let etiqEditorialR = document.createElement("label");
    etiqEditorialR.setAttribute("for", "EditorialRId");
    etiqEditorialR.innerHTML = "Editorial *:";
    celdaEditorialR.appendChild(etiqEditorialR);

    /*
     
     */

    let celdaEditorialRevista = document.createElement("div");
    celdaEditorialRevista.setAttribute("id", "celdaEditorialRevistaId");
    contenedorFormulario.appendChild(celdaEditorialRevista);

    let campoEditorialRevista = document.createElement("input");
    campoEditorialRevista.setAttribute("type", "text");
    campoEditorialRevista.setAttribute("id", "editorialId");
    campoEditorialRevista.setAttribute("name", "editorial");
    campoEditorialRevista.setAttribute("maxlength", "35");
    campoEditorialRevista.setAttribute("value", editorialRevista);
    campoEditorialRevista.setAttribute("readonly", "readonly");
    celdaEditorialRevista.appendChild(campoEditorialRevista);


    let celdaVacia3 = document.createElement("div");
    celdaVacia3.setAttribute("class", "span centrada");
    celdaVacia3.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia3);

//ClasificacionR
    let celdaClasificacionR = document.createElement("div");
    celdaClasificacionR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaClasificacionR);
    let etiqClasificacionR = document.createElement("label");
    etiqClasificacionR.setAttribute("for", "ClasificacionRId");
    etiqClasificacionR.innerHTML = "Clasificacion *:";
    celdaClasificacionR.appendChild(etiqClasificacionR);


    let celdaClasificacionRevista = document.createElement("div");
    celdaClasificacionRevista.setAttribute("id", "celdaClasificacionRevistaId");
    contenedorFormulario.appendChild(celdaClasificacionRevista);

    let campoClasificacionRevista = document.createElement("input");
    campoClasificacionRevista.setAttribute("type", "text");
    campoClasificacionRevista.setAttribute("id", "clasificacionId");
    campoClasificacionRevista.setAttribute("name", "clasifiacion");
    campoClasificacionRevista.setAttribute("maxlength", "20");
    campoClasificacionRevista.setAttribute("value", clasificacionRevista);
    campoClasificacionRevista.setAttribute("readonly", "readonly");
    celdaClasificacionRevista.appendChild(campoClasificacionRevista);


    let celdaVacia4 = document.createElement("div");
    celdaVacia4.setAttribute("class", "span centrada");
    celdaVacia4.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia4);

//PeriocidadR
    let celdaPeriocidadR = document.createElement("div");
    celdaPeriocidadR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaPeriocidadR);
    let etiqPeriocidadR = document.createElement("label");
    etiqPeriocidadR.setAttribute("for", "PeriocidadRId");
    etiqPeriocidadR.innerHTML = "Periocidad:";
    celdaPeriocidadR.appendChild(etiqPeriocidadR);


    let celdaPeriocidadRevista = document.createElement("div");
    celdaPeriocidadRevista.setAttribute("id", "celdaPeriocidadRevistaId");
    contenedorFormulario.appendChild(celdaPeriocidadRevista);

    let campoPeriocidadRevista = document.createElement("input");
    campoPeriocidadRevista.setAttribute("type", "text");
    campoPeriocidadRevista.setAttribute("id", "periocidadId");
    campoPeriocidadRevista.setAttribute("name", "periocidad");
    campoPeriocidadRevista.setAttribute("maxlength", "20");
    campoPeriocidadRevista.setAttribute("value", periocidadRevista);
    campoPeriocidadRevista.setAttribute("readonly", "readonly");
    celdaPeriocidadRevista.appendChild(campoPeriocidadRevista);


    let celdaVacia5 = document.createElement("div");
    celdaVacia5.setAttribute("class", "span centrada");
    celdaVacia5.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia5);

//FechaR
    let celdaFechaR = document.createElement("div");
    celdaFechaR.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaFechaR);
    let etiqFechaR = document.createElement("label");
    etiqFechaR.setAttribute("for", "FechaRId");
    etiqFechaR.innerHTML = "Fecha: ";
    celdaFechaR.appendChild(etiqFechaR);

    let celdaFechaRevista = document.createElement("div");
    celdaFechaRevista.setAttribute("id", "celdaFechaRevistaId");
    contenedorFormulario.appendChild(celdaFechaRevista);

    let campoFechaRevista = document.createElement("input");
    campoFechaRevista.setAttribute("type", "text");
    campoFechaRevista.setAttribute("id", "fechaId");
    campoFechaRevista.setAttribute("name", "fecha");
    campoFechaRevista.setAttribute("value", fechaRevista.toString());
    campoFechaRevista.setAttribute("readonly", "readonly");
    celdaFechaRevista.appendChild(campoFechaRevista);


    let resultados = document.createElement("div");
    resultados.setAttribute("id", "resultadosId");
    padre.appendChild(resultados);
}

function despliegaRevistas() {
      borraHijos("mainId");
    let  revistas = [
        {ISBN: "22222", Titulo: "Dias del ayer", Editorial: "Mar de Cortez", Clasificacion: "Adultos", Periocidad: "Diaria", Fecha: "11/11/2022"}
        , {ISBN: "22222", Titulo: "Dias del ayer", Editorial: "Mar de Cortez", Clasificacion: "Adultos", Periocidad: "Diaria", Fecha: "11/11/2022"}
        , {ISBN: "22222", Titulo: "Dias del ayer", Editorial: "Mar de Cortez", Clasificacion: "Adultos", Periocidad: "Diaria", Fecha: "11/11/2022"}];
    let encabezados = ["ISBN", "Título", "Editorial", "Clasificación", "Periocidad", "Fecha"];
    let titulo = "Lista de Revistas";
    despliegaTabla("mainId", titulo, encabezados, revistas);
}


