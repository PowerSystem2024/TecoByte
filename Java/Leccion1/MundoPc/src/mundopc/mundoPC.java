package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        // Computadora 1: HP
        Monitor monitorHP = new Monitor("HP", 13);
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);

        // Computadora 2: Gamer
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);

        // Computadora 3: Dell
        Monitor monitorDell = new Monitor("Dell", 27);
        Teclado tecladoDell = new Teclado("USB", "Dell");
        Raton ratonDell = new Raton("USB", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);

        // Computadora 4: Lenovo
        Monitor monitorLenovo = new Monitor("Lenovo", 24);
        Teclado tecladoLenovo = new Teclado("USB", "Lenovo");
        Raton ratonLenovo = new Raton("USB", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);

        // Computadora 5: Asus
        Monitor monitorAsus = new Monitor("Asus", 27);
        Teclado tecladoAsus = new Teclado("Bluetooth", "Asus");
        Raton ratonAsus = new Raton("Bluetooth", "Asus");
        Computadora computadoraAsus = new Computadora("Computadora Asus", monitorAsus, tecladoAsus, ratonAsus);

        // Computadora 6: Acer
        Monitor monitorAcer = new Monitor("Acer", 22);
        Teclado tecladoAcer = new Teclado("USB", "Acer");
        Raton ratonAcer = new Raton("USB", "Acer");
        Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);

        // Computadora 7: Toshiba
        Monitor monitorToshiba = new Monitor("Toshiba", 20);
        Teclado tecladoToshiba = new Teclado("USB", "Toshiba");
        Raton ratonToshiba = new Raton("USB", "Toshiba");
        Computadora computadoraToshiba = new Computadora("Computadora Toshiba", monitorToshiba, tecladoToshiba, ratonToshiba);

        // Computadora 8: Samsung
        Monitor monitorSamsung = new Monitor("Samsung", 28);
        Teclado tecladoSamsung = new Teclado("Bluetooth", "Samsung");
        Raton ratonSamsung = new Raton("Bluetooth", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);

        // Computadora 9: MacBook Air
        Monitor monitorAir = new Monitor("Apple", 13);
        Teclado tecladoAir = new Teclado("Inalámbrico", "Apple");
        Raton ratonAir = new Raton("Inalámbrico", "Apple");
        Computadora macbookAir = new Computadora("MacBook Air", monitorAir, tecladoAir, ratonAir);

        // Computadora 10: MacBook Pro
        Monitor monitorPro = new Monitor("Apple", 16);
        Teclado tecladoPro = new Teclado("Inalámbrico", "Apple");
        Raton ratonPro = new Raton("Inalámbrico", "Apple");
        Computadora macbookPro = new Computadora("MacBook Pro", monitorPro, tecladoPro, ratonPro);

        // Crear orden1 y agregar 10 computadoras
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden1.agregarComputadora(computadoraDell);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraAsus);
        orden1.agregarComputadora(computadoraAcer);
        orden1.agregarComputadora(computadoraToshiba);
        orden1.agregarComputadora(computadoraSamsung);
        orden1.agregarComputadora(macbookAir);
        orden1.agregarComputadora(macbookPro);

        // Mostrar la orden
        orden1.mostrarOrden();
    }
}