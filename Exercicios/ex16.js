function palindromo(palavra) {
    var palavraInvertida = palavra.split('').reverse().join('');
    if (palavra == palavraInvertida) {
        console.log(palavra + " é um palindromo");
    } else {
        console.log(palavra + " não é um palindromo")
    }

}

console.log(palindromo("ana"))