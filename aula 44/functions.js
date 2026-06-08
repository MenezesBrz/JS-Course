/*// Declaração de função      (Function hoisting)
function falaOi() {
    console.log('Oi');
};
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
}; 
funcaoArrow();

// Dentro de um objeto
const obj = {
    fala: function() {
        console.log('Estou falando...');
    }
}; */

// Declaração de função (function hoisting)
falaOi();

function falaOi() {
    console.log('Oi');
}
falaOi();

// As funções são objetos de primeira classe (First-class objects) -- trata como dado
// Function expression -- função definida como const

const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function!');
}

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();