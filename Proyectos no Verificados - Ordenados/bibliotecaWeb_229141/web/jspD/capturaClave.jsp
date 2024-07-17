<%-- 
    capturaClave.jsp

    Esta página JSP permite capturar la clave de una canción a agregar
    al catálogo de canciones. Forma parte de la aplicación Web 
    AmanteMusicaWeb
--%>

<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<html>
    <head>
        <meta charset="utf-8">
        <title>Amante Música Web: Captura Clave Canci&oacute;n</title>
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
    </head>

    <body>
        <div class="contenedorGrid"> 
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf"%>

            <%-- Incluye el menu canciones --%>
            <%@include file="jspf/menuCanciones.jspf"%>

            <main>
                <h1>Canci&oacute;n a agregar</h1>
                <%-- Formulario para capturar la clave de una canción.
                     La clave se envía al servlet obtenCancion para
                     obtener la canción de la BD --%>
                <form action="obtenCancion" method="post" name="capturaClave" >
                    <%-- Los mensajes de validación del lado del servidor se
                         encuentran en el bean mensajes, almacenado en el
                         objeto request por el servlet obtenCancion. --%>
                    <div class="contenedorFormulario">
                        <div class="derecha"><label for="claveId" >Clave *</label></div>
                        <div>
                            <input type="text" id="claveId" name="clave" 
                                   value="${param.clave}" size="7" pattern="^[A-Z]{3}[0-9]{4}$" 
                                   title="Tres letras may&uacute;sculas seguidas de 4 d&iacute;gitos"
                                   placeholder="ABC1234" required />
                        </div>
                        <div id="msjClave" class="${mensajes.clave.claseMensaje}">
                            ${mensajes.clave.mensaje}
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
