
class Animal {

    constructor(nome, idade){

        this.nome = nome
        this.idade = idade
        this.som;
    }
}

export class Cachorro extends Animal {

    constructor(nome, idade){
       super(nome, idade)
       this.som = 'latido'
    }
    
}

export class Gato extends Animal {

    constructor(nome, idade){
       super(nome, idade)
       this.som = 'miado'
    }
    
}