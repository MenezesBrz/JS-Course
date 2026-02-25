// return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a, b);
}

console.log(soma2(5, 2));

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá')
const resto = (fala('mundo!'));
console.log(resto);

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log('---------');

function criaMultiplicador(multiplicador) {
    // multiplicador
       return function(n) {
        return n * multiplicador;
    };
}

const duplicador = criaMultiplicador(2);
const triplicador = criaMultiplicador(3);
const quadriplicador = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(2));