let alunos = [
{ nome: "Pedro", idade: 18 },
{ nome: "Carlos", idade: 19 },
{ nome: "Malcolm", idade: 17},
{ nome: "Ian", idade: 20 },
{ nome: "Bruno", idade: 20 },
{ nome: "Juan", idade: 22}
];


 for (let i = 0 ; i < alunos.length; i++) {
if (alunos[i].idade >= 18) {
    console.log(`${alunos[i].nome} é maior de idade`);
} else {
    console.log(`${alunos[i].nome} é menor de idade`);
}

 }














