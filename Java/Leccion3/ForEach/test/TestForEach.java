package Leccion3.ForEach.test;
import Leccion3.domain.Persona;
public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9}; //sintaxis resumida
        for(int edad: edades){//Sintaxis del foreach
            System.out.println("edad= "+edad);
        }
        Persona personas[] = {new Persona("Juan"), new Persona("Carla"), new Persona("Beatriz")};

        //ForEach
        for(Persona persona: personas){
            System.out.println("persona= "+persona);
        }
    }
}
