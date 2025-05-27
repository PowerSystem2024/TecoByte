public class App {
    public static void main(String[] args) throws Exception {
        // Creación de objetos
        Gerente gerente = new Gerente("Juan", "Pérez", 5000, "Ventas");
        Empleado empleado = new Empleado("Ana", "Gómez", 3000);

        // Polimorfismo
        System.out.println(gerente.obtenerDetalles());
        imprimir(gerente);
        System.out.println(empleado.obtenerDetalles());
        imprimir(empleado);

    }

    // public static void imprimir(Empleado empleado) {
    // String detalles = empleado.obtenerDetalles();
    // System.out.println("detalles = " + detalles);
    public static void imprimir(Empleado empleado) {
        System.out.println("detalles = " + empleado.obtenerDetalles());
    }
}
