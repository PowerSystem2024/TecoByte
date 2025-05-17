function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion1()
miFuncion2()

//Funciones tipo CallBack
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack (`Resultado: ${res}`);
}

sumar (5, 3, imprimir);

//LLamadas asincronas con uso de la funcion setTimeout
function miFuncionCallBack(){
    console.log('Saludo asincrono despues de 3 segundos');
}
setTimeout(miFuncionCallBack, 3000);

setTimeout(function() {console.log('Saludo asincrono 2')}, 5000);

setTimeout(() => console.log('Saludo asincrono 3'),4000);

let reloj = () => {
    let fecha = new Date();
        console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);


