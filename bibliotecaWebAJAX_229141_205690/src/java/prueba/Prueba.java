/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package prueba;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import controlador.RevistaJpaController;
import controlador.RevistaedJpaController;
import controlador.exceptions.PreexistingEntityException;
import entidades.Revista;
import entidades.Revistaed;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;

/**
 *
 * @author Judi
 */
public class Prueba {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
//        System.out.println("Revistas de la base de datos");
//        RevistaJpaController revistaJPA = new RevistaJpaController();
//        List<Revista> revistas = revistaJPA.findRevistaEntities();
//        for (int i = 0; i < revistas.size(); i++) {
//            Revista get = revistas.get(i);
//            System.out.println(get.toString());
//        }
//        try {
//            System.out.println("Revistas del inventario");
//            RevistaedJpaController revistasEDJPA = new RevistaedJpaController();
////            revistasEDJPA.create(new Revistaed(revistas.get(0).getIsbn(), 10, 10, revistas.get(0)));
//            List<Revistaed> revistasEd = revistasEDJPA.findRevistaedEntities();
//            for (int i = 0; i < revistasEd.size(); i++) {
//                Revistaed get = revistasEd.get(i);
//                System.out.println(get.toString());
//            }
//        } catch (Exception e) {
//            System.out.println("Error; " + e.getMessage());
//        }

//        RevistaJpaController revistaJPA = new RevistaJpaController();
//        Revista revista = revistaJPA.findRevista(Long.valueOf(2));
//        Gson gson = new Gson();
////     String dos=gson.toJson(revista);
////        System.out.println(dos);    
//List<String> apelidos=new ArrayList<>();
//apelidos.add("Martex");
//AlumnoPrueba alumno=new AlumnoPrueba("Jose", apelidos);
//Revista revistaP =new Revista(Long.valueOf("12212121"),"Prueba", "Aplicaciones Web","Universitario");
//System.out.println(gson.toJson(revistaP));
//System.out.println();
//        Gson gson = new Gson();
//        String revistaJson = null;
//        RevistaJpaController revistaJPA = new RevistaJpaController();
//        try {
//            Revista revista = revistaJPA.findRevista(Long.valueOf("2"));
//            if (revista != null) {
//                try {
//                    Revista revistaConvertir = new Revista(revista.getIsbn(), revista.getTitulo(), revista.getEditorial(), revista.getClasificacion());
//                    if (revista.getFecha() != null) {
//                        revistaConvertir.setFecha(revista.getFecha());
//                    }
//                    if (revista.getPeriocidad() != null) {
//                        revistaConvertir.setPeriocidad(revista.getPeriocidad());
//                    }
//                    revistaJson = gson.toJson(revistaConvertir);
//                } catch (Exception e) {
//                    revistaJson = "{}";
//                }
//            } else {
//                revistaJson = "{}";
//            }
//        } catch (NumberFormatException e) {
//            revistaJson = "{}";
//        }
//        System.out.println(revistaJson);
        Gson gson = new Gson();
        List<Revista> listaRevistas = null;
        RevistaJpaController revistaJPA = new RevistaJpaController();
        listaRevistas = revistaJPA.findRevistaEntities();
        List<JsonObject> lista = new ArrayList<>();
        JsonObject object = new JsonObject();
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
        for (int i = 0; i < listaRevistas.size(); i++) {
            Revista get = listaRevistas.get(i);
            object.addProperty("isbn", String.valueOf(get.getIsbn()));
            object.addProperty("titulo", String.valueOf(get.getTitulo()));
            object.addProperty("editorial", String.valueOf(get.getEditorial()));
            object.addProperty("clasificacion", String.valueOf(get.getClasificacion()));
            String periocidad=get.getPeriocidad()!=null?get.getPeriocidad():"";
            object.addProperty("periocidad", periocidad);
            String fecha=get.getFecha()!=null?formato.format(get.getFecha()):"";
            object.addProperty("fecha", fecha);
            lista.add(object);
            object=new JsonObject();
        }
        System.out.println(lista.get(1).toString());
//        object.addProperty("fecha", "");
//        String json = object.toString();
//        System.out.println(json);
////        for (int i = 0; i < listaRevistas.size(); i++) {
////            listaRevistas.get(i).setRevistaed(null);
////            if (listaRevistas.get(i).getFecha() == null) {
////                listaRevistas.get(i).setFecha(null);
////            }
////        }
//        String listaRevistasJson = gson.toJson(listaRevistas.get(1));
//        System.out.println(listaRevistasJson);
////        JsonObject jsonObject=gson.fromJson(listaRevistasJson, Revista.class);
//        System.out.println("");
////        object.add("", listaRevistasJson);
////        System.out.println();
//        System.out.println(listaRevistasJson);
    }

}
