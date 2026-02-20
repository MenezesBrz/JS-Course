const convidados = [
    {nome: 'Lucas', idade: 18, vip: true},
    {nome: 'Roberto', idade: 38, vip: true},
    {nome: 'Kelly', idade: 23, vip: false}
];

 for (const pessoa of convidados) {
    const {nome, idade, vip} = pessoa;
    const podeEntrar = idade >= 18 && vip;

    if (podeEntrar) {
        console.log(`${nome} pode entrar.`)
    } else {
        console.log(`${nome} não pode entrar!`)
    };
 };



