package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        //Conversion de objetos
        Empleado empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        System.out.println("Empleado = " + empleado);

        System.out.println(empleado.obtenerDetalles());

        //El Downcasting no es posible llamar al metodo de la clase hija desde la clase padre, para eso se hace un downcasting
        //empleado.getTipoEscritura();

        //Downcasting
        //Metodo 1
        ((Escritor) empleado).getTipoEscritura();
        //Metodo 2
        Escritor escritor = (Escritor) empleado;
        escritor.getTipoEscritura();

        //Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
