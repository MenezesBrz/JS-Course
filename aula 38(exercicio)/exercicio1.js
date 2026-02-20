const min = 1;
const max = 50

let first = Math.floor(Math.random() * (max - min) + min);
let second = Math.floor(Math.random() * (max - min) + min);

function biggest (first, second) {
    let bigger;
    if (first > second) {
        bigger = first;
    } else {bigger = second;}

    return bigger
}
 
console.log(biggest(first, second));

