let howManyRepeat = prompt('Introduce el número de veces que deseas repetir el numero de 0 a 100')
for (let index = 0; index < howManyRepeat; index++) {
     console.log(Math.floor(Math.random() * 101))
}
let numbersArray = []