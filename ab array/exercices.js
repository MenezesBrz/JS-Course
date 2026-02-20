const carros = [
    { marca: 'BMW', modelo: 'E36', ano: 1995 },
    { marca: 'Audi', modelo: 'A4', ano: 2005 },
    { marca: 'Ford', modelo: 'Fiesta', ano: 2010 }
  ];

function filtrarCarrosPorAno(carros, anoMinimo) {
    return carros.filter(carro => carro.ano >= anoMinimo);
}