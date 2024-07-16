<%--
    despliegaCanciones.jsp
    
    Esta página JSP despliega una tabla con la lista de canciones del catálogo 
    de canciones. Forma parte de la aplicación Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<%@ page import="objetosNegocio.*" %>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Amante Música Web: Despliega Canciones</title>
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <%-- Despliega los datos de todas las canciones. Los datos
                     se encuentran en el bean listaCanciones guardados en
                     el objeto session por el servlet obtenCanciones o en 
                     el objeto request por los servlets obtenCancionesGenero
                     u obtenCancionesPeriodo. 
                --%>
                <table class="bicolor" >

                    <%-- Título de la tabla --%>
                    <caption>
                        ${listaCanciones.tituloTabla}
                    </caption>

                    <tr>
                        <%-- Títulos de las columnas --%>
                        <th>Clave</th>
                        <th>Título</th>
                        <th>Intérprete</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>Album</th>
                        <th>Duración</th>
                        <th>Fecha</th>
                    </tr>

                    <c:forEach items="${listaCanciones.lista}" var="cancion">
                        <tr>
                            <td>${cancion.clave}</td>
                            <td>${cancion.titulo}</td>
                            <td>${cancion.interprete}</td>
                            <td>${cancion.autor}</td>
                            <td>${cancion.genero.nombre}</td>
                            <td>${cancion.album}</td>
                            <td>${cancion.duracion}</td>
                            <td>${cancion.fecha}</td>
                        </tr>
                    </c:forEach>
                </table>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf"%>
        </div>
    </body>
</html>
