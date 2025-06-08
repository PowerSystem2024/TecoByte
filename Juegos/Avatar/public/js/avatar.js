let ataqueJugador;
let ataqueEnemigo;

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
  let ataques = ["Trompada", "Patada", "Barrida"];
  ataqueEnemigo = ataques[aleatorio(1, ataques.length - 1)];
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
