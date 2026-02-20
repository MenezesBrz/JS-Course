// Não podemos redeclarar constantes com const 
// NÃO UTILIZE VAR, UTILIZE const
// Não podemos criar constantes com palavras reservadas
// Exemplo: let let, ou let console, pois são palavras que já possuem valores na engine js
// Constantes PRECISAM ter nomes significativos
// Não podemos começar o nome de uma constante com um número
// const 1nome; após a primeira letra pode ser adicionado um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive ( uppercase makes diference )

/*const nome = 'Jõao'
console.log(nome); */


const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;  // + - * /
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

console.log(typeof segundoNumero)