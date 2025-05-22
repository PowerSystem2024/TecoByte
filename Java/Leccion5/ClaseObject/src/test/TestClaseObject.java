package test;

import domain.*;

import domain.Escritor;

public class TestClaseObject {
    public static void main(String[] args) {

        Empleado empleado1 = new Empleado("Juan", 5000);
        Empleado empleado2 = new Empleado("Maria", 4000);

        //Comparando objetos
        if (empleado1 == empleado2) {
            System.out.println("Tienen la misma referencia en memoria");
        } else {
            System.out.println("Son diferentes referencias en memoria");
        }

        //Comparando objetos
        if (empleado1.equals(empleado2)) {
            System.out.println("Son el mismo objeto");
        } else {
            System.out.println("Son diferentes objetos");
        }
    }
}
