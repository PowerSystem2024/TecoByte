let miPormesa = new Promise( (resolver, rechazar) => {
    let expresion = true;
    if(expresion) {
        //resolver('Resolvió correctamente');
    } else {
        //rechazar ('Se produjo un error');
    }
});

//miPormesa.then(
//  valor => console.log(valor),
//  error => console.log(error)
//);

//miPormesa
//.then(valor => console.log(valor))
//.catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('Incio promesa');
    setTimeout( () => resolver('Saludos desde promesa, callback, funcion felcha y setTimeout'),3000);
    //console.log('Final promesa');
});
//Llamado a la promesa utilizando setTimeout
//promesa.then(valor => console.log(valor));

//async indica que una funcion represga una promesa
async function miFuncionConPromesa(){
    return'Saludos con promesas y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });   
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimepout() {
    let miPromesa = new Promise (resolver => {
        console.log('Inicio de funcion');
        setTimeout(()=> resolver('Promesa con await y Timeout'),3000);
        console.log('Final de funcion');
    });
   console.log(await miPromesa); 
}

funcionConPromesaAwaitTimepout();
