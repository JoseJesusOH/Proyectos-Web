<%--
    despliegaCancion.jsp
    
    Esta página JSP despliega los datos de una canción. Forma parte de 
    la aplicación Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Amante Música Web: Despliega Canci&oacute;n</title>
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <h1>Canción Existente</h1>

                <%-- Despliega los datos de la canción. Los datos se encuentran
                     en el bean cancion guardados en el objeto request por el
                     servlet obtenCancion. --%>
                <table class="centrada">
                    <tr>
                        <td class="derecha">Clave</td>
                        <td class="gris">${cancion.clave}</td>
                    <tr>
                        <td class="derecha">T&iacute;tulo</td>
                        <td class="gris">${cancion.titulo}</td>
                    </tr>
                    <tr>
                        <td class="derecha">Int&eacute;rprete</td>
                        <td class="gris">${cancion.interprete}</td>
                    </tr>
                    <tr>
                        <td class="derecha">Autor</td>
                        <td class="gris">${cancion.autor}</td>
                    </tr>
                    <tr>
                        <td class="derecha">G&eacute;nero</td>
                        <td class="gris">${cancion.genero.nombre}</td>
                    </tr>
                    <tr>
                        <td class="derecha">Album</td>
                        <td class="gris">${cancion.album}</td>
                    </tr>
                    <tr>
                        <td class="derecha">Duraci&oacute;n</td>
                        <td class="gris">${cancion.duracion}</td>
                    </tr>
                    <tr>
                        <td class="derecha">Fecha</td>
                        <td class="gris">${cancion.fecha}</td>
                    </tr>
                </table>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf"%>
        </div>
    </body>
</html>
