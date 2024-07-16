/* 
 * utils.js
 * 
 * Contiene funciones para eliminar los elementos hijos de
 * un elemento HTML, desplegar una barra de botones que
 * representan un menu, desplegar una tabla con los
 * valores de los miembros de un arreglo de objetos, 
 * desplegar una lista de seleccion, desplegar una tabla
 * con los atributos de un objeto. desplegar una tabla
 * con la primera columna conteniendo casillas de verificacion
 */

/**
 * Esta funcion elimina todos los elementos hijos del
 * elemento de Id del parametro.
 * 
 * @param {string} elementoID Id del elemento del que se
 * borraran los hijos
 */
function borraHijos(elementoID) {
    // Obten el elemento del que se van a eliminar los hijos
    let elemento = document.getElementById(elementoID);
    // Mientras el elemeno tenga hijos, eliminalos
    while (elemento.hasChildNodes()) {
        elemento.removeChild(elemento.firstChild);
    }
}

/**
 * Esta funcion despliega un menu consistente de botones.
 * 
 * @param {string} padreId Id del elemento dentro del que 
 * se insertaran los botones del menu.
 * @param {arreglo de string} items Arreglo con los textos
 * a desplegar en los botones del menu.
 * @param {arreglo de funciones} funciones Arreglo con los
 * nombres de las funciones que implementan las operaciones
 * del menu 
 */
function despliegaMenu(padreId, items, funciones) {
    // Obten el elemento dentro del que se insertaran los 
    // botones del menu.
    let padre = document.getElementById(padreId);

    // Para cada opcion del menu
    for (let i = 0; i < items.length; i++) {
        // Crea el boton
        let boton = document.createElement("button");
        // Establece el atributo type del boton
        boton.setAttribute("type", "button");
        // Establece el nombre de la funcion 
        boton.setAttribute("onclick", funciones[i]);
        // Establece el texto del boton
        boton.innerHTML = items[i];
        // Agrega el boton
        padre.appendChild(boton);
    }
}

/**
 * Despliega una tabla con datos
 * 
 * @param {string} padreId Id del elemento dentro del que 
 * se desplegara la tabla. 
 * @param {string} titulo Titulo de la tabla
 * @param {arreglo de string} encabezados Encabezados de las
 * columnas de la tabla
 * @param {arreglo de objetos} datos Arreglo de objetos cuyos 
 * miembros se desplegaran en la tabla
 */
function despliegaTabla(padreId, titulo, encabezados, datos) {
    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById(padreId);

    // Crea la tabla
    let tabla = document.createElement("table");
    // Establece el atributo class de la tabla
    tabla.setAttribute("class", "bicolor");
    // Agrega la tabla a su elemento padre
    padre.appendChild(tabla);

    // Crea el titulo de la tabla
    let tituloTabla = document.createElement("caption");
    // Le agrega el texto al titulo
    tituloTabla.innerHTML = titulo;
    // Agrega el titulo a la tabla
    tabla.appendChild(tituloTabla);

    // Crea el renglon para los encabezados
    let renglonEncabezados = document.createElement("tr");
    // Agrega el renglon de encabezados a la tabla
    tabla.appendChild(renglonEncabezados);

    // Para cada encabezado
    for (let encabezado of encabezados) {
        // Crea una celda de encabezado
        let celdaEncabezado = document.createElement("th");
        // Establece el texto del encabezado
        celdaEncabezado.innerHTML = encabezado;
        // Agrega la celda al renglon
        renglonEncabezados.appendChild(celdaEncabezado);
    }

    // Para cada objeto del arreglo de datos
    for (let dato of datos) {
        // Crea un renglon
        let renglon = document.createElement("tr");
        // agrega el renglon a la tabla
        tabla.appendChild(renglon);

        // Para cada miembro de cada objeto
        for (let llave in dato) {
            // Crea una celda
            let celda = document.createElement("td");
            // Agrega el texto de la celda
            celda.innerHTML = dato[llave];
            // Agrega la celda al renglon
            renglon.appendChild(celda);
        }
    }
}

/**
 * Despliega una lista de seleccion select
 * 
 * @param {string} padreId Id del elemento dentro del que 
 * se desplegara la lista de seleccion. 
 * @param {string} listaId Atributo Id que se le asignara a la lista 
 * @param {arreglo de string} opciones Arreglo con los textos a 
 * desplegar en cada opcion
 * @param {arreglo de string} valores Arreglo con los valores de
 * los atributos value de cada uno de los elementos <option> de
 * la lista
 * @param {string} sel Opcion de la lista de seleccion seleccionada por
 * omision
 */
function despliegaListaSel(padreId, listaId, opciones, valores, sel) {
    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById(padreId);

    // Crea la lista
    let lista = document.createElement("select");
    // Establece el atributo value de la lista
    lista.setAttribute("id", listaId);
    // Agrega la lista a su elemento padre
    padre.appendChild(lista);

    // Para cada opcion de la lista
    for (let i = 0; i < opciones.length; i++) {
        // Crea una opcion
        let opcion = document.createElement("option");
        // Establece el texto de la opcion
        opcion.innerHTML = opciones[i];
        // Establece el atributo value de la lista
        opcion.setAttribute("value", valores[i]);
        // Establece el atributo selected
        if ((sel !== null) && (sel === valores[i])) {
            opcion.setAttribute("selected", "selected");
        }
        // Agrega la opcion a la lista
        lista.appendChild(opcion);
    }
}

/**
 * Despliega una tabla con los atributos de un objeto
 * 
 * @param {string} padreId Id del elemento dentro del que 
 * se desplegara la tabla. 
 * @param {string} titulo Titulo de la tabla
 * @param {arreglo de string} encabezados Encabezados de las
 * columnas de la tabla
 * @param {objeto} objeto Objeto cuyos atributos de mostraran en la tabla
 */
function despliegaObjeto(padreId, titulo, encabezados, objeto) {
    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById(padreId);

    // Crea la tabla
    let tabla = document.createElement("table");
    // Establece el atributo class de la tabla
    tabla.setAttribute("class", "bicolor");
    // Agrega la tabla a su elemento padre
    padre.appendChild(tabla);

    // Crea el titulo de la tabla
    let tituloTabla = document.createElement("caption");
    // Le agrega el texto al titulo
    tituloTabla.innerHTML = titulo;
    // Agrega el titulo a la tabla
    tabla.appendChild(tituloTabla);

    // Para cada objeto del arreglo de datos
    let i = 0;
    for (let miembro in objeto) {
        // Crea un renglon
        let renglon = document.createElement("tr");
        // agrega el renglon a la tabla
        tabla.appendChild(renglon);

        // Crea una celda de encabezado
        let celdaEncabezado = document.createElement("th");
        // Agrega el texto del encabezado
        celdaEncabezado.innerHTML = encabezados[i];
        // Agrega la celda al renglon
        renglon.appendChild(celdaEncabezado);

        // Crea una celda
        let celdaMiembro = document.createElement("td");
        // Agrega el texto de la celda
        celdaMiembro.innerHTML = objeto[miembro];
        // Agrega la celda al renglon
        renglon.appendChild(celdaMiembro);

        i++;
    }
}
