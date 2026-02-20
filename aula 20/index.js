/*
Primitivos (imutáveis - não podemos mudar/modificar) - string, number, boolean,
 undefined, null (bigintm, symbol) - valores copiados

Referência ( mutável ) - array, object, function - Passados por referência
*/

 /*let a = 'A';
let b = a;
console.log(a,b); // Cópia

a = 'Outra coisa';
console.log(a, b); */

/* let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c); */

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);