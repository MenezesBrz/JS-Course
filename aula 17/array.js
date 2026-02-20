//               0       1        2         3 
let alunos = ['Luiz', 'Maria', 'Otávio', 'Isaque'];

console.log(alunos.indexOf(2));
console.log(typeof alunos);
console.log(alunos instanceof Array); // se retornar true = array, if false = não é array

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, -3));
console.log(alunos.slice(0, 3)); // último elemento não é incluído


console.log(alunos[50]); // Se acessar um item que não existe => valor: undefined

delete alunos[1]; // remove um elemento e o deixa vazio ( empty item )
console.log(alunos[1]);


const removido = alunos.shift(); // remove o elemento do começo
const removido2 = alunos.pop(); // remove o elemento do final
console.log(removido)
console.log(alunos);


alunos.unshift('Luiza'); // Adiciona no começo
alunos.unshift('Fábio');


alunos.push('Luiza'); // Adiciona no fim
alunos.push('Fábio');


alunos[alunos.length] = 'Luiza'; // Adiciona no fim
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';



alunos[0] = 'Eduardo'; // Altera
alunos[4] = 'Luiza';   // Adicionando


console.log(alunos); 
console.log(alunos[0]);
console.log(alunos[2]);