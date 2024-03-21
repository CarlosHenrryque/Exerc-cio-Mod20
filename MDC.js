function calcularMDC(a, b) {
    // Aplicando o algoritmo de Euclides
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Exportando a função calcularMDC
module.exports = calcularMDC;

if (require.main === module) {
    var num1 = 48;
    var num2 = 18;
    var mdc = calcularMDC(num1, num2);
    console.log("O MDC de", num1, "e", num2, "é:", mdc);
}