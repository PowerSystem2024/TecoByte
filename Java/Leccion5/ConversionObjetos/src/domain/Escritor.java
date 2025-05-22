package domain;

public class Escritor extends Empleado {
    final TipoEscritura tipoEscritura;

    //Constructor
    public Escritor(String nombre, double salario, TipoEscritura tipoEscritura) {
        super(nombre, salario);
        this.tipoEscritura = tipoEscritura;
    }

    //Metodo toString
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Tipo de Escritura: " + tipoEscritura.getDescripcion();
    }

    //Metodo toString
    @Override
    public String toString() {
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + '}' + " " + super.toString();
    }

    public TipoEscritura getTipoEscritura() {
        return this.tipoEscritura;
    }
}
