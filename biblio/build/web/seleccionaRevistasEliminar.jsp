<%-- 
seleccionaRevistasEliminar.jsp 
Esta página JSP es la página del catalogo de revistas opcion de eliminar de la aplicación Web Biblioteca Web.
--%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <%-- Incluye el titulo de la pagina --%>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Eliminar Revistas</title>
    </head>
    <body>
        <div class="contenedorGrid">
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf" %>

            <%-- Incluye el menu de revistas catalogo --%>
            <%@include file="jspf/menuRevistas.jspf" %>
            
            <main>
                  <div id="msjTitulo" class=" centrada ${mensajes.canciones.claseMensaje}">
                    ${mensajes.canciones.mensaje}
                </div>

                <%-- Formulario para capturar las canciones a eliminar.
                     Ls claves de las canciones se envían al servlet
                     eliminaCanciones para eliminarlas de la BD --%>
                <form action="eliminaCanciones" method="post">
                    <%-- Tabla donde se muestran los datos de todas las canciones --%>
                    <table class="bicolor">

                        <%-- Título de la tabla --%>
                        <caption>Selecciona las canciones a eliminar</caption>

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
                                <td><input type="checkbox" name="claves" value="${cancion.clave}" ></td>
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
                            <%-- Boton enviar --%>
                            <td>
                                <input type="submit" name="boton" value="Continuar" />
                            </td>
                            <%-- Boton limpiar --%>
                            <td>
                                <input type="reset" value="Limpiar" />
                            </td>
                        </tr>
                    </table>
                </form>
            </main>
            
            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>