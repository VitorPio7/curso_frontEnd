function hightOrder(callback, num) {
    return setTimeout(callback, num)
}

let call = function () { console.log("ola pessoal!!!") }


hightOrder(call, 6000)/*O callback é especificado em ms */