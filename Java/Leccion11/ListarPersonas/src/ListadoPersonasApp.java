import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menu
        var salir = false;
        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }//fin del ciclo while
    }//fin metodo main

    private static void mostrarMenu(){
        //mostramos las opciones
        System.out.print("""
                ******* Listado de Personas *******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.println("Digite una de las opciones: ");
    }//fin metodo mostrarMenu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion digitada a traves de un switch
        switch (opcion){
            case 1 -> {//agregar una persona a la lista
                System.out.print("Digite el numbre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el email: ");
                var email = entrada.nextLine();
                //creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            }//fin caso 1
            case 2 -> {//Listar a las personas
                System.out.println("Listado de personas: ");
                //Mejoras con lambda y el metodo de referencia
                //personas.forEach((persona) -> System.out.println(persona);
                personas.forEach(System.out::println);
            }//fin caso 2
            case 3 -> {//salir del ciclo
                System.out.println("Hasta pronto");
                salir = true;
            }//fin caso 3
            default -> System.out.println("Opcion incorrecta"+opcion);
        }//fin del switch
        return salir;
    }//fin del metodo ejecutarOperacion

}//fin de la clase ListadoPersonasApp