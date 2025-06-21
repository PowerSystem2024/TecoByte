let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 3;
let vidaEnemigo = 3;

//Creamos una funcion que se ejecuta al cargar la pagina, en este caso lo que hace es agregar un evento al boton de seleccionar personaje
function iniciarJuego() {
  //Aca creamos una variable para el boton y luego le agregamos un evento listener
  let botonPersonajeJugador = document.getElementById("boton-personaje");
  botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

  let botonTrompada = document.getElementById("boton-trompada");
  botonTrompada.addEventListener("click", ataqueTrompada);
  let botonPatada = document.getElementById("boton-patada");
  botonPatada.addEventListener("click", ataquePatada);
  let botonBarrida = document.getElementById("boton-barrida");
  botonBarrida.addEventListener("click", ataqueBarrida);
}

// Con esta funcion lo que logramos es poder mostrar un alert con un mensaje predeterminado segun el label seleccionado
function seleccionarPersonajeJugador() {
  let seleccionado = document.querySelector('input[name="personaje"]:checked');
  let spanPersonajeJugador = document.getElementById("personaje-jugador");

  if (seleccionado) {
    spanPersonajeJugador.innerHTML = seleccionado.id;
    seleccionarPersonajeEnemigo();
    vidaJugador = 3;
    vidaEnemigo = 3;
    actualizarVidas();
    habilitarBotonesAtaque();
    limpiarMensajes();
  } else {
    alert("No has seleccionado ningún personaje");
  }
}

/**
Selecciona aleatoriamente un personaje enemigo distinto al personaje seleccionado por el usuario.

Busca todos los inputs de tipo radio con el nombre "personaje", excluye el que está seleccionado,

elige uno al azar entre los restantes y actualiza el elemento con id "personaje-enemigo" con el id del personaje enemigo seleccionado.
 */
function seleccionarPersonajeEnemigo() {
  let seleccionado = document.querySelector('input[name="personaje"]:checked');
  let personajes = document.querySelectorAll('input[name="personaje"]');

  let opciones = Array.from(personajes).filter(
    (p) => !seleccionado || p.id !== seleccionado.id
  );

  let enemigo = opciones[Math.floor(Math.random() * opciones.length)];
  let spanPersonajeEnemigo = document.getElementById("personaje-enemigo");

  if (spanPersonajeEnemigo) {
    spanPersonajeEnemigo.innerHTML = enemigo.id;
  }
}

function ataqueTrompada() {
  ataqueJugador = "Trompada";
  ataqueAleatorioEnemigo();
}

function ataquePatada() {
  ataqueJugador = "Patada";
  ataqueAleatorioEnemigo();
}

function ataqueBarrida() {
  ataqueJugador = "Barrida";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "Trompada";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "Patada";
  } else {
    ataqueEnemigo = "Barrida";
  }
  combate();
}

function combate() {
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (
    (ataqueJugador == "Trompada" && ataqueEnemigo == "Barrida") ||
    (ataqueJugador == "Patada" && ataqueEnemigo == "Trompada") ||
    (ataqueJugador == "Barrida" && ataqueEnemigo == "Patada")
  ) {
    vidaEnemigo--;
    crearMensaje("GANASTE");
  } else {
    vidaJugador--;
    crearMensaje("PERDISTE");
  }
  actualizarVidas();
  verificarFinDelJuego();
}

function verificarFinDelJuego() {
  if (vidaJugador <= 0) {
    crearMensajeFinal("¡Has perdido la partida!");
    deshabilitarBotonesAtaque();
  } else if (vidaEnemigo <= 0) {
    crearMensajeFinal("¡Has ganado la partida!");
    deshabilitarBotonesAtaque();
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensaje");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu personaje ataco con " +
    ataqueJugador +
    ", el personaje del enemigo atacó con " +
    ataqueEnemigo +
    " " +
    resultado +
    "";
  sectionMensajes.appendChild(parrafo);
}

function crearMensajeFinal(mensaje) {
  let sectionMensajes = document.getElementById("mensaje");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `<b>${mensaje}</b>`;
  sectionMensajes.appendChild(parrafo);
}

function deshabilitarBotonesAtaque() {
  document.getElementById("boton-trompada").disabled = true;
  document.getElementById("boton-patada").disabled = true;
  document.getElementById("boton-barrida").disabled = true;
}

function habilitarBotonesAtaque() {
  document.getElementById("boton-trompada").disabled = false;
  document.getElementById("boton-patada").disabled = false;
  document.getElementById("boton-barrida").disabled = false;
}

function actualizarVidas() {
  document.getElementById("vida-jugador").innerText = vidaJugador;
  document.getElementById("vida-enemigo").innerText = vidaEnemigo;
}

function limpiarMensajes() {
  document.getElementById("mensaje").innerHTML = "";
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
  // Reinicia selección de personajes
  let radios = document.querySelectorAll('input[name="personaje"]');
  radios.forEach((radio) => (radio.checked = false));
  document.getElementById("personaje-jugador").innerHTML = "";
  document.getElementById("personaje-enemigo").innerHTML = "";

  // Reinicia vidas
  vidaJugador = 3;
  vidaEnemigo = 3;
  actualizarVidas();

  // Limpia mensajes y habilita botones
  limpiarMensajes();
  habilitarBotonesAtaque();
}

// Agregar event listener al botón de reinicio
window.addEventListener("load", function () {
  let botonReiniciar = document.getElementById("boton-reiniciar");
  if (botonReiniciar) {
    botonReiniciar.addEventListener("click", reiniciarJuego);
  }
});

window.addEventListener("load", iniciarJuego);
