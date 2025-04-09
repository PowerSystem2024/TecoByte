class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(value) {
    this._tipoEntrada = value;
  }

  get marca() {
    return this._marca;
  }

  set marca(value) {
    this._marca = value;
  }

  toString() {
    return `Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton [ID: ${this._idRaton}] - ${super.toString()}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado [ID: ${this._idTeclado}] - ${super.toString()}`;
  }
}

// Prueba de DispositivoEntrada, Raton y Teclado

// Crear ratones
const raton1 = new Raton("USB", "Logitech");
const raton2 = new Raton("Bluetooth", "HP");

// Crear teclados
const teclado1 = new Teclado("USB", "Genius");
const teclado2 = new Teclado("Inalámbrico", "Dell");

// Mostrar resultados
console.log(raton1.toString()); // Raton [ID: 1] - Tipo de entrada: USB, Marca: Logitech
console.log(raton2.toString()); // Raton [ID: 2] - Tipo de entrada: Bluetooth, Marca: HP

console.log(teclado1.toString()); // Teclado [ID: 1] - Tipo de entrada: USB, Marca: Genius
console.log(teclado2.toString()); // Teclado [ID: 2] - Tipo de entrada: Inalámbrico, Marca: Dell

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  set marca(value) {
    this._marca = value;
  }

  get tamaño() {
    return this._tamaño;
  }

  set tamaño(value) {
    this._tamaño = value;
  }

  toString() {
    return `Monitor [ID: ${this._idMonitor}] - Marca: ${this._marca}, Tamaño: ${this._tamaño}"`;
  }
}

const monitor1 = new Monitor("Samsung", 24);
const monitor2 = new Monitor("LG", 27);

console.log(monitor1.toString()); // Monitor [ID: 1] - Marca: Samsung, Tamaño: 24"
console.log(monitor2.toString()); // Monitor [ID: 2] - Marca: LG, Tamaño: 27"

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get monitor() {
    return this._monitor;
  }

  set monitor(value) {
    this._monitor = value;
  }

  get teclado() {
    return this._teclado;
  }

  set teclado(value) {
    this._teclado = value;
  }

  get raton() {
    return this._raton;
  }

  set raton(value) {
    this._raton = value;
  }

  toString() {
    return `\nComputadora [ID: ${this._idComputadora}] - Nombre: ${
      this._nombre
    }\n  ${this._monitor.toString()}\n  ${this._teclado.toString()}\n  ${this._raton.toString()}`;
  }
}

// Reutilizando monitor1, teclado1, raton1 de las pruebas anteriores
const computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);
const computadora2 = new Computadora("PC Oficina", monitor2, teclado2, raton2);

console.log(computadora1.toString());
console.log(computadora2.toString());

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    let computadorasStr = "";
    for (let compu of this._computadoras) {
      computadorasStr += compu.toString() + "\n";
    }
    return `\nOrden [ID: ${this._idOrden}]\n${computadorasStr}`;
  }
}

const orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

console.log(orden1.mostrarOrden());
