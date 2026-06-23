let matriz = [[3,4], [5,7], [7,8],[4,9],[2,7],];

let soma = 0;

for (let i = 0; i < 5; i++) {
for (let j = 0; j < 2; j++) {
soma +=matriz[i][j];
console.log(matriz[i][j]);



    }
    console.log();
    }
    console.log(`Média: ${soma / 10}`);