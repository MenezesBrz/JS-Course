function meuEscopo () {
   const gastos = [
    {nome: 'Lanche', valor: 15, categoria: 'comida'},
    {nome: 'Uber', valor: 30, categoria: 'transporte'},
    {nome: 'Hotel', valor: 152, categoria: 'viagem'},
   ];

        function adicionarGasto (gastos) {
            const novoGasto = {
                nome: 'Guitarra',
                valor: 40,
                categoria: 'instrumento'
            };
            gastos.push(novoGasto);
            return novoGasto;
        }

    const gastoCriado = adicionarGasto(gastos);

            function somaTotal (gastos) {
                let soma = 0;
                
                for (const valores of gastos) {
                    soma += valores.valor;
                }
              return soma;
            };


            function tipoGastos (gastos) {
              const resultado = []

                for (const valores of gastos) {
                    resultado.push({
                        valor: valores.valor,
                        categoria: valores.categoria
                    });
                };

                return resultado;  
            };

        function maiorValor () {
            let maiorGasto = gastos[0];
                for (let valores of gastos) {
                    const {nome, valor, categoria} = valores                   

                    if (valores.valor > maiorGasto.valor) {
                        maiorGasto = valores;
                    };
                };
            return maiorGasto;
        };

        function menorValor (gastos) {
            let menorGasto = gastos[0]
                for (let valores of gastos) {
                    const {nome, valor, categoria } = valores

                    if ( valores.valor < menorGasto.valor) {
                        menorGasto = valores;
                    };
                };
            return menorGasto    
        };

                function limiteGasto () {
                    let limite = 200;

                    if (somaTotal(gastos) > limite) {
                        console.log('Limite de gastos ultrapassado!')
                    } else {
                        console.log('Limite de gastos não ultrapassado.')
                    };
                  return `Limite: ${limite}`;
                };

                function categoriaMaisCara (gastos) {
                    let maiorGasto = gastos[0];
                        for (let valores of gastos) {
                            if (valores.valor > maiorGasto.valor) {
                                maiorGasto = valores;
                            };
                        };
                    return maiorGasto.categoria      
                };      
   for (const item of tipoGastos(gastos)) {
      console.log(item.valor, item.categoria);     
   }

const maior = maiorValor();   
console.log(`Maior gasto: ${maior.valor} ${maior.categoria}`);

const menor = menorValor(gastos);
console.log(`Menor gasto: ${menor.valor} ${menor.categoria}`);

console.log(`Soma total: ${somaTotal(gastos)}`);
console.log(limiteGasto()); 

const maiorCategoria = categoriaMaisCara(gastos);
console.log(`Maior categoria: ${maiorCategoria}`);
   
}

meuEscopo()