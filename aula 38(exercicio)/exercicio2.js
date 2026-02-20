const min =720;
const max = 3220;

const largura = Math.floor(Math.random() * (max - min) + min);
const altura = Math.floor(Math.random() * (max - min) + min);

  /*  function ePaisagem (largura, altura) {
        // return largura > altura ? true : false
        // return largura > altura
        if (altura > largura) {
            return false
        } else {
            return true
        }
    }; */

    const ePaisagem = (largura, altura) => largura > altura;

    console.log(ePaisagem(1920, 1080));