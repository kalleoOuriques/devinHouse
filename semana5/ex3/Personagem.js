
export default class Personagem{

    constructor(nome){

        this.nome = nome
        this.percentualVida = 100
    }

    sofreuDano(percentualDano){

        this.percentualVida -= percentualDano
    }

    usouKitMedico(){

        if (this.percentualVida + 10 >= 100){

            this.percentualVida = 100

        } else {
            this.percentualVida += 10
        }
        
    }

}