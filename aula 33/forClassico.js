// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')
// console.log('Linha 5')

// i - index
// for (let i = 0; i <= 5; i++) {
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par);
// }

// -----------------------------------------------------------------------------------------

// const frutas = ['Maçã', 'Pêra', 'Uva', 'Luiz', 'Otávio', 'João', 'Miranda'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Índice ${i}`, frutas[i]);
// }


// ------------------------------------------------------------------------------------------

/* const pessoa = {
    nome: 'Isaque',
    idade: 15 ,
    cidade: 'Santa Luzia'
};

const chaves = Object.keys(pessoa);

for (let i = 0; i < chaves.length; i++) {
    const chave = chaves[i];
   console.log(chave, pessoa[chave]);
} */

// -------------------------------------------------------------------------------------------------


const clientes = [ 

    { nome: 'Roberto' , idade: 35 , cidade: 'Bh'},     

    { nome: 'Carlos', idade: 56 , cidade: 'Guarapari' },

    { nome: 'Adalton', idade: 26 , cidade: 'Betim' }


];

for (i = 0; i < clientes.length; i++) {
    let { nome, idade, cidade } = clientes[i]
    console.log(nome);
}