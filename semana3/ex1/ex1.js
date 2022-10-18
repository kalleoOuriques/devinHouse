function procuraMinMax(entrada, array) {
 let menor;
 let maior;
 let resposta;
 
  if (array != null && (Array.isArray(array)?array.length: false)) {
    
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        menor = array[0];
        maior = array[0];
      } else {
        if (menor > array[i]) {
          menor = array[i];
        }

        if (maior < array[i]) {
          maior = array[i];
        }
      }
    resposta = `Maior:${maior}  Menor:${menor}`
    }
  } else {
    resposta = 'Não foi possível encontrar!'
  }
  console.log(entrada, resposta)
}

let entrada_1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
let entrada_2 = []
let entrada_3 = null

procuraMinMax('Entrada_1:', entrada_1)
procuraMinMax('Entrada_2:', entrada_2)
procuraMinMax('Entrada_3:', entrada_3)