function comparar(array1, array2) {
    let resultado=[];
    for (let index1 = 0; index1 < array1.length; index1++) {
        for (let index2 = 0; index2 < array2.length; index2++) {
            if(array1[index1] === array2[index2]){

                resultado.push(array1[index1]);

            }
        }   
    }
    if (resultado.length == 0) {
        return "No se encontraron coincidencias";
    } else {
        return resultado;
    }
    
    
}

Array1= ['rojo', 'azul', 'amarillo'];
Array2= ['blanco', 'negro', 'rojo'];

console.log(comparar(Array1,Array2));


