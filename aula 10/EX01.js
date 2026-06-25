class Livro {
    titulo;
    autor;
    quantidade;
    emprestados;

    constructor(titulo, autor, quantidade, emprestados) {
        this.titulo = titulo;
        this.autor = autor;
        this.quantidade = quantidade;
        this.emprestados = emprestados;
    }
}

let livros = [
    new Livro("Dom Casmurro", "Machado de Assis", 10, 4),
    new Livro("1984", "George Orwell", 5, 5),
    new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 8, 2),
    new Livro("Entendendo Algoritmos", "Aditya Y. Bhargava", 6, 6),
    new Livro("O Senhor dos Anéis", "J. R. R. Tolkien", 7, 3),
    new Livro("Capitães da Areia", "Jorge Amado", 4, 1)
];

function livrosDisponiveis(livro) {
    return livro.quantidade - livro.emprestados;
}

let disponiveis = 0;
let indisponiveis = 0;
let exemplaresTotal = 0;
let exemplares = 0;

console.log("=== Situação dos Livros ===");

for (let i = 0; i < livros.length; i++) {
    console.log(`\nLivro: ${livros[i].titulo}`);
    if (livrosDisponiveis(livros[i]) > 0) {
        console.log("Disponível");
        console.log(`Exemplares disponíveis: ${livrosDisponiveis(livros[i])}`);
        disponiveis++;
        exemplaresTotal+=livrosDisponiveis(livros[i]);
    } else {
        console.log("Indisponível");
        indisponiveis++;
    }
}

let i = 0;
let livrosComExemplar = 0;

while (i < livros.length) {
    if (livrosDisponiveis(livros[i]) > 0) {
        livrosComExemplar++;
    }
    i++;
}

console.log("\n========================");
console.log("Resumo");
console.log("========================");
console.log(`Total de livros: ${livros.length}`);
console.log(`Total de livros disponíveis: ${disponiveis}`)
console.log(`Total de exemplares disponíveis: ${exemplaresTotal}`);
console.log(`Total de livros indisponíveis: ${indisponiveis}`);
console.log(`Livros com pelo menos um exemplar disponível: ${livrosComExemplar}`);g