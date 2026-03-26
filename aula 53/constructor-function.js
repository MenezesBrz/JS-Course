// Função construtora -> objetos
// Função fabrica -> objetos
// Fabrica -> criPessoa
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Privadas ou métodos privados

    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome +':Sou um método');
    };
};

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();

console.log();