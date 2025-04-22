//  Clase base DispositivoEntrada 
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

// Subclases Raton y Teclado
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Raton [ID: ${this._idRaton}] → ${super.toString()}`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}] → ${super.toString()}`;
    }
}

//  Clase Monitor 
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}], Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}

// Step 4: Clase Computadora 
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `\nComputadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}]\n ${this._monitor.toString()}\n ${this._teclado.toString()}\n ${this._raton.toString()}`;
    }
}

//  Step 5: Clase Orden 
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasStr = '';
        for (let computadora of this._computadoras) {
            computadorasStr += computadora.toString();
        }
        console.log(`\nOrden [ID: ${this._idOrden}]\n${computadorasStr}`);
    }
}

//  Step 6: Crear objetos y demostrar polimorfismo 

// Objetos individuales
let raton1 = new Raton("USB", "Logitech");
let teclado1 = new Teclado("USB", "Redragon");
let monitor1 = new Monitor("HP", "27 pulgadas");

let computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

// Otra computadora
let computadora2 = new Computadora(
    "PC Oficina",
    new Monitor("Samsung", "24 pulgadas"),
    new Teclado("Bluetooth", "Microsoft"),
    new Raton("Bluetooth", "Genius")
);

// Orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();
