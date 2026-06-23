//Desenvolver um programa que pergunte o conteúdo de duas matrizes a e b, cada uma com 5 linhas e 3 colunas,
//construa uma matriz c de mesma dimensão, a qual é formada pela soma dos elementos da matriz a com a matriz
//b. Apresentar ao final o conteúdo das três matrizes.

let a = [[2, 4, 5, 1, 4],[7, 6, 5, 4, 3],[6, 7, 4, 3, 2]
];

let b = [[2, 4, 5, 1, 4],[7, 6, 5, 4, 3],[6, 7, 4, 3, 2]
];

let c = [];

for (let i = 0; i < 3; i++) {
    c[i] = [];

    for (let j = 0; j < 5; j++) {
        c[i][j] = a[i][j] + b[i][j];
    }
}

console.log("Matriz A:");
for (let i = 0; i < 3; i++) {
    console.log(a[i]);
}

console.log("Matriz B:");
for (let i = 0; i < 3; i++) {
    console.log(b[i]);
}

console.log("Matriz C (A + B):");
for (let i = 0; i < 3; i++) {
    console.log(c[i]);
}