package domain;

public class Empleado {
    //Atributos
    protected String nombre;
    protected double salario;

    //Constructor
    public Empleado(String nombre, double salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    //Metodo toString
    public String obtenerDetalles() {
        return "Nombre: " + this.nombre + ", Salario: " + this.salario;
    }

    //metodo get
    public String getNombre() {
        return this.nombre;
    }
}
