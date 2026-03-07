// factory function (Função fábrica)
// Construtor function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,

         sobrenome,

         // GETTER
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
         },

         // SETTER
         set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
         },

         fala(assunto){
            return `${this.nome} está ${assunto}.`
         },

         altura: altura,

         peso: peso,

         // GETTER
         get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
         }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42)
console.log(p2.fala('falando sobre JS'));
console.log(p2.imc);

p1.nomeCompleto = 'Luiz Otávio Miranda';

console.log(p1.nome);
console.log(p1.fala);