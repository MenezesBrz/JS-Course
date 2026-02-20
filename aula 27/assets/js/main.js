function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (!peso || !altura) {
        resultado.textContent = "Preencha todos os campos!";
        return
    }
    
      if (peso <= 10 || peso >= 600) {
        resultado.textContent = "Peso fora do intervalo válido!";
        return;
      }
      
      if (altura <= 0.5 || altura >= 2.7) {
        resultado.textContent = "Altura fora do intervalo válido!";
        return;
      }

      const imc = peso / (altura * altura);
      resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
      
      resultado.classList.remove('imc-ok', 'imc-erro');
      if (imc >= 18.5 && imc < 25) {
        resultado.classList.add('imc-ok');   
      } else {
        resultado.classList.add('imc-erro'); 
      }
}