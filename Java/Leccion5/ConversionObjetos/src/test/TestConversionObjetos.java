package test;

import domain.*;

import domain.Escritor;

public class TestConversionObjetos {
    public static void main(String[] args) {

        Empleado empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        System.out.println(" empleado = " + empleado);

        System.out.println(empleado.obtenerDetalles());

        //Este metodo no se puede invocar porque el objeto empleado es de tipo Empleado
        //empleado.getTipoEscritura();

        //Downcasting de empleado a Escritor opcion 1
        //((Escritor) empleado).getTipoEscritura();

        //Downcasting de empleado a Escritor opcion 2
        Escritor escritor = (Escritor) empleado;
        escritor.getTipoEscritura();

        //Upcasting de escritor a empleado
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
