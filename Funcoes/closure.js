// Closure é o escopo criando quando uma função é declarada
// Esse escopo permite a funçaão acessar e manipular variáveis externas a função
const valor = 'Global'

function fora(){
    const valor = 'Local'

    function dentro(){
        return valor
    }

    return dentro()


}

const minhaFuncao = fora()
// GLOBAL
console.log(valor);

// LOCAL
console.log(minhaFuncao);
