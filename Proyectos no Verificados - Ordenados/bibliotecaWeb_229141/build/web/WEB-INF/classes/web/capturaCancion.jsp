<%--
    capturaCancion.jsp
    
    Esta página JSP permite capturar los datos de una canción. Forma parte de 
    la aplicación Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<html>
    <head>
        <meta charset="utf-8">
        <title>Amante Música Web - Versión JSP: Captura Canci&oacute;n</title>
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <h1>Captura Canci&oacute;n</h1>

                <%-- Formulario para capturar los atributos de una canción.
                     Los datos se envían al servlet agregaCancion para
                     guardarlos en la BD --%>
                <form action="agregaCancion" method="post" name="capturaCancion" >

                    <%-- Los mensajes de validación del lado del servidor se
                         encuentran en el bean mensajes, almacenado en el
                         objeto request por el servlet agregaCancion. --%>
                    <div class="contenedorFormulario">
                        <div class="derecha">
                            <label for="claveId" >Clave</label>
                        </div>
                        <div>
                            <input type="text" id="claveId" name="clave"
                                   value="${param.clave}" size="7" readonly />
                        </div>
                        <div>&nbsp;</div>
                        <div class="derecha">
                            <label for="tituloId" >Titulo *</label>
                        </div>
                        <div>
                            <input type="text" id="tituloId" name="titulo" 
                                   value="${param.titulo}" size="35" maxlength="35" required
                                   placeholder="T&iacute;tulo de la canci&oacute;n" />
                        </div>
                        <div id="msjTitulo" class="${mensajes.titulo.claseMensaje}">
                            ${mensajes.titulo.mensaje}
                        </div>
                        <div class="derecha">
                            <label for="interpreteId" >Intérprete *</label>
                        </div>
                        <div>
                            <input type="text" id="interpreteId" name="interprete" 
                                   value="${param.interprete}" size="35" maxlength="35" required
                                   placeholder="Int&eacute;rprete de la canci&oacute;n"/>
                        </div>
                        <div id="msjInterprete" class="${mensajes.interprete.claseMensaje}">
                            ${mensajes.interprete.mensaje}
                        </div>
                        <div class="derecha">
                            <label for="autorId" >Autor</label>
                        </div>
                        <div>
                            <input type="text" id="autorId" name="autor" 
                                   value="${param.autor}" size="35" maxlength="35"
                                   placeholder="Autor de la canci&oacute;n"/>
                        </div>
                        <div id="msjAutor" class="${mensajes.autor.claseMensaje}">
                            ${mensajes.autor.mensaje}
                        </div>
                        <div class="derecha">
                            Género *
                        </div>
                        <div>
                            <select name="cveGenero" required>
                                <option value="">Ninguno</option>
                                <%-- La lista de géneros de canciones se encuentran
                                     en el bean listaGenerosCanciones almacenado en el
                                     objeto session por el servlet obtenGenerosCanciones. --%>
                                <c:forEach items="${listaGenerosCanciones.lista}" 
                                           var="genero" >
                                    <c:choose>
                                        <c:when test="${param.cveGenero == genero.cveGenero}" >
                                            <option selected value="${genero.cveGenero}" >${genero.nombre}</option>
                                        </c:when>
                                        <c:when test="${param.cveGenero != genero.cveGenero}" >
                                            <option value="${genero.cveGenero}" >${genero.nombre}</option>
                                        </c:when>
                                    </c:choose>
                                </c:forEach>
                            </select>
                        </div>
                        <div id="msjGenero" class="${mensajes.genero.claseMensaje}">
                            ${mensajes.genero.mensaje}
                        </div>
                        <div class="derecha">
                            <label for="albumId" >Album</label>
                        </div>
                        <div>
                            <input type="text" id="albumId" name="album"
                                   value="${param.album}" size="35" maxlength="35"
                                   placeholder="&Aacute;lbum de la canci&oacute;n"/>
                        </div>
                        <div id="msjAlbum" class="${mensajes.album.claseMensaje}">
                            ${mensajes.album.mensaje}
                        </div>
                        <div class="derecha">
                            <label for="duracionId" >Duración *</label>
                        </div>
                        <div>
                            <input type="number" id="duracionId" name="duracion" 
                                   value="${param.duracion}" size="5" min="1" max="99"
                                   placeholder="1 - 99"/>
                        </div>
                        <div id="msjDuracion" class="${mensajes.duracion.claseMensaje}">
                            ${mensajes.duracion.mensaje}
                        </div>
                        <div class="derecha">
                            <label for="fechaId" >Fecha (dd/mm/aaa)</label>
                        </div>
                        <div>
                            <input type="text" id="fechaId" name="fecha" 
                                   value="${param.fecha}" size="10"
                                   pattern="^(([0-2]?[0-9])|([3][0-1]))\/(([0]?[0-9])|([1][0-2]))\/[0-9]{4}$"
                                   placeholder="dd/mm/aaa" />
                        </div>
                        <div id="msjFecha" class="${mensajes.fecha.claseMensaje}">
                            ${mensajes.fecha.mensaje}
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
