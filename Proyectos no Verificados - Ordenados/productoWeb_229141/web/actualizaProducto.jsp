<%-- 
actualizaProducto.jsp Esta página JSP es la página actualiza producto de la apliacion web Productos Web. 
--%>
<%@page import="java.util.List"%>
<%@page import="entidades.Producto"%>
<%@page import="controlador.ProductoJpaController"%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <title>Productos- Actualizar</title>
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
                <h1>Actualiza Producto</h1>
                <form action="ActualizaProducto" method="post" name="actualizaProducto" >
                    <div class="contenedorFormulario">
                        <div class="derecha">
                            Producto *
                        </div>
                        <div>

                            <select name="productoID"  required>
                                <%
                                    List<Producto> productoList = (List<Producto>) session.getAttribute("productos");
                                    for (int i = 0; i < productoList.size(); i++) {
                                %><option name="select" value="<%=productoList.get(i).getIdproducto()%>"  > <%out.print("ID; "+productoList.get(i).getIdproducto() + "  Nombre; " + productoList.get(i).getNombre()+" Cantidad; "+productoList.get(i).getCantidad()+" Precio; "+productoList.get(i).getPrecio()); %>
                                </option>
                                <%}%>          
                            </select>
                        </div>
                        <div>&nbsp;</div>
                        <div class="derecha">
                            <label for="cantidadId" >Cantidad *</label>
                        </div>
                        <div>
                            <input type="number" id="cantidadId" name="cantidad" 
                                   size="16"  size="13" maxlength="9" value="1" min="1" id="number" name="number" pattern="^[1-9]\d*$"
                                   title="Entero positivo no mayor a 9 cifras "  min="1"
                                   placeholder="123456789" required
                                   />
                        </div>
                        <div>&nbsp;</div>
                        <div class="derecha">
                            <label for="precioId" >Precio *</label>
                        </div>
                        <div>
                            <input type="number" id="precioId" name="precio" 
                                   size="16"  size="13" maxlength="9" value="1" min="1" id="number"
                                   title="Numero no mayor a 9 digitos"  min="1"
                                   placeholder="123456789" required
                                   />
                        </div>
                        <div>&nbsp;</div>
                        <div class="span centrada">
                            <input type="submit" name="boton" value="Continuar" class="boton"/>
                            <input type="reset" value="Limpiar" class="boton"/>
                        </div>
                    </div>
                </form>
            </main>
            <%@include file="jspf/piePagina.jspf" %>
        </div>
    </body>
</html>
