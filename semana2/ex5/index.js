
var entrada = parseInt(prompt('Digite um número:'))

var par = 0
var impar = 0
for (let i = 0; i < entrada; i++){

    if (i % 2 == 0){
        par += 1
    } else {
        impar += 1
    }
}

alert(`Par: ${par}\nímpar: ${impar}`)