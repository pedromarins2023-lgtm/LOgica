let n = 330;
if (n > 99 && n < 1000) {
let cem = (n - (n % 100)) / 100;
console.log(`Algorismo das centenas : ${cem}`);
} else {
    console.log("Numero fora do intervalo");
}
