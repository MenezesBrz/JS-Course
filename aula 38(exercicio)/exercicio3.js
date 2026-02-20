const min = 0;
const max = 100;

// const number = Math.floor(Math.random() * (max - min) - min);

    function fizzBuzz (number) {
        const fizz = 'Fizz';
        const buzz = 'Buzz';

        if (number % 3 == 0) {
            return fizz;
        } if (number % 5 == 0) {
            return buzz;
        } if (number % 3 && 5 == 0) {
            return fizz + buzz;
        } else {
            return number;
        } if (number == Number) {
            return number
        }
    }

    


    function fizBuzz (number) {
        if (typeof number == 'number') return number;
        if (number % 3 === 0) return 'Fizz';
        if (number % 5 === 0) return 'Buzz';
        if (number % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
        return numero
    }

    for (let i = 0; i <= 100; i++) {
        console.log(i, fizBuzz(i))
    }