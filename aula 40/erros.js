/*try {
  console.log('Abri um arquivo');  // É executada quando não há erros console.
  console.log('Manipulei o arquivo e gerou erro')
  console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro');
    }   finally {
        console.log('Também sou finally')
    }

} catch (err) {
    console.log('Tratando o erro') // É executada quando há erros
} finally {
    console.log('Eu sempre sou executado') // Sempre
}*/




        function retornaHora (data) {
            if (data && !(data instanceof Date)) {
                throw new TypeError('Esperando instância de Date.')
            }

            if (!data) {
                data = new Date();
            }

            return data.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                seconds: '2-digit',
                hour12: false
            });
        }


        try {
            const data = new Date ('01-01-1970 12:58:12');
            const hora = retornaHora();
            console.log(hora);
        } catch(err) {
            //Tratar erro
        } finally {
            console.log('Tenha um bom dia')
        }


