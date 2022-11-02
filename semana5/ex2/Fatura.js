
export default class Fatura{

    constructor(id, descricao, quantia, preco){

        this.id = id
        this.descricao = descricao

        if (quantia < 0) {
            quantia = 0
        }
        this.quantia = quantia

        if (preco < 0) {
            preco = 0
        }
        this.preco = preco

    }

    obterValorTotal(){

        return this.quantia*this.preco
    }

}