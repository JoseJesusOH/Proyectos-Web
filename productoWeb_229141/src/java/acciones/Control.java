/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package acciones;

import controlador.ProductoJpaController;
import entidades.Producto;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import objetosTransferencia.Lista;

/**
 *
 * @author Jose Jesuse
 */
@WebServlet(name = "Control", urlPatterns = {"/Control"})
public class Control extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String tareaSel = request.getParameter("tarea");
        HttpSession session = request.getSession();
        RequestDispatcher rd;
        String siguiente = null;

        session.setAttribute("tareaSel", tareaSel);
        ProductoJpaController productoJpaController = new ProductoJpaController();
        List<Producto> lista2 = productoJpaController.findProductoEntities();
        switch (tareaSel) {
            case "agregarProducto":
                siguiente = "añadirProducto.jsp";
                break;
            case "actualizarProducto":
                siguiente = "actualizaProducto.jsp";
                lista2 = productoJpaController.findProductoEntities();
                if (lista2.isEmpty()) {
                    siguiente = "index.jsp";
                    session.setAttribute("mensaje", "No existen productos que actualizar");
                } else {
                    session.setAttribute("productos", lista2);
                }
                break;
            case "obtenerProducto":
                siguiente = "productos.jsp";
                lista2 = productoJpaController.findProductoEntities();
                if (lista2.isEmpty()) {
                    siguiente = "index.jsp";
                    session.setAttribute("mensaje", "No existen productos que mostrar");
                } else {
                    session.setAttribute("productos", lista2);
                }

                break;
            default:
                break;
        }
        rd = request.getRequestDispatcher(siguiente);
        rd.forward(request, response);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
