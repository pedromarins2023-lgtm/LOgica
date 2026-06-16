let valorDaHoraDaAula = 100;
const HorasNOMes = 200;
let DescontoINSS = 0.1;

let multiplicacao = valorDaHoraDaAula * HorasNOMes;

console.log(multiplicacao)

let Desconto = (DescontoINSS * multiplicacao);

console.log(Desconto)

let Final = (multiplicacao - Desconto)

console.log(`O salário final é: R$ ${Final}`)