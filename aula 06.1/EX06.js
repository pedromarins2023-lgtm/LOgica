let nomes = ["Asdrúbal", "Astrogildo", "Cleyto", "Vandineuza", "Zoroastra"];

let op = "sim".toUpperCase();
let nome = "Cleyto";
let mudaOP = 1; //simula o input do usuário

while (op == "SIM") {
  for (let i = 0; i < nomes.length; i++) {
    if (nome == nomes[i]) {
console.log(`${nome} existe no vetor`);
    }
  }

  nome = "Zoroastra";
  mudaOP++; // simula o input do usuário
  if (mudaOP == 3) {
    op = "NÃO";
  }
}