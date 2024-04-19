function infoBook(obj) {
    return `O livro ${obj.titulo} foi escrito por ${obj.autor} em ${obj.ano}`
}


console.log(infoBook({ titulo: 'O principe', autor: 'Maquiavel', ano: 1532 }))
