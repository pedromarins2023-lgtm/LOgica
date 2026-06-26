class Produto {
    nome;
    preço;
    quantidade;

    constructor( nome, preço, quantidade){
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }
}

let produtos =  [
    new Produto ("mouse",  30,  90),
    new Produto ("teclado",  80,  100),
    new Produto ("mousepad",  20,  1),
    new Produto ("monitor",  600,  16),
    new Produto ("fan",  40,  90),
    new Produto ("placa de video",  1500,  10),
    new Produto ("cabo usb",  15,  2),
    new Produto ("pendrive",  30,  300),
];


function calcularValorEstoque(produto) {
    return preço * quantidade
}

let preço = 0;
let quantidade = 0;
let totalDoEstoque = 0;
let valioso = 0;
let quantRepor =0;

for (let i = 0; i < produtos.length; i++){
    console.log(`\nProduto: ${produtos[i].nome}`);
    if(calcularValorEstoque(produtos[i]) <= 5) {
    console.log("Repor estoque");
    }
    
 else {
    
    console.log("Estoque OK");
}
}
console.log("___________________");


let i = 0;

let valorAcimaDoEstoque = 0;

while( i < produtos.length) {
if (quantidade >= 500){
    quantRepor++;
}
i++;
}

console.log(`valor total do estoque ${totalDoEstoque} `);
console.log(`produto com estoque mais valioso  ${valioso}`);
console.log(`quantidade de produtos que precisam de reposição   ${quantRepor}`);





