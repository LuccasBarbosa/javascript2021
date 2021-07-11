const valor = 'Global'

function exibe(){
    return valor
}

function exec(){
    const valor = 'Local'
    return exibe()
}

// Global
console.log(exibe());
// Global
console.log(exec());