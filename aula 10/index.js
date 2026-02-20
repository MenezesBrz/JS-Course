// String, number, undefined, null, boolean, symbol

const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String

// ----------------------------------- //

const num = 10; // Number
const num1 = 10.52; // Number

// ----------------------------------- //

let nomeAluno; // Undefined -> Não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> Não aponta para local nenhum na memória

// ----------------------------------- //

const aprovado = false; // Boolean = true, false (lógico)

// ----------------------------------- //

// console.log(typeof sobrenomeAluno, typeof num1);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);