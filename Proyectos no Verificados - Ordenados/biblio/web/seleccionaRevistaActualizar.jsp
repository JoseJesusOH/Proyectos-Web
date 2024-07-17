<%-- 
seleccionaRevistaActualizar.jsp 
Esta página JSP es la página del catalogo de revistas opcion de actualiza de la aplicación Web Biblioteca Web.
--%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <%-- Incluye el titulo de la pagina --%>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Actualizar Revista</title>
    </head>
    <body>
        <div class="contenedorGrid">
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf" %>

            <%-- Incluye el menu de revistas catalogo --%>
            <%@include file="jspf/menuRevistas.jspf" %>
            
            <main>
                
                 <div id="msjTitulo" class=" centrada ${mensajes.cancion.claseMensaje}">
                    ${mensajes.cancion.mensaje}
                </div>

                <%-- Formulario para capturar una canción a actualizar.
                     La clave de la canción se envía al servlet obtenCancion para
                     obtener la canción de la BD --%>
                <form action="obtenRevistaEditar" method="post">
                    <%-- Tabla donde se muestran los datos de todas las canciones --%>
                    <table class="bicolor">

                        <%-- Título de la tabla --%>
                        <caption>
                            Selecciona la revista a actualizar
                        </caption>

                        <%-- Títulos de las columnas --%>
                        <tr>
                            <th>&nbsp;</th>
                            <th>ISBN</th>
                            <th>Título</th>
                            <th>Editorial</th>
                            <th>Clasificación</th>
                            <th>Periocidad</th>
                            <th>Fecha</th>
                        </tr>

                        <%-- 
                             Despliega los datos de todas las revistas. Los datos
                             se encuentran en el bean listaRevistas guardados en
                             el objeto session por el servlet obtenRevistas. 
                        --%>
                        <c:forEach items="${listaRevistas.lista}" var="cancion" >
                            <%-- Inserta en cada celda de una fila de la tabla
                                 uno de los atributos de la canción --%>
                            <tr>
                                <td><input type="radio" name="isbn" value="${revista.isbn}" /></td>
                                <td>${revista.titulo}</td>
                                <td>${revista.editorial}</td>
                                <td>${revista.clasificacion}</td>
                                <td>${revista.periocidad}</td>
                                <td>${revista.fecha}</td>
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
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>