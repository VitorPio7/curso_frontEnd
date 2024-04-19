function restParan(...arguments) {
    return arguments.reduce((el, index) => el + index)
}

console.log(restParan(12, 5, 3, 5, 6))