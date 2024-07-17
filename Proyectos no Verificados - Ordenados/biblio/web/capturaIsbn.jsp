<%-- 
capturarIsbn.jsp 
Esta página JSP es la página del catalogo de revistas para la captura de una revista agregar para 
la aplicación Web Biblioteca Web.
--%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <%-- Incluye el titulo de la pagina --%>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        <title>Capturar ISBN</title>
    </head>
    <body>
        <div class="contenedorGrid">
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf" %>

            <%-- Incluye el menu de revistas catalogo --%>
            <%@include file="jspf/menuRevistas.jspf" %>
            <main>
                 <h1>Agregar Revista</h1>
                <%-- Formulario para capturar el ISBN de una revista.
                     El ISBN se envía al servlet correspondiente para validar si el ISBN ya existe--%>
                <form action="obtenRevista" method="post" name="capturaISBN" >
                    <%-- Los mensajes de validación del lado del servidor se
                         encuentran en el bean mensajes, almacenado en el
                         objeto request por el servlet obtenCancion. --%>
                    <div class="contenedorFormulario">
                        <div class="derecha"><label for="isbnId" >Clave *</label></div>
                        <div>
                            <input type="text" id="isbnId" name="isbn" 
                                   value="${param.isbn}" size="13" pattern="[0-9]{13}" 
                                   title="Numero de 13 digitos"
                                   placeholder="1234567891234" required />
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
                            <input type="reset" value="Restaurar" />
                        </div>
                    </div>
                </form>
            </main>
            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>