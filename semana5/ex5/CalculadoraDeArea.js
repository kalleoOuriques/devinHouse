
export default class CalculadoraDeArea{
    constructor(tipo, base, altura){

        self.tipo = tipo
        self.base = base
        self.altura = altura
    }

    calcular(){
        if (self.tipo == 'triangulo') {

            return (self.base*self.altura)/2

        } else {

            return (self.base*self.altura)

        }
    }
}