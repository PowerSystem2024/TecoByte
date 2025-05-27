public class Gerente extends Empleado {
    // Atributos de la clase Gerente
    private String departamento;

    // Constructor de la clase Gerente
    public Gerente(String nombre, String apellidos, double sueldo, String departamento) {
        super(nombre, apellidos, sueldo);
        this.departamento = departamento;
    }

    // Sobreescribimos el metodo obtenerDetalles
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles() + ", Departamento: " + this.departamento;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

}
