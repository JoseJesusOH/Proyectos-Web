<%--
    seleccionaGeneroCanciones.jsp
    
    Esta página JSP permite seleccionar el género de las canciones a listar.
    Forma parte de la aplicación Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Amante Música Web: Captura Genero de las Canciones a Listar</title>
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <h1>Género de las canciones a listar</h1>
                <%-- Formulario para capturar el género de una canción.
                     La clave del genero se envia al servlet obtenCancionesGenero
                     para obtener la lista de canciones de ese género de la BD --%>
                <form  action="obtenCancionesGenero" method="post" >
                    <div class="contenedorFormulario">
                        <div class="derecha">
                            Género *
                        </div>
                        <div>
                            <select name="cveGenero" required>
                                <option value="">Ninguno</option>
                                <%-- La lista de géneros de canciones se encuentran
                                     en el bean listaGenerosCanciones almacenado en el
                                     objeto session por el servlet obtenGenerosCanciones. --%>
                                <c:forEach items="${listaGenerosCanciones.lista}" var="genero" >
                                    <option value="${genero.cveGenero}"  >
                                        ${genero.nombre}
                                    </option>
                                </c:forEach>
                            </select>
                        </div>
                        <div id="msjGenero" class="${mensajes.genero.claseMensaje}">
                            ${mensajes.genero.mensaje}
                        </div>
                    </div>
                    <div class="span centrada">
                        &nbsp;
                    </div>
                    <div class="span centrada">
                        <input type="submit" name="boton" value="Continuar" />
                        &nbsp;&nbsp;&nbsp;
                        <input type="reset" value="Limpiar" />
                    </div>
                    </div>
                </form>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf"%>
       </div>
    </body>
</html>
