/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package principal;

import controlador.ProductoJpaController;
import entidades.Producto;

/**
 *
 * @author Jose Jesus
 */
public class Principal {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        try {
            Producto p=new Producto("Gansito", 10, 20);
            ProductoJpaController productoJPA=new ProductoJpaController();
            productoJPA.create(p);
        } catch (Exception e) {
        }
    }
    
}
