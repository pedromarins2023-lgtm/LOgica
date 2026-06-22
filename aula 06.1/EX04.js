//Desenvolver um programa que pergunte 20 elementos de um vetor a e construa um vetor b de mesma
//dimensão com os mesmos elementos de a, os quais devem estar invertidos, ou seja, o primeiro elemento de a
//passa a ser o último elemento de b, e assim por diante. Apresentar os vetores a e b.

let a = [3, 3, 4, 5, 70, 12, 9, 100, 8, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ];

let b = [];






for(let i = 0; i < a.length; i++) { 
    b[19-i] = a[i];
}

console.log(a);
console.log(b);