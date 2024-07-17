<%--
    seleccionaCancionActualizar.jsp
    
    Esta página JSP despliega una tabla con la lista de canciones del catálogo
    de canciones y permite seleccionar la canción a actualizar. Forma parte de 
    la aplicación Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Amante Música Web: Seleciona Canci&oacute;n a Actualizar</title>
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <div id="msjTitulo" class=" centrada ${mensajes.cancion.claseMensaje}">
                    ${mensajes.cancion.mensaje}
                </div>

                <%-- Formulario para capturar una canción a actualizar.
                     La clave de la canción se envía al servlet obtenCancion para
                     obtener la canción de la BD --%>
                <form action="obtenCancionEditar" method="post">
                    <%-- Tabla donde se muestran los datos de todas las canciones --%>
                    <table class="bicolor">

                        <%-- Título de la tabla --%>
                        <caption>
                            Selecciona la canción a actualizar
                        </caption>

                        <%-- Títulos de las columnas --%>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Clave</th>
                            <th>Título</th>
                            <th>Intérprete</th>
                            <th>Autor</th>
                            <th>Género</th>
                            <th>Album</th>
                            <th>Duración</th>
                            <th>Fecha</th>
                        </tr>

                        <%-- Despliega los datos de todas las canciones. Los datos
                             se encuentran en el bean listaCanciones guardados en
                             el objeto session por el servlet obtenCanciones. --%>
                        <c:forEach items="${listaCanciones.lista}" var="cancion" >
                            <%-- Inserta en cada celda de una fila de la tabla
                                 uno de los atributos de la canción --%>
                            <tr>
                                <td><input type="radio" name="clave" value="${cancion.clave}" /></td>
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
                    <br />
                    <table class="centrada" >
                        <tr>
                            <%-- Botones enviar --%>
                            <td>
                                <input type="submit" name="boton" value="Continuar" />
                            </td>
                            <%-- Botón limpiar --%>
                            <td>
                                <input type="reset" value="Limpiar" />
                            </td>
                        </tr>
                    </table>
                </form>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf"%>
        </div>
    </body>
</html>
