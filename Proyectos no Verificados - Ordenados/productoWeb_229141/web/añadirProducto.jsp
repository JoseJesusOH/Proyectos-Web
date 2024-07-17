<%-- 
añadirProducto.jsp Esta página JSP es la página inicial de añadir producto la apliacion web Productos Wweb. 
--%>
<%@page import="acciones.AnadeProducto"%>
<!DOCTYPE html>

<%@page contentType="text/html" pageEncoding="UTF-8" %>

<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
        <title>Productos - Añadir</title>
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
                <h1>Captura Producto</h1>
                <form action="AnadeProducto" method="post"  >
                    <div class="contenedorFormulario">
                        <div class="derecha">
                            <label for="nombreId" >Nombre *</label>
                        </div>
                        <div>
                            <input type="text" id="nombre" name="nombre" 
                                   size="20" maxlength="45" 
                                   placeholder="Nombre del Producto" required/>
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
                            <label for="cantidadId" >Precio *</label>
                        </div>
                        <div>
                            <input type="number" id="precioId" name="precio" 
                                   size="16"  size="13" maxlength="9" value="1" min="1" id="number" name="precio"
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
