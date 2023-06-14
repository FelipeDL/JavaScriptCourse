const primeiroNumero = 5;
const segundoNumero = 9;

const operacaoMatematica = primeiroNumero + segundoNumero;

//console.log(operacaoMatematica);

function soma(a,b){
   return a + b;
}
function subtracao(a,b){
    return a - b;
}
function multiplicao(a,b){
    return a*b;
}
function divisao(a,b){
    return Math.round(a/b);
}

console.log(soma(primeiroNumero, segundoNumero));

console.log(subtracao(segundoNumero,primeiroNumero));

console.log(multiplicao(primeiroNumero,segundoNumero));

console.log(divisao(segundoNumero, primeiroNumero));

console.log(divisao(primeiroNumero, segundoNumero));