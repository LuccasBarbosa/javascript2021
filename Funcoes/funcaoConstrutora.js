function Carro(velocidadeMaxima = 200, delta = 5){
    
    // Atributo Privado
    let velocidadeAtual = 0

    // Método Público
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima ) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Método Público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

uno = new Carro
ferrari = new Carro(250, 20)
uno.acelerar()
uno.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(uno.getVelocidadeAtual())
console.log(ferrari.getVelocidadeAtual())

// Function
console.log(typeof(Carro))
// Objetct
console.log(typeof(uno))