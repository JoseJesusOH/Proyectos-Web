/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author lalo_
 */
public class RegionesDAO {
    public ConexionDB conexion=new ConexionDB();
    public ResultSet getRegiones(){
        try {
          
             Connection con = conexion.crearConexion();
            PreparedStatement ps= con.prepareStatement("SELECT RegionID ,RegionDescription FROM Region");
            
            ResultSet resultSet=ps.executeQuery();
            
            return resultSet;
        } catch (Exception ex) {
           System.out.println(ex);
           return null;
        }
    }
}
