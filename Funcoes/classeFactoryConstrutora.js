// Classe
class Pessoa{

    constructor(nome){
        this.nome = nome
    }

    falar = nome => { console.log(`Oi meu nome é ${this.nome}`);}
}

p1 = new Pessoa('Lucas')
p1.falar()


// Factory
const criarPessoa = function(nome){
    return {
        nome: this.nome,
        falar: function(){
            console.log(`Oi meu nome é ${nome}`)
        }
    }

}

p2 = new criarPessoa('Silvia')
p2.falar()


// Construtora
function novaPessoa(nome){
    this.nome = nome
    this.falar = function (){
        console.log(`Oi meu nome é ${nome}`)
    }
}

p3 = new novaPessoa('Nicolas')
p3.falar()
