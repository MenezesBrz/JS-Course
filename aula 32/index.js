/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , três, , cinco, , sete] = numeros;

console.log(um, três, cinco); */

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2          
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(numeros[1][2]);

const [,[,,seis]] = numeros;
console.log(seis);




// ...resto

/* let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [B, C, A];
[a, b, c] = letras;

console.log(a, b, c);
*/