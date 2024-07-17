/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author lalo_
 */
public class ConexionDB {
    public String cadenaConexion="jdbc:mysql://localhost/paises";
    public String usuario="root";
    public String password="test1234";
    public Connection crearConexion() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conexion = DriverManager.getConnection(cadenaConexion,usuario ,password);
            return conexion;
        } catch(Exception ex){
          System.err.println(ex.getMessage());
        }
        return null;
    }
    
}
