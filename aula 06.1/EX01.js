//Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
//de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
//das 5 pessoas cadastradas.


let nome = ["Pedro", "Lucas", "Paulo", "Matheus", "Paula"];

let profissao = ["Pedreiro", "Porteiro", "Policial", "Médica", "Advogado"]


for (let i = 0; i < nome.length; i++) {
    console.log(`${nome[i]} é ${profissao[i]}`);
}