// Função Factory
function criarPessoa(name, idade){
    return {
        name: name,
        idade: idade
    }
}

const factory = criarPessoa('Fulano', 34)
console.log(factory);



function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1,
        total : function(){
            total = this.preco * this.desconto
            totalComDesconto = this.preco - total
            return totalComDesconto
        }
    }
}

const ipad = criarProduto('Mini', 2000)
console.log(ipad);
console.log(ipad.total().toFixed(2));