/*let nome = 'Isaque'; // String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome , 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome ,' em 2015.');
console.log('O filho de', nome,' se chama Eduardo.');


// -------------------------------------------------- */

// Não podemos redeclarar variáveis com let 
// NÃO UTILIZE VAR, UTILIZE LET.awd

let nome; // Declarou a variável ( undefined )
nome = 'João'; // Inicializando a variável
console.log(nome, 'Gostaria de comer pizza.');
nome = 'Otávio';
console.log(nome, 'quer sair.');


// Não podemos criar variáveis com palavras reservadas
// Exemplo: let let, ou let console, pois são palavras que já possuem valores na engine js


// Variáveis PRECISAM ter nomes significativos
let n = 'João'
console.log(n)

let NomeCliente = 'João';
console.log(NomeCliente)


// Não podemos começar o nome de uma variável com um número
// let 1nome; após a primeira letra pode ser adicionado um número
let nome1 = 'Jõao';
console.log(nome1);

// Não podem conter espaços ou traços
// Utilizamos camelCase
let nomeCompletoDoCliente = 'Luiz Otávio';

// Case-sensitive ( uppercase makes diference )
let nomeCliente = 'Luiz'
let nomecliente = 'Otávio'


// -------------------------------------- RESUMO --------------------------------------  //

// Não podemos redeclarar variáveis com let 
// NÃO UTILIZE VAR, UTILIZE LET.awd
// Não podemos criar variáveis com palavras reservadas
// Exemplo: let let, ou let console, pois são palavras que já possuem valores na engine js
// Variáveis PRECISAM ter nomes significativos
// Não podemos começar o nome de uma variável com um número
// let 1nome; após a primeira letra pode ser adicionado um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive ( uppercase makes diference )