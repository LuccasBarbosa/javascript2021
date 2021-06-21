const nome = 'Rebeca'
const texto = 'Olá '+ nome +'!'
const template = `Olá ${nome}!`

console.log(template)

/* expressoes */
console.log(`1 + 1 = ${1+1}`)
console.log(`${nome}`)

/* Arrow Function */
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)