let sexo = "m";

switch (sexo) {
    case "M":
    case "m":
        console.log("Banheiro masculino à direita");
        break;

    case "F":
    case "f":
        console.log("Banheiro feminino à esquerda");
        break;

    default:
        console.log("Sexo inválido");
}