<%-- 
    peliculas.jsp

    Esta página JSP es la página con el menú peliculas de la aplicación Web
    AmanteMusicaWeb 
--%>

<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Amante Música Web: Menú Peliculas</title>
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu peliculas --%>
            <%@include file="jspf/menuPeliculas.jspf"%>

            <main>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf"%>
        </div>
    </body>
</html>
