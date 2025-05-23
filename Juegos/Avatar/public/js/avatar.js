/* Con esta funcion lo que logramos es poder mostrar un alert con un mensaje predeterminado segun el label seleccionado*/
function seleccionarPersonajeJugador() {
  let seleccionado = document.querySelector('input[name="personaje"]:checked');
  if (seleccionado) {
    alert("Has seleccionado a: " + seleccionado.id);
  } else {
    alert("No has seleccionado ningún personaje");
  }
}

let botonPersonajeJugador = document.getElementById("boton-personaje");

botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
