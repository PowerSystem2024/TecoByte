function nReinas(N) {
    // Se crea un tablero N x N lleno de puntos sin reinas
    const board = Array.from({ length: N }, () => Array(N).fill('.'));

    // Arreglo para guardar en qué posición se colocó cada reina
    const posiciones = [];

    // Función para verificar si una reina puede colocarse en esa posición
    function esSeguro(fila, columna) {
        // Se verifica si hay una reina en la misma columna
        for (let i = 0; i < fila; i++) {
            if (board[i][columna] === 'R') return false;
        }

        // Verificar diagonal hacia arriba a la izquierda
        for (let i = fila - 1, j = columna - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'R') return false;
        }

        // Verificar diagonal hacia arriba a la derecha
        for (let i = fila - 1, j = columna + 1; i >= 0 && j < N; i--, j++) {
            if (board[i][j] === 'R') return false;
        }

        return true; // Si pasa todo, es seguro colocar la reina
    }

    // Función recursiva para colocar reinas fila por fila
    function colocarReinas(fila) {
        // Si ya se coloco una reina en cada fila, la solución está completa
        if (fila === N) return true;

        // Se intenta poner una reina en cada columna de la fila actual
        for (let columna = 0; columna < N; columna++) {
            if (esSeguro(fila, columna)) {
                // Se coloca la reina
                board[fila][columna] = 'R';
                posiciones.push([fila, columna]);

                // Llamada recursiva para la siguiente fila
                if (colocarReinas(fila + 1)) {
                    return true; // Si se encuentra una solución, salimos
                }

                // Si no funcionó, se quita la reina
                board[fila][columna] = '.';
                posiciones.pop();
            }
        }

        // Si no se pudo colocar ninguna reina en esta fila, se devuelve falso
        return false;
    }

    // Se empieza desde la primera fila
    if (colocarReinas(0)) {
        console.log(`✅ Solución para N = ${N}`);
        console.log("📍 Posiciones de las reinas:");
        posiciones.forEach((pos, i) => {
            console.log(`Reina ${i + 1}: fila ${pos[0]}, columna ${pos[1]}`);
        });

        console.log("🧩 Tablero final:");
        board.forEach(fila => {
            console.log(fila.join(" "));
        });
    } else {
        console.log(`❌ No hay solución para N = ${N}`);
    }
}

// Este número se puede cambiar para probar con otros tamaños
nReinas(8);
