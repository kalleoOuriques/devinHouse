
function mesclaObjetos(objUm, objDois){

    return {...objUm, ...objDois}
}



const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);