/*
 * PruebaGson.java
 */
package pruebas;

import com.google.gson.Gson;
import objetosNegocio.Genero;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author domitsu
 */
public class PruebaGson {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Gson gson = new Gson();
        
        // Se crean tres géneros de canciones
        Genero genero1 = new Genero("GCB0001", "Balada", 'C');
        Genero genero2 = new Genero("GCB0002", "Bossanova", 'C');
        Genero genero3 = new Genero("GCR0003", "Rock", 'C');

        // Se crean tres géneros de películas
        Genero genero4 = new Genero("GPD0001", "Drama", 'P');
        Genero genero5 = new Genero("GPC0002", "Ciencia Ficción", 'P');
        Genero genero6 = new Genero("GPC0003", "Comedia", 'P');

        // Se despliegan los datos del género 1
        System.out.println("Género 1: " + genero1);
        
        // Se convierte el genero1 a Json
        String sGenero1 = gson.toJson(genero1);
        System.out.println("\nGénero 1 en Json: " + sGenero1);
        
        // Se regresa el Json a Genero
        Genero oGenero1 = gson.fromJson(sGenero1, Genero.class);
        System.out.println("\nGénero 1 de regreso de Json: " + oGenero1);
        
        // Se crea un arreglo de tipo Genero
        Genero generosArreglo[] = {genero1, genero2, genero3,
                                   genero4, genero5, genero6};        
        System.out.println("\nArreglo de Generos: "
                + Arrays.toString(generosArreglo));
        
        // Se convierte el arreglo generosArreglo a Json
        String sGeneroArreglo = gson.toJson(generosArreglo);
        System.out.println("\nArreglo de Generos en Json: " + sGeneroArreglo);
        
        // Se crea una lista de generos
        List<Genero> generosLista = Arrays.asList(generosArreglo);
        System.out.println("\nLista de Generos: " + generosLista);
        
        // Se convierte la lista generosLista a Json
        String sGeneroLista = gson.toJson(generosLista);
        System.out.println("\nLista de Generos en Json: " + sGeneroLista);
    }
    
}
