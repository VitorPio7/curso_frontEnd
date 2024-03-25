function executarCallback(n, callback) {
    for (let i = 0; i < n; i++) {
        callback(i)
    }
}
let callback = i => console.log(`Execução ${i + 1}`);

executarCallback(5, callback)
