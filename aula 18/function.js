  function saudacao(nome, idade) {
  return `Bom dia ${nome}!`;
} 

const variavel = saudacao('Luiz');
console.log(variavel); 

 // -------------------SOMA-----------------------

 function soma(x, y, z) {
     const resultado = x + y + z;
     return resultado;
 }

 const resultado = soma(2, 2, 2);
 console.log(resultado);

 // ------------------------------------------

 const raiz = function(n) { 
 return n ** 0.5 
};

 const raizSimplificada = n => n ** 0.5        // arrow function, simplificação da função

 console.log(raiz(16));

 // ------------------------------------------

function saudar(nome) {
 return `Bom dia ${nome}!`;
}

console.log(saudar('Isaque'));