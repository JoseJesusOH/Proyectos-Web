<%-- 
index.jsp Esta página JSP es la página inicial de la apliacion web Productos Wweb.
--%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="entidades.Producto"%>
<%@page import="controlador.ProductoJpaController"%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <title>Productos</title>
    </head>
    <body>

        <div class="contenedor">
            <header>
                <h1>Productos Aplicacion Web</h1>
                <div class="linea">
                </div>
            </header>
            <%@include file="jspf/menuProductos.jspf" %>
            <main>

                <table class="productos" >


                    <h1>
                        Lista de Productos Actuales
                    </h1>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>

                    <%
                       List<Producto> productoList = (List<Producto>) session.getAttribute("productos");
                        for (int i = 0; i < productoList.size(); i++) {
                    %>
                    <tr align="center">
                        <td><% out.print(productoList.get(i).getIdproducto()); %></td>
                        <td><% out.print(productoList.get(i).getNombre()); %></td>
                        <td><% out.print(productoList.get(i).getCantidad()); %></td>
                        <td><% out.print(productoList.get(i).getPrecio()); %></td>
                    </tr>
                    <%	}%>
                </table>

            </main>
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>
