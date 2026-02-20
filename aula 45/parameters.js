// arguments que sustentam todos os argumentos enviados
 /*function funcao(a, b, c, d, e ,f) {
    let total = 0;
   for (let argumento of arguments) {
        total += argumento;
    } 

    // console.log(total, a, b, c);
    console.log(a, b, c, d, e, f)
};
//funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
funcao(1, 2, 3) */

/* function funcao(a, b = 2, c = 4) {
   // b = b || 0;
    console.log(a + b + c);
}
funcao(2, undefined, 20); */

/* function funcao({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
    
};
let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 30};
funcao(obj); */

/* function funcao([valor1, valor2, valor3]) {

}

funcao(['Luiz Otávio', 'Miranda', 30]); */

/* function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    };

    console.log(acumulador)
}

conta('+', 10, 20, 30, 40, 50); */

/* const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};

conta('+', 10, 20, 30, 40, 50); */

const conta = (...args) => {
    console.log(args);
};

conta('+', 10, 20, 30, 40, 50);