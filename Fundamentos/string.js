/* CADEIA DE CARACTERES */
const escola = "Mr da vinci"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

/* TABELA UNICODE */
console.log(escola.charCodeAt(3))

/* INDEXOF */
console.log(escola.indexOf("M"))

/* SUBSTRING */
console.log(escola.substring(1))
console.log(escola.substring(0, 4)) /* nao inclui o indice 4 */
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace("M", 'N'))
console.log(escola.replace(/\d/g, 'N')) /* substitui todas as digitos */
console.log(escola.replace(/\w/g, 'N')) /* substitui todas as letras */

/* TRANSFORMA EM ARRAY */
console.log('Ana, Maria, Pedro'.split(','))