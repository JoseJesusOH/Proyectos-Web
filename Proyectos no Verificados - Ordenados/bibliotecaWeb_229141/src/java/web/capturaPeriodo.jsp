<%--
    capturaPeriodo.jsp
    
    Esta página JSP permite capturar el periodo de una canción. Forma parte de 
    la aplicación Web AmanteMusicaWeb.
--%>

<!DOCTYPE html>

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<html>
    <head>
        <meta charset="utf-8">
        <title>Amante Música Web: Captura Periodo de las Canciones</title>
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <h1>Periodo de las canciones a listar</h1>
                <%-- Formulario para capturar un periodo y enviarlo al servlet
                     obtenCancionesPeriodo para obtener la lista de canciones
                     de ese periodo de la BD --%>
                <form action="obtenCancionesPeriodo" method="post" name="capturaPeriodo" >

                    <%-- Los mensajes de validación del lado del servidor se
                         encuentran en el bean mensajes, almacenado en el
                         objeto request por el servlet obtenCancionesPeriodo. --%>
                    <div class="contenedorFormulario">
                        <div class="derecha">
                            <label for="fechaDesdeId" >Fecha inicial (dd/mm/aaaa) *</label>                                
                        </div>
                        <div>
                            <input type="text" id="fechaDesdeId" name="desde"
                                   value="${param.desde}" size="10"  
                                   pattern="^(([0-2]?[0-9])|([3][0-1]))\/(([0]?[0-9])|([1][0-2]))\/[0-9]{4}$" 
                                   required placeholder="dd/mm/aaa" />
                        </div>
                        <div id="msjDesde" class="${mensajes.desde.claseMensaje}">
                            ${mensajes.desde.mensaje}
                        </div>
                        <div class="derecha">
                            <label for="fechaHastaId" >Fecha final (dd/mm/aaaa) *</label>                                
                        </div>
                        <div>
                            <input type="text" id="fechaHastaId" name="hasta"
                                   value="${param.hasta}" size="10"  
                                   pattern="^(([0-2]?[0-9])|([3][0-1]))\/(([0]?[0-9])|([1][0-2]))\/[0-9]{4}$" 
                                   required placeholder="dd/mm/aaa" />
                        </div>
                        <div id="msjHasta" class="${mensajes.hasta.claseMensaje}">
                            ${mensajes.hasta.mensaje}
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
