
function destruct(objeto){

    let nome, idade, profissao

    ({nome, idade, profissao} = objeto)

    let string = `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`
    return string
}

const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
  };

console.log(destruct(pessoa))