function stringp(word) {
    return word.split(" ").reduce((acc, curr) => curr.length > acc.length ? curr : acc, "")
}

console.log(stringp("Eu vou viajar para o Canadá"))