let nome = ["Amanda","Bruna","César","Danilo","Eduardo"];
let pr1 = [5,2,6,7,8];
let pr2 = [6,4,2,8,9];
let media = [];
let sit = [];

for (let i = 0; i < 5; i++) {
    media[i] = (pr1[i]+pr2[i])/2;
    if (media[i] >= 5) {
        sit[i] = "Aprovado";
    } else {
        sit[i] = "Reprovado";
    }
}

for (let i = 0; i < 5; i++) {
    console.log(`Nome: ${nome[i]}\t
        Prova 1: ${pr1[i]}\tProva2: ${pr2[i]}\tMédia: ${media[i]}
        \tSituação: ${sit[i]}`)
    }