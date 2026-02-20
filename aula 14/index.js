//               0123456789 
let umaString = 'Um\"texto\"em um lindo dia';

/*console.log(umaString[4]); */
console.log(umaString.charAt(4)); 
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('texto', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(3, 8));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split('m', 3));

console.log(umaString.toUpperCase());
console.log(umaString.toLocaleLowerCase());