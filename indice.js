function encontrarIndicesMaiorMenor(arr) {
    if (arr.length === 0) {
        return null; // Retorna null se o array estiver vazio
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[indiceMaior]) {
            indiceMaior = i;
        }
        if (arr[i] < arr[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return {
        indiceMaior: indiceMaior,
        indiceMenor: indiceMenor
    };
}

// Exportando a função encontrarIndicesMaiorMenor
module.exports = encontrarIndicesMaiorMenor;

// Exemplo de uso:
const arrayNumerico = [10, 5, 20, 3, 15];
const indices = encontrarIndicesMaiorMenor(arrayNumerico);
console.log("O índice do maior valor é:", indices.indiceMaior);
console.log("O índice do menor valor é:", indices.indiceMenor);
