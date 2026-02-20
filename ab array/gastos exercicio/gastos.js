const gastos = [
    {nome: 'Lanche', valor: 15, categoria: 'comida'},
    {nome: 'Uber', valor: 30, categoria: 'transporte'},
    {nome: 'Hotel', valor: 152, categoria: 'viagem'}
];

const adicionarGasto = {
    nome: 'Guitarra',
    valor: 40,
    categoria: 'instrumento'
};

gastos.push(adicionarGasto);
const {nome, valor, categoria} = adicionarGasto;

let somaTotal = 0;
let maiorGasto = gastos[0];
let menorGasto = gastos[0];
let limiteGasto = 200;


for (const valores of gastos) {
    const tipoGasto = valores.categoria ;
    const totalGasto = valores.valor ;
    console.log(totalGasto, tipoGasto);

    somaTotal += totalGasto;

    if (valores.valor > maiorGasto.valor) {
        maiorGasto = valores;
    };

    if (valores.valor < menorGasto.valor) {
        menorGasto = valores
    }
};
let categoriaMaisCara = maiorGasto.categoria;
if (somaTotal > limiteGasto) {
    console.log('Limite de gasto ultrapassado!');
} else {
    console.log('Limite de gasto não ultrapassado.');
};

console.log(`Total gasto: ${somaTotal}`);
console.log(`Maior gasto: ${JSON.stringify(maiorGasto.valor)}`)
console.log(`Menor gasto: ${JSON.stringify(menorGasto.valor)}`)
console.log(`Categoria mais cara: ${categoriaMaisCara} `)
