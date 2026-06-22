    let matriz = [ [1 , 2], [3, 4]];

    console.log(matriz[0][0]);
    console.log(matriz[0][1]);
    console.log(matriz[1][0]);
    console.log(matriz[1][1]);

matriz.push([7, 9]);
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(`[${i}][${j}] = ${matriz[i][j]}`);
        }
    }