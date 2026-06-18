let n1 = 10;
let n2 = 5;
let opcao = "d";

switch (opcao) {
    case "a":
        console.log(`Média = ${(n1 + n2) / 2}`);
        break;

    case "b":
        if (n1 > n2) {
            console.log(`Diferença = ${n1 - n2}`);
        } else {
            console.log(`Diferença = ${n2 - n1}`);
        }
        break;

    case "c":
        console.log(`Produto = ${n1 * n2}`);
        break;

    case "d":
        console.log(`Divisão = ${n1 / n2}`);
        break;

    default:
        console.log("Código inserido está errado.");
}