const concatFirstString = firstString => secondString => firstString + secondString;

const helloString = concatFirstString("Hello");
console.log(helloString("World"));
console.log(helloString("Alice!"))
