

var entrada  = parseInt(prompt('Digite um número:'))
var result = 0

while(entrada != -1){

    if (!isNaN(entrada)) {
        result += entrada
    }

    entrada = parseInt(prompt('Digite um número:'))
   
    
  
}

alert(result)