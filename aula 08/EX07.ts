function calcularDesconto(preco: number, percentual: number): number  {
let vlorFinal : number = preco - ( preco * (percentual/100)) ;



    return vlorFinal;
}

console.log(`${calcularDesconto(100,10)}`);