function onlyValues(objInfo, key) {
    return objInfo.map(el => el[key])
}

let obj = [{
    nome: "Vitor Pio",
    idade: 22
}, {
    nome: "Valmir das Verduras",
    idade: 56
},
{
    nome: "Marinalva Pio",
    idade: 52
}]

console.log(onlyValues(obj, "nome"))