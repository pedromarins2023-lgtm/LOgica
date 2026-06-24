function converterTemperatura ( temp: number) : number{
    return(temp * 9/5) + 32;
}

console.log(`Temperatura em ºF: ${converterTemperatura(25)}`);
