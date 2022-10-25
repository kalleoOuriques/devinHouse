export default class User {
    constructor(nome, celular, cpf,  senha){

        this.saldo = 0;
        this.cpf = cpf
        this.nome = nome;
        this.celular = celular;
        this.senha = senha;

    }



    deposito(valor){

        this.saldo = valor + this.get_saldo()
    }
    
    
    saque(valor){
    
        this.saldo = this.get_saldo() - valor
    
    }
    
    get_saldo(){

        return this.saldo

    }


}
