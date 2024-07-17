<%--
    error.jsp
    
    Esta página JSP permite desplegar los mensajes de error de la aplicación 
    Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@page isErrorPage="true" %>

<html>
    <head>
        <meta charset="utf-8">
        <title>Amante Música Web: Página de Error</title>
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <h1>Página de Error</h1>
                <br />
                <table class="centrada">
                    <tr>
                        <th class="error">Error:</th>
                        <td class="msjError">
                            ${pageContext.exception.message}
                        </td>
                    </tr>
                    <tr>
                        <th class="error">Causa:</th>
                        <td class="msjError">
                            ${pageContext.exception.cause.message}
                        </td>
                    </tr>
                </table>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf"%>
        </div>
    </body>
</html>
