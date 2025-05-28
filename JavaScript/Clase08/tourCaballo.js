// Se define el tamaño del tablero (8x8)
// Se puede cambiar por otro número
const N = 8;

// Se definen los ocho posibles movimientos del caballo
const movimientos = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

// Esta función crea una matriz de N x N inicializada con -1
function crearTablero() {
  return Array.from({ length: N }, () => Array(N).fill(-1));
}

// Esta función determina si una posición (x, y) es válida:
// - Debe estar dentro de los límites del tablero
// - Debe ser una casilla no visitada aún (valor -1)
function esValido(x, y, tablero) {
  return (
    x >= 0 && x < N &&
    y >= 0 && y < N &&
    tablero[x][y] === -1
  );
}

// Esta función imprime el tablero por consola
// Cada número representa el orden en el que el caballo visitó esa casilla
function imprimirTablero(tablero) {
  console.log("\nRecorrido del caballo (cada número es el paso correspondiente):\n");
  for (let fila of tablero) {
    console.log(fila.map(n => (n < 10 ? "0" + n : n)).join(" "));
  }
}

// Esta es la función principal que resuelve el problema del tour del caballo
function resolverTourCaballo() {
  const tablero = crearTablero();

  // Se establece la posición inicial del caballo en la esquina superior izquierda (0, 0)
  tablero[0][0] = 0;

  // Se intenta encontrar un recorrido completo usando backtracking
  if (moverCaballo(0, 0, 1, tablero)) {
    console.log("✅ ¡Solución encontrada!");
    imprimirTablero(tablero);
  } else {
    console.log("❌ No se encontró una solución.");
  }
}

// Esta función aplica el algoritmo de backtracking
// Intenta mover al caballo desde la posición (x, y) con el número de paso actual
function moverCaballo(x, y, paso, tablero) {
  // Si se han completado N*N pasos, se ha encontrado una solución
  if (paso === N * N) return true;

  // Se recorren todos los movimientos posibles
  for (let [dx, dy] of movimientos) {
    const nx = x + dx;
    const ny = y + dy;

    // Si el nuevo movimiento es válido, se registra y se continúa recursivamente
    if (esValido(nx, ny, tablero)) {
      tablero[nx][ny] = paso;

      // Se llama recursivamente al siguiente paso
      if (moverCaballo(nx, ny, paso + 1, tablero)) {
        return true;
      }

      // Si no se logra avanzar, se retrocede (backtracking)
      tablero[nx][ny] = -1;
    }
  }

  // Si ningún movimiento es válido, se retorna falso
  return false;
}

// Se ejecuta el algoritmo
resolverTourCaballo();
