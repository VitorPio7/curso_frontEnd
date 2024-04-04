function palavraEn(arr, num) {
    return arr.filter((el) => el.length > num)
}

let arrString = ["Vitor Pio", "Vagner Pio", "Tais Pio", "Tais", "Vitor", "Vagner"]


console.log(palavraEn(arrString, 6))