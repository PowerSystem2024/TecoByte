
miFuncion();

function miFuncion(){
    console.log('Saludo desde mi funcion');
}

let myFuncion = function(){
    console.log('Saludos desde la función anónima');
}

//Se crea una función flecha
let miFuncionFlecha = () => {
    console.log('Saludos desde mi función flehca');
}
//Hay más variantes para funciones flecha 
miFuncionFlecha();

//Ejemplo de una linea
const saludar = () => console.log(' Saludos desde esta funcion flecha');
saludar();

//Otro ejemplo
const saludar2 = () => {
    return 'Saludos desde la funcion flecha 2';
}
console.log(saludar2);

//Se simplifica la funcion anterior
const saludar3 = () => 'Saludamos dede la funcion flecha 3';
console.log(saludar3);

//Otro ejemplo
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

//FUnciones flecha que reciben parametros
const funcionParametros = (mensaje) => console.log(mensaje);
funcionParametros('Saludos desde esta funcion con parametros');

//FUncion clasica 
const funcionParametrosClasicos = function(mensaje){
    console.log(mensaje);
}
funcionParametrosClasicos('Saludos desde la funcion clasica');

//Se pueden omitir los parentesis en la funcion flecha:
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Otra forma de tranajar con funcion flecha');

//Funcion flecha con varios parametros:
//Se puede abrir la funcion y tener mas cosas dentro de ella:
const funcionConParametros2 = (op1, op2) =>{
    let resultado = op1 + op2;
    return resultado;
} 
console.log(funcionConParametros2(3,5));
