<%-- index.jsp Esta página JSP es la página inicial de la aplicación Web Biblioteca Web. Despliega el menú de opciones.
--%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>

    <%-- Incluye el titulo de la pagina --%>
    <%@include file="jspf/titulo.jspf" %>

    <body>
        <div class="contenedorGrid">
            <%-- Incluye el encabezado de la pagina --%>
            <%@include file="jspf/encabezado.jspf" %>

            <%-- Incluye el menu principal --%>
            <%@include file="jspf/menuPpal.jspf" %>

            <main>
                <h1>Bienvenida</h1>
                <p>
                    Bienvenidos a la Biblioteca Web donde podras realizar acciones tales
                    como
                    registro, edicion, eliminación de revistas.Ademas podras inventariar
                    y
                    desinventariar revistas.
                    Por lo tanto, espero que las aplicacion le sea de utilidad y el
                    diseño
                    sea completamente de su agrado, las opcines de la aplicacion se encuentran en su lado izquierdo.
                    La aplicacion es creada por su servidor José Jesús Orozco Hernández,
                    mi
                    telefono de celular es 6442138093 y correo de contacto
                    jose.orozco229141@potros.itson.edu.mx
                </p>
            </main>

            <%-- Incluye el pie de pagina --%>
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>

</html>