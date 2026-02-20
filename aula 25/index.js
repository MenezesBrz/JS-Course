/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter quantos else ifs eu quiser
// Eu só posso ter um else no final

/* const hora = Math.floor(Math.random() * 24) + 1;

if (hora >= 0 && hora <=11.59) {
    console.log('Bom dia');
}

else if (hora >= 12 && hora <= 17.59) {
    console.log('Boa tarde');
} 

else if (hora >= 18 && hora <= 23.59) {
    console.log('Boa noite');
}

else {
    console.log('Olá');
}; */

const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}