// Importando a função a ser testada
const calcularMDC = require('./MDC');

// Teste para verificar o cálculo do MDC
test('Calcula corretamente o MDC de dois números', () => {
    // Definindo os números para teste
    const num1 = 48;
    const num2 = 18;
    
    // Calculando o MDC usando a função a ser testada
    const mdc = calcularMDC(num1, num2);

    // Verificando se o MDC calculado é igual ao esperado
    expect(mdc).toBe(6);
});

// Teste para verificar se o MDC de 0 e outro número é o próprio número
test('MDC de 0 e outro número é o próprio número', () => {
    // Definindo os números para teste
    const num1 = 0;
    const num2 = 18;
    
    // Calculando o MDC usando a função a ser testada
    const mdc = calcularMDC(num1, num2);

    // Verificando se o MDC calculado é igual ao esperado
    expect(mdc).toBe(num2);
});

// Teste para verificar se o MDC de dois números iguais é o próprio número
test('MDC de dois números iguais é o próprio número', () => {
    // Definindo os números para teste
    const num1 = 10;
    const num2 = 10;
    
    // Calculando o MDC usando a função a ser testada
    const mdc = calcularMDC(num1, num2);

    // Verificando se o MDC calculado é igual ao esperado
    expect(mdc).toBe(num1);
});
