class Produto {
    nome: string; 
    preço: number;

    constructor(nome: string, preço: number){
        this.nome = nome;
        this.preço = preço;
    }


    aplicarDesconto(): number {
        return this.preço * 0.9;
    }
    exibirInfo(): void {
        console.log(`${this.nome}: R$ ${this.preço}`);
console.log(`Com desconto: R$ ${this.aplicarDesconto()}`);
    }
}
let produto = new Produto("Notebook", 3000);
produto.exibirInfo();