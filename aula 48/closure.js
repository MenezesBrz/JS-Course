function retornaFuncao(nome) {
    // const nome = 'Luiz';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('');
console.dir(funcao);
console.dir(funcao);