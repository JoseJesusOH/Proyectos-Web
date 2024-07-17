<%-- 
index.jsp Esta página JSP es la página inicial de la apliacion web Productos Wweb.
--%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <title>Productos Principal</title>
    </head>
    <body>

        <div class="contenedor">
            <header>
                <h1>Productos Aplicacion Web</h1>
                <div class="linea">
                </div>
            </header>
            <%@include file="jspf/menuProductos.jspf" %>
            <main>
                <h1>${mensaje}</h1>
            </main>
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>
