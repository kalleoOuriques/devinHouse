
function concatena(arr1, arr2){

    let retorno = [...arr1, ...arr2]
    return retorno
}

const novoArray = concatena([1, 2, 3], [4, 5, 6]);
console.log(novoArray);