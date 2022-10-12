
var ent_op = prompt('Digite a operação(+, -, * ou /):')
var ent_n1 = parseInt(prompt('Digite o primeiro número:'))
var ent_n2 = parseInt(prompt('Digite o segundo número:'))

switch(ent_op) {
    case '+':
        result = ent_n1 + ent_n2
        break
    
    case '-':
        result = ent_n1 - ent_n2
        break

    case '*':
        result = ent_n1 * ent_n2
        break

    case '/':
        result = ent_n1 / ent_n2
        break

    default:
        result = 'Operação inválida!'
}

alert(result)