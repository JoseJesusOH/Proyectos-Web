/* 
 * generos.js
 * 
 * Contiene las funciones que implementan las operaciones
 * con los generos
 */

var tipoMedio;
var cveGenero;

/**
 * Esta funcion despliega un formulario para capturar la 
 * clave de un genero a guardaren la BD generos.
 * 
 * Al hacer clic en el boton enviar se invoca a la funcion
 * obtenGenero() que realiza una solicitud asincrona al 
 * servidor para obtener el genero de la BD generos, con
 * la clave capturada
 */
function capturaCveGenero() {
    // Limpia la seccion main
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById("mainId");

    // Crea un titulo
    let titulo = document.createElement("h1");
    // Le agrega el texto al titulo
    titulo.innerHTML = "Captura Clave del Género";
    // Agrega el titulo a su elemento padre
    padre.appendChild(titulo); 
    
    // Crea un formulario
    let formulario = document.createElement("form");
    // Agrega el formulario a su elemento padre
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    // Establece el atributo class de la cuadricula
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    // Agrega la cuadricula al formulario
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta de la clave
    let celdaEtiqClave = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqClave.setAttribute("class", "derecha");
    // Agrega la celda a la cuadricula 
    contenedorFormulario.appendChild(celdaEtiqClave);
    
    // Crea una etiqueta de la clave del genero
    let etiqCveGenero = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqCveGenero.setAttribute("for", "campoCveGeneroId");
    // Le agrega el texto a la etiqueta
    etiqCveGenero.innerHTML = "Clave *";
    // Agrega la etiqueta a la celda 
    celdaEtiqClave.appendChild(etiqCveGenero);
    
    // Crea celda para campo de texto para capturar la clave del genero
    let celdaCveGenero = document.createElement("div");
    // Establece el atributo id de la celda
    celdaCveGenero.setAttribute("id", "celdaCveGeneroId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaCveGenero);

    // Crea un campo de entrada de texto para capturar 
    // la clave del genero
    let campoCveGenero = document.createElement("input");
    // Establece el atributo type del campo de entrada
    campoCveGenero.setAttribute("type", "text");
    // Establece el atributo id del campo de entrada
    campoCveGenero.setAttribute("id", "campoCveGeneroId");
    // Establece el atributo size del campo de entrada
    campoCveGenero.setAttribute("size", "7");
    campoCveGenero.setAttribute("title", "Tres letras may&uacute;sculas seguidas de 4 d&iacute;gitos");
    // Agrega la celda a la fila 
    celdaCveGenero.appendChild(campoCveGenero);

    // Crea una celda en blanco
    let celdaVacia = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia);

    // Crea una celda con boton enviar
    let celdaBoton = document.createElement("div");
    // Establece el atributo class de la tabla
    celdaBoton.setAttribute("class", "span centrada");
    // Agrega la tabla al formulario
    contenedorFormulario.appendChild(celdaBoton);

    // Crea un boton
    let boton = document.createElement("button");
    // Establece el atributo type del boton
    boton.setAttribute("type", "button");
    // Establece el nombre de la funcion
    boton.setAttribute("onclick", "obtenGenero()");
    // Establece el texto del boton
    boton.innerHTML = "Enviar";
    // Agrega el boton
    celdaBoton.appendChild(boton);

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia2.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia2.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    // Establece el atributo id de la seccion
    resultados.setAttribute("id", "resultadosId");
    // Agrega la celda a la fila 
    padre.appendChild(resultados);
}

/**
 * Esta funcion realiza una solicitud asincrona al servidor
 * para obtener un genero de la BD generos.
 * El servlet que atiende la solicitud es obtenGenero.
 */
function obtenGenero() {
    // Obtiene el valor capturado en el campo de entrada campoCveGenero
    // del formulario desplegado por la funcion capturaCveGenero()
    cveGenero = document.getElementById("campoCveGeneroId").value;

    // Se invoca al método fetch() para hacer la solicitud
    // asincrona para obtener la lista de generos de la BD.
    // El metodo fech() le hace la solicitud al servlet
    // obtenGenero.
    fetch('obtenGenero?cveGenero=' + cveGenero)
        // Establece la funcion a llamar en caso que
        // el servidor pueda atender la solicitud con
        // exito
        .then(procesaRespuestaObtenGenero)
        // Establece la funcion a llamar en caso que
        // el servidor no pueda atender la solicitud 
        // con exito
        .catch(muestraError);
}

/**
 * Esta funcion procesa la respuesta del servidor
 * a la solicitud asincrona de obtener un genero
 * @param {type} response Respuesta del servidor a la
 * solicitud hecha con la funcion obtenGenero()
 * @returns {undefined}
 */
function procesaRespuestaObtenGenero(response) {
    // Despliega en la consola del navegador si
    // la solicitud al servidor tuvo exito o no
    console.log('response.ok: ', response.ok);
    if (response.ok) {
        // Si el cuerpo de la respuesta pudo convertirse
        // de JSON a JavaScript invoca a la funcion
        // despliegaGeneros
        response.json().then(despliegaGenero);
    } else {
        muestraError('Codigo de status: ' + response.status
                + ' Descripcion: ' + response.statusText);
    }
}

/**
 * Esta funcion despliega los atributos del genero obtenido
 * asincronamente del servidor, si el genero existe. En caso
 * contrario invoca a la funcion capturaGenero() que despliega un
 * formulario para capturar los datos de un genero a
 * agregar a la BD generos  
 * 
 * @param {type} genero Objeto JavaScript que representa
 * un genero. Si el genero no existe, el objeto esta vacio.
 * @returns {undefined}
 */
function despliegaGenero(genero) {
    // Limpia la seccion de resultados
    borraHijos("resultadosId");

    if (Object.keys(genero).length === 0) {
        // Si el objeto genero está vacio, no existe
        capturaGenero();
    }
    else {
        // Si el genero existe
        // Establece el titulo de la tabla
        let titulo = "Genero Repetido";

        // Arreglo con los encabezados de la tabla del genero
        let encabezados = ["Clave", "Nombre", "Tipo Medio"];

        // Despliega la tabla con el genero
        despliegaObjeto("resultadosId", titulo, encabezados, genero);
    } 
}

/**
 * Esta funcion despliega un formulario para capturar  
 * un genero a guardar en la BD generos.
 * 
 * Al hacer clic en el boton enviar se invoca a la funcion
 * agregarGenero() que realiza una solicitud asincrona al 
 * servidor para agregar el genero capturado a la BD generos
 */
function capturaGenero() {
    // Limpia la seccion main
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById("mainId");

    // Crea un titulo
    let titulo = document.createElement("h1");
    // Le agrega el texto al titulo
    titulo.innerHTML = "Captura Género";
    // Agrega el titulo a su elemento padre
    padre.appendChild(titulo); 

    // Crea un formulario
    let formulario = document.createElement("form");
    // Agrega el formulario a su elemento padre
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    // Establece el atributo class de la tabla
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    // Agrega la tabla al formulario
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta de la clave
    let celdaEtiqClave = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqClave.setAttribute("class", "derecha");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaEtiqClave);

    // Crea una etiqueta de la clave del genero
    let etiqCveGenero = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqCveGenero.setAttribute("for", "campoCveGeneroId");
    // Le agrega el texto a la etiqueta
    etiqCveGenero.innerHTML = "Clave *";
    // Agrega la etiqueta a la celda 
    celdaEtiqClave.appendChild(etiqCveGenero);

    // Crea celda para campo de texto para capturar la clave del genero
    let celdaCveGenero = document.createElement("div");
    // Establece el atributo id de la celda
    celdaCveGenero.setAttribute("id", "celdaCveGeneroId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaCveGenero);

    // Crea un campo de entrada de texto para capturar 
    // la clave del genero
    let campoCveGenero = document.createElement("input");
    // Establece el atributo type del campo de entrada
    campoCveGenero.setAttribute("type", "text");
    // Establece el atributo id del campo de entrada
    campoCveGenero.setAttribute("id", "campoCveGeneroId");
    // Establece el atributo size del campo de entrada
    campoCveGenero.setAttribute("size", "7");
    campoCveGenero.setAttribute("title", "Tres letras may&uacute;sculas seguidas de 4 d&iacute;gitos");
    // Establece el atributo readonly del campo de entrada
    campoCveGenero.setAttribute("readonly", "readonly");
    campoCveGenero.setAttribute("value", cveGenero);
    // Agrega la celda a la fila 
    celdaCveGenero.appendChild(campoCveGenero);

    // Crea celda para la etiqueta del nombre
    let celdaEtiqNombre = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqNombre.setAttribute("class", "derecha");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaEtiqNombre);

    // Crea una etiqueta del nombre del genero
    let etiqNombre = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqNombre.setAttribute("for", "campoNombreId");
    // Le agrega el texto a la etiqueta
    etiqNombre.innerHTML = "Nombre *";
    // Agrega la etiqueta a la celda 
    celdaEtiqNombre.appendChild(etiqNombre);

    // Crea celda para campo de texto para capturar el nombre del genero
    let celdaNombre = document.createElement("div");
    // Establece el atributo id de la celda
    celdaNombre.setAttribute("id", "celdaNombreId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaNombre);

    // Crea un campo de entrada de texto para capturar 
    // el nombre del genero
    let campoNombre = document.createElement("input");
    // Establece el atributo type del campo de entrada
    campoNombre.setAttribute("type", "text");
    // Establece el atributo id del campo de entrada
    campoNombre.setAttribute("id", "campoNombreId");
    // Establece el atributo size del campo de entrada
    campoNombre.setAttribute("size", "20");
    // Establece el atributo maxlength del campo de entrada
    campoNombre.setAttribute("maxlength", "20");
    // Establece el atributo title del campo de entrada
    campoNombre.setAttribute("title", "M&aacute;ximo 20 caracteres");
    // Agrega la celda a la fila 
    celdaNombre.appendChild(campoNombre);

    // Crea celda para la etiqueta del tipo de genero
    let celdaEtiqTipo = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqTipo.setAttribute("class", "derecha");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaEtiqTipo);

    // Crea una etiqueta del tipo del genero
    let etiqTipo = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqTipo.setAttribute("for", "tipoMedioId");
    // Le agrega el texto a la etiqueta
    etiqTipo.innerHTML = "Tipo del medio *";
    // Agrega la etiqueta a la celda 
    celdaEtiqTipo.appendChild(etiqTipo);

    // Crea celda para campo de texto para capturar el tipo del genero
    let celdaTipo = document.createElement("div");
    // Establece el atributo id de la celda
    celdaTipo.setAttribute("id", "celdaTipoId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaTipo);

    // Agrega una lista de seleccion para seleccionar
    // el tipo de medio del genero a listar
    let valores = ["Canciones", "Peliculas"];
    despliegaListaSel("celdaTipoId", "tipoMedioId", valores, valores, null);

    // Crea una celda en blanco
    let celdaVacia = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia);

    // Crea una celda con boton enviar
    let celdaBoton = document.createElement("div");
    // Establece el atributo class de la tabla
    celdaBoton.setAttribute("class", "span centrada");
    // Agrega la tabla al formulario
    contenedorFormulario.appendChild(celdaBoton);

    // Crea un boton
    let boton = document.createElement("button");
    // Establece el atributo type del boton
    boton.setAttribute("type", "button");
    // Establece el nombre de la funcion

    boton.setAttribute("onclick", "agregarGenero()");
    // Establece el texto del boton
    boton.innerHTML = "Enviar";
    // Agrega el boton
    celdaBoton.appendChild(boton);

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia2.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia2.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    // Establece el atributo id de la seccion
    resultados.setAttribute("id", "resultadosId");
    // Agrega la celda a la fila 
    padre.appendChild(resultados);
}

/**
 * Esta funcion realiza una solicitud asincrona al servidor
 * para agregar un genero a la BD generos.
 * El servlet que atiende la solicitud es agregaGenero.
 */
function agregarGenero() {
    // Obtiene los valores capturados en los campo de entrada 
    // campoCveGenero y campoNombre en el formulario desplegado
    // por la funcion capturaGenero()
    cveGenero = document.getElementById("campoCveGeneroId").value;
    nombre = document.getElementById("campoNombreId").value;
    // Obtiene el valor seleccionado en la lista de seleccion del
    // tipo de medio en el formulario desplegado en la funcion
    // listarGeneros()
    tipoMedio = document.getElementById("tipoMedioId").value;

    // Se invoca al método fetch() para hacer la solicitud
    // asincrona para agregar un genero a la BD generos.
    // El metodo fech() le hace la solicitud al servlet
    // agregaGenero.
    fetch('agregaGenero?cveGenero=' + cveGenero
          + '&nombre=' + nombre + '&tipoMedio=' + tipoMedio)
        // Establece la funcion a llamar en caso que
        // el servidor pueda atender la solicitud con
        // exito
        .then(procesaRespuestaObtenGeneros)
        // Establece la funcion a llamar en caso que
        // el servidor no pueda atender la solicitud 
        // con exito
        .catch(muestraError);
}

/**
 * Esta funcion despliega un formulario para capturar el tipo 
 * de medio de los generos a listar.
 * 
 * Al hacer clic en el boton enviar se invoca a la funcion
 * obtenGeneros()
 */
function listarGeneros() {
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara el formulario.
    let padre = document.getElementById("mainId");

    // Crea un titulo
    let titulo = document.createElement("h1");
    // Le agrega el texto al titulo
    titulo.innerHTML = "Lista de Géneros";
    // Agrega el titulo a su elemento padre
    padre.appendChild(titulo); 
    
    // Crea un formulario
    let formulario = document.createElement("form");
    // Agrega el formulario a su elemento padre
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    // Establece el atributo class de la tabla
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    // Agrega la tabla al formulario
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta del tipo de genero
    let celdaEtiqTipo = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqTipo.setAttribute("class", "derecha");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaEtiqTipo);

    // Crea una etiqueta del tipo del genero
    let etiqTipo = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqTipo.setAttribute("for", "tipoMedioId");
    // Le agrega el texto a la etiqueta
    etiqTipo.innerHTML = "Tipo del medio *";
    // Agrega la etiqueta a la celda 
    celdaEtiqTipo.appendChild(etiqTipo);

    // Crea celda para campo de texto para capturar el tipo del genero
    let celdaTipo = document.createElement("div");
    // Establece el atributo class de la celda
    celdaTipo.setAttribute("class", "celda");
    // Establece el atributo id de la celda
    celdaTipo.setAttribute("id", "celdaTipoId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaTipo);

    // Agrega una lista de seleccion para seleccionar
    // el tipo de medio del genero a listar
    let valores = ["Todos", "Canciones", "Peliculas"];
    let sel = "Todos";
    despliegaListaSel("celdaTipoId", "tipoMedioId", valores, valores, sel);

    // Crea una celda en blanco
    let celdaVacia = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia);

    // Crea una celda con boton enviar
    let celdaBoton = document.createElement("div");
    // Establece el atributo class de la tabla
    celdaBoton.setAttribute("class", "span centrada");
    // Agrega la tabla al formulario
    contenedorFormulario.appendChild(celdaBoton);

    // Crea un boton
    let boton = document.createElement("button");
    // Establece el atributo type del boton
    boton.setAttribute("type", "button");
    // Establece el nombre de la funcion

    boton.setAttribute("onclick", "obtenGeneros()");
    // Establece el texto del boton
    boton.innerHTML = "Enviar";
    // Agrega el boton
    celdaBoton.appendChild(boton);

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia2.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia2.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    // Establece el atributo id de la seccion
    resultados.setAttribute("id", "resultadosId");
    // Agrega la celda a la fila 
    padre.appendChild(resultados);
}

/**
 * Esta funcion realiza una solicitud asincrona
 * al servidor para obtener la lista de generos
 */
function obtenGeneros() {
    // Obtiene el valor seleccionado en la lista de seleccion del
    // tipo de medio en el formulario desplegado en la funcion
    // listarGeneros()
    tipoMedio = document.getElementById("tipoMedioId").value;

    // Se invoca al método fetch() para hacer la solicitud
    // asincrona para obtener la lista de generos de la BD.
    // El metodo fech() le hace la solicitud al servlet
    // obtenGeneros.
    fetch('obtenGeneros?tipoMedio=' + tipoMedio)
            // Establece la funcion a llamar en caso que
            // el servidor pueda atender la solicitud con
            // exito
            .then(procesaRespuestaObtenGeneros)
            // Establece la funcion a llamar en caso que
            // el servidor no pueda atender la solicitud 
            // con exito
            .catch(muestraError);
}

/**
 * Esta funcion procesa la respuesta del servidor
 * a la solicitud asincrona de obtener los generos
 * @param {type} response Respuesta del servidor a la
 * solicitud hecha con la funcion obtenGeneros()
 * @returns {undefined}
 */
function procesaRespuestaObtenGeneros(response) {
    // Despliega en la consola del navegador si
    // la solicitud al servidor tuvo exito o no
    console.log('response.ok: ', response.ok);
    if (response.ok) {
        // Si el cuerpo de la respuesta pudo convertirse
        // de JSON a JavaScript invoca a la funcion
        // despliegaGeneros
        response.json().then(despliegaGeneros);
    } else {
        muestraError('Codigo de status: ' + response.status
                + ' Descripcion: ' + response.statusText);
    }
}

/**
 * Esta funcion despliega la lista de generos obtenida 
 * asincronamente del servidor.  
 * @param {type} generos Arreglo JavaScript con la lista 
 * de generos
 * @returns {undefined}
 */
function despliegaGeneros(generos) {
    // Limpia la seccion de resultados
    borraHijos("resultadosId");

    // Establece el titulo de la tabla de acuerdo al tipo de
    // medio de los generos de la lista
    let titulo = null;
    switch (tipoMedio) {
        case "Todos":
            titulo = "Todos los Géneros";
            break;
        case "Canciones":
            titulo = "Generos de canciones";
            break;
        case "Peliculas":
            titulo = "Generos de Peliculas";
            break;
    }

    // Arreglo con los encabezados de la tabla de la lista
    // de generos
    let encabezados = ["Clave", "Nombre", "Tipo Medio"];

    // Despliega una tabla con los atributos de los generos
    despliegaTabla("resultadosId", titulo, encabezados, generos);
}



