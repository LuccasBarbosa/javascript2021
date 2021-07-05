const notas = [7.9, 9, 10, 6.5]

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Maria',
    peso: 64,
    idade: 45
}

for (let j in pessoa) {
    console.log(`${j}: ${pessoa[j]}`);
}