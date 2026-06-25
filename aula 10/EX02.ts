class Pedido {
    numero: number;
    cliente: string;
    valor: number;
    entregue: boolean;

    constructor(numero: number, cliente: string, valor: number, entregue: boolean) {
        this.numero = numero;
        this.cliente = cliente;
        this.valor = valor;
        this.entregue = entregue;
    }
}

let pedidos: Pedido[] = [
    new Pedido(101, "Amanda", 45.50, true),
    new Pedido(102, "Bruna", 38.00, false),
    new Pedido(103, "Carla", 62.90, true),
    new Pedido(104, "Daniela", 27.50, false),
    new Pedido(105, "Eduardo", 81.30, true),
    new Pedido(106, "Fernando", 52.00, true),
    new Pedido(107, "Gabriela", 34.80, false),
    new Pedido(108, "Helio", 95.20, true)
];

function calcularTotal(lista: Pedido[]): number {
    let total: number = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].valor;
    }
    return total;
}

let entregues: number = 0;
console.log("===== Situação dos Pedidos =====");

for (let i = 0; i < pedidos.length; i++) {
    console.log(`Pedido ${pedidos[i].numero} - ${pedidos[i].cliente}`);
    if (pedidos[i].entregue) {
        console.log("Pedido entregue");
        entregues++;
    } else {
        console.log("Pedido pendente");
    }
    console.log("----------------------------");
}

let i: number = 0;
let pendentes: number = 0;

while (i < pedidos.length) {
    if (!pedidos[i].entregue) {
        pendentes++;
    }
    i++;
}

let totalVendas: number = calcularTotal(pedidos);
let ticketMedio: number = totalVendas / pedidos.length;

console.log("\n===== Resumo =====");
console.log(`Valor total vendido: R$ ${totalVendas.toFixed(2)}`);
console.log(`Pedidos entregues: ${entregues}`);
console.log(`Pedidos pendentes: ${pendentes}`);
console.log(`Ticket médio: R$ ${ticketMedio.toFixed(2)}`);