/* ARRAY É HETEROGENEO E FLIXÍVEL*/

const valores = [8.9 , 4.2, 9.100]
console.log(valores[0], valores[2])
valores[3] = 20

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())

delete valores[0]

console.log(typeof valores);