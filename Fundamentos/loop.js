/* LOOP DE REPETIÇÃO */
lista = [1,2,3,4]

for(var i= 0; i <= lista.length; i++){
    console.log(lista[i])
}

/* LOOP COM let */
for (let a = 0; a <= 10; a++){
    console.log(a);
}


const funcs = []

for (var index = 0; index < 10; index++) {
    funcs.push(function(){
        console.log(index);
    })
    
}

funcs[2]() /* retorna 10 */
funcs[8]() /* retorna 10 */



funcs2 = []

for (let t = 0; t < 10; t++) {
    funcs2.push(function(){
        console.log(t);
    })
    
}

funcs2[2]() /* retorna 2 */
funcs2[8]() /* retorna 8 */