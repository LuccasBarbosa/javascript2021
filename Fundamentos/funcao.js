/* VAR - NAO CRIAR VARIAVEIS GLOBAIS */

console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

/* SEM RETORNO */
function imprimeSoma(c, d){
    console.log(c+d);
}

imprimeSoma(2,4)


/* COM RETORNO */
function imprimirSoma(a, b){
    return a + b
}

console.log(imprimirSoma(2,2));
console.log(imprimirSoma(2,2,4,5,6));
imprimirSoma()


// VALOR DEFAULT
function soma(a, b = 0){
    return a + b
}

console.log(soma(1, 3))

/* FUNCAO EM VARIAVEL */
const imprimir = function(e,f){
    console.log(e+f);
}

imprimir(12,5)

/* ARROW FUNCTION */
const somar = (y, z) => {
    return y + z
}

// Retorno implicito
const subtracao = (f, g) => f - g
console.log(subtracao(10, 2))

