  function timerScope() {
    const clock = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar') 

    let inicio = null
    let timer = null

          function time() {

            let agora = Date.now()
            let diferenca = agora - inicio

            let segundos = Math.floor(diferenca / 1000)
            return segundos
          };

    iniciar.addEventListener('click', function(event) {
      inicio = Date.now()

       timer = setInterval(function() {
        clock.innerHTML = time();
      }, 1000); 
    });

    pausar.addEventListener('click', function(event) {
      clearInterval(timer);
    });

    zerar.addEventListener('click', function(event) {
      alert('Cliquei no zerar')
    });
  };

  timerScope();