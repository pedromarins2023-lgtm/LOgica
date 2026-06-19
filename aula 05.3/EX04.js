//Desenvolver um programa que pergunte um número inteiro e exiba os números que são, ao mesmo tempo,
//múltiplos de 3 e 5, na sequência de 1 até o número informado pelo usuário.


let n = 50;


for (let i = 1; i <= n; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} é divisivel por 3 e 5`);
    }
}