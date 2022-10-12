var valor_init = parseInt(prompt('Digite o valor inicial:'))

var raiz = parseInt(prompt('Digite a raiz:'))

var result = `Valor inicial = ${valor_init};raiz = ${raiz}; P.A. = `
var valor = valor_init

for (let i = 0; i < 10; i++) {
    
    if (i == 9) {
        result += `,${valor}.`
    } else if (i == 0) {

        result += `${valor}`
    }else {
        result += `,${valor}`
    }
    
    valor += raiz
}

console.log(result)

