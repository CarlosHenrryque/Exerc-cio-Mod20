// Importe a função a ser testada
const somaMultiplosDe5ou7 = require('./multiplos');

// Teste para verificar se a função retorna a soma correta dos múltiplos de 5 ou 7 abaixo de 1000
test('Retorna a soma correta dos múltiplos de 5 ou 7 abaixo de 1000', () => {
    // Chame a função a ser testada
    const resultado = somaMultiplosDe5ou7();

    // Calcule a soma manualmente para comparar
    let somaEsperada = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            somaEsperada += i;
        }
    }

    // Verifique se o resultado da função é igual ao esperado
    expect(resultado).toBe(somaEsperada);
});
