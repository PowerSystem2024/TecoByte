'use strict';

try{
    let x = 10;
    //miFuncion();
    throw 'Mi Error';
}
catch(error){//Se catchea el error
    console.log(error);
}
finally{
    console.log('Termina la revision de errores');
}

//La ejecucion ahora continua
console.log('Continuamos...'); //No se muestra porque esta bloqueado

let resultado = -5;

try{ 
    //y = 5;
    if(isNaN(resultado))throw 'No es un número';
    else if(resultado === '') throw 'Es cadena vacia';
    else if( resultado >= 0) throw 'Valor positivo';
    else if ( resultado <= 0) throw 'Valor negativo';
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina la revision de errores 2');
}