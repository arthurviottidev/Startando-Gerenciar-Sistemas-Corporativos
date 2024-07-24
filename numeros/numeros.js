const randomNumbers = [-1234, 5678, -987, 4321, -5555, 9999, -2345, 1111, -8888, 3456];

const identificarMinimoMaximo = (numeros) => {
    // Aqui eu inicializo o numero minimo e o máximo, com o primeiro número do array
    let minimo = numeros[0];
    let maximo = numeros[0];

    // Aqui eu passo cada número no array
    numeros.forEach((numero) => {
        // Essa parte faz com que atualiza o minimo se o número atual fosse menor que o minimo atual
        if (numero < minimo) {
            minimo = numero;
        }
        // Igual ao de cima, mas sendo o numero atual maior que o máximo atual
        if (numero > maximo) {
            maximo = numero;
        }
    });

    // Só retorna o objeto com o menor e o maior número
    return {
        minimo,
        maximo
    };
};

// Chamo a function e armazeno o resultado
const resultado = identificarMinimoMaximo(randomNumbers);

// Texto personalizado exibindo os números encontrados
console.log(`O menor número é: ${resultado.minimo}. O maior número é: ${resultado.maximo}.`);