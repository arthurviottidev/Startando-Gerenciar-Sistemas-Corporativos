const wordsList = ["abacaxi", "alegria", "bicicleta", "ouro", "elefante"];

const encontrarVogais = (palavras) => {
    const vogais = ["a", "e", "i", "o", "u"];
    let vogaisArray = [];

    palavras.forEach(palavra => {
        palavra.split('').forEach(caracter => {
            if (vogais.includes(caracter.toLowerCase())) {
                vogaisArray.push(caracter);
            }
        });
    });

    return {
        vogais: vogaisArray,
        contador: vogaisArray.length
    };
}

const resultado = encontrarVogais(wordsList);
console.log(resultado);