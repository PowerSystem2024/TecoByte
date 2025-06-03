// Modificando esta constante cambiamos la cantidad de discos
const NUM_DISCOS = 7;

// Representamos las torres como pilas
let torreA = [];
let torreB = [];
let torreC = [];
let movimientos = 0;

// Inicializa la torre A con los discos
function inicializarTorres(n) {
  torreA = [];
  torreB = [];
  torreC = [];
  for (let i = n; i >= 1; i--) {
    torreA.push(i);
  }
}

// Mueve un disco entre dos torres
function moverDisco(origen, destino, nombreOrigen, nombreDestino) {
  const disco = origen.pop();
  if (destino.length > 0 && destino[destino.length - 1] < disco) {
    throw new Error(`❌ No se puede poner disco ${disco} sobre disco ${destino[destino.length - 1]}`);
  }
  destino.push(disco);
  movimientos++;
  console.log(`Mover disco ${disco} de ${nombreOrigen} a ${nombreDestino}`);
}

// Algoritmo recursivo de Torres de Hanoi
function hanoi(n, origen, destino, auxiliar, nombreOrigen, nombreDestino, nombreAuxiliar) {
  if (n === 1) {
    moverDisco(origen, destino, nombreOrigen, nombreDestino);
    return;
  }
  hanoi(n - 1, origen, auxiliar, destino, nombreOrigen, nombreAuxiliar, nombreDestino);
  moverDisco(origen, destino, nombreOrigen, nombreDestino);
  hanoi(n - 1, auxiliar, destino, origen, nombreAuxiliar, nombreDestino, nombreOrigen);
}

// Ejecución del juego
inicializarTorres(NUM_DISCOS);
console.log(`Resolviendo Torres de Hanoi con ${NUM_DISCOS} discos...\n`);
hanoi(NUM_DISCOS, torreA, torreC, torreB, 'A', 'C', 'B');

// Resultado final
console.log(`\n✅ Terminado en ${movimientos} movimientos.`);
console.log(' Torre A:', torreA);
console.log(' Torre B:', torreB);
console.log(' Torre C:', torreC);
