class Pessoa {
nome: string;
idade: number;
constructor(nome: string, idade: number) {
this.nome = nome;
this.idade = idade;
}   
apresentar(): void{
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
} 

}
let pessoa1 = new Pessoa("Pedro", 18);
pessoa1.apresentar();
