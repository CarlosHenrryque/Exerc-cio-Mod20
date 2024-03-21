function somaMultiplosDe5ou7() {
    let soma = 0;

    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }

    return soma;
}

// Exportando a função somaMultiplosDe5ou7
module.exports = somaMultiplosDe5ou7;

// Exemplo de uso:
const resultado = somaMultiplosDe5ou7();
console.log("A soma dos múltiplos de 5 ou 7 abaixo de 1000 é:", resultado);
