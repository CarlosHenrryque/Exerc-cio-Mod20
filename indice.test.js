// Importando a função a ser testada
const encontrarIndicesMaiorMenor = require('./indice');

// Teste para verificar se os índices do maior e menor valor são encontrados corretamente
test('Encontra os índices do maior e menor valor corretamente', () => {
    // Definindo o array para teste
    const arrayNumerico = [10, 5, 20, 3, 15];

    // Chamando a função a ser testada
    const indices = encontrarIndicesMaiorMenor(arrayNumerico);

    // Verificando se os índices do maior e menor valor são os esperados
    expect(indices.indiceMaior).toBe(2); // O maior valor (20) está no índice 2
    expect(indices.indiceMenor).toBe(3); // O menor valor (3) está no índice 3
});

// Teste para verificar se retorna null para um array vazio
test('Retorna null para um array vazio', () => {
    // Definindo um array vazio para teste
    const arrayVazio = [];

    // Chamando a função a ser testada
    const indices = encontrarIndicesMaiorMenor(arrayVazio);

    // Verificando se a função retorna null para um array vazio
    expect(indices).toBeNull();
});
