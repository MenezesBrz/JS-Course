/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda'
const alturaEmM = 1.8;
const idade = 36;
const peso = 84;
let iMC = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - idade;

/*
console.log(nome, 'tem', idade, 'anos, pesa', peso,);
console.log('tem', alturaEmCm,'de altura e seu IMC é de', iMC);
*/

// template strings

console.log(`${nome + ' ' + sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${iMC}`);
console.log(`${nome + ' ' + sobrenome} nasceu em ${anoNascimento}. `);

