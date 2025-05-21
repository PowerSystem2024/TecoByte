public class App {
    public static void main(String[] args) throws Exception {
        // Creación de objetos
        Gerente gerente = new Gerente("Juan", "Pérez", 5000, "Ventas");
        determinarTipo(gerente);
        Empleado empleado = new Empleado("Ana", "Gómez", 3000);
        determinarTipo(empleado);

    }

    public static void determinarTipo(Empleado empleado) {
        // Verificamos si el objeto es de tipo Gerente
        if (empleado instanceof Gerente) {
            System.out.println("El empleado es de tipo Gerente");
            Gerente gerente = (Gerente) empleado;
            System.out.println("gerente = " + gerente.obtenerDetalles());
        }
        // Verificamos si el objeto es de tipo Empleado
        else if (empleado instanceof Empleado) {
            System.out.println("El empleado es de tipo Empleado");
        } else {
            System.out.println("El empleado no es de tipo Gerente ni Empleado");
        }
    }
}
