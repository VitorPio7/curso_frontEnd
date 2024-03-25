import { Deque } from "./deque";
import { Queue } from "./fila1";

function hotPotato(elementList, num) {
    const queue = new Queue(); //1
    const elimitatedList = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]) //2
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()) //3
        }
        elementList.push(queue.dequeue());//4
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()//5
    }
}
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`)
})
console.log(`The winner is: ${result.winner}`)