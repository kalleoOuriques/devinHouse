

var teste;
teste = 'kalleo';

console.log(teste)

var elementos = document.getElementsByClassName('teste')
var tamanho = elementos.length
for (let i = 0; i < tamanho; i++){
    elementos[`${i}`].innerText = `${i}`
}

