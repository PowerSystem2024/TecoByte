public class Empleado {
    protected String nombre;
    protected String apellidos;
    protected double sueldo;

    public Empleado(String nombre, String apellidos, double sueldo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sueldo = sueldo;
    }

    // Metodo para la sobreescritura
    public String obtenerDetalles() {
        return "Nombre: " + this.nombre + ", Apellidos: " + this.apellidos + ", Sueldo: " + this.sueldo;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

}
