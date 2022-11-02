import Juros from './Juros.js'


const juros_1 = new Juros(10000, 0.07, 24)

console.log(juros_1.calcularJurosSimples())
console.log(juros_1.calcularJurosCompostos())

const juros_2 = new Juros(10000, 0.15, 10)

console.log(juros_2.calcularJurosSimples())
console.log(juros_2.calcularJurosCompostos())
