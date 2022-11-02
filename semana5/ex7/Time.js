
export default class Time{

    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos){

        this.nome = nome
        this.sigla = sigla
        this.vitorias = vitorias
        this.derrotas = derrotas
        this.empates = empates
        this.golsMarcados = golsMarcados
        this.golsSofridos = golsSofridos

    }

    get numeroDePontos(){
        return 3*this.vitorias + this.empates
    }

    get numeroDeJogos(){
        return this.vitorias + this.derrotas + this.empates
    }

    computarPartida(partida){

        if (partida.siglaTimeA == this.sigla){
            
            if(partida.golsTimeA > partida.golsTimeB){

                this.vitorias += 1

            } else if (partida.golsTimeA == partida.golsTimeB) {

                this.empates += 1

            } else {

                this.derrotas += 1
            }

            this.golsMarcados += partida.golsTimeA
            this.golsSofridos += partida.golsTimeB

        } else if (partida.siglaTimeB == this.sigla){

            if(partida.golsTimeB > partida.golsTimeA){

                this.vitorias += 1

            } else if (partida.golsTimeB == partida.golsTimeA) {

                this.empates += 1

            } else {

                this.derrotas += 1
            }

            this.golsMarcados += partida.golsTimeB
            this.golsSofridos += partida.golsTimeA


        }
    }

    exibirSituacao(){

       console.log( 
        'Nome:', this.nome,
        '\nSigla:', this.sigla,
        '\nVitorias:', this.vitorias,
        '\nDerrotas:', this.derrotas,
        '\nEmpates:', this.empates,
        '\nGols Marcados:',this.golsMarcados,
        '\nGols Sofridos:', this.golsSofridos,
        '\nNúmeros de pontos:', this.numeroDePontos,
        '\nNúmero de jogos:', this.numeroDeJogos)

    }
}