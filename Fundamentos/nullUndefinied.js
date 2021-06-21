let valor /* não inicializada */
console.log(valor); /* undefined */


valor = null  /* ausencia de valor */
console.log(valor);
//console.log(valor.toString()); /* Erro! */


produto = {}
produto.preco = 3.50
produto.preco = undefined
produto.preco = null

console.log(produto.preco);
/* EVITAR ATRIBUIR UNDEFINED */