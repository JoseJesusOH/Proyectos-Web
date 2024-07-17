<%-- 
index.jsp Esta página JSP es la página inicial de la apliacion web Productos Wweb. Despliega el menú de opciones.
--%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <title>Biblioteca Web</title>
    </head>
    <body>

        <div class="contenedor">
            <header>
                <h1>Productos WEB</h1>
                <div class="linea">
                </div>
            </header>


            <%@include file="jspf/menuProductos.jspf" %>
            <main>
                <h1>Bienvenida</h1>
                <p>
                    Bienvenidos a la mini Apliacion Web nombrada Productos Web donde podras realizar 
                    acciones de agregar, actualizar y consultar productos existentes
                    La aplicacion es creada por su servidor José Jesús Orozco Hernández, mi
                    telefono de celular es 6442138093 y correo de contacto
                    jose.orozco229141@potros.itson.edu.mx.
                </p>
            </main>

            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>
