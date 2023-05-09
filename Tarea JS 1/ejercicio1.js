function imprimirNumeros(numero){
    let acum="";
    for (let index = 0; index < numero; index++) {
        acum = acum+(index+1);
        console.log(acum);
    }
}

//imprimirNumeros(10);