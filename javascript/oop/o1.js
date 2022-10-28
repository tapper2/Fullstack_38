class Car {
  doors = ''
  engine = ''
  color = ''
  model = ''
  name = ''

  constructor(name = '', color = '', model = '') {
    this.name = prompt('Enter Name')
    this.color = prompt('Enter Color')
    this.model = prompt('Enter Model')
    console.log('MyCar is ', name)
  }
}

// let CarsArray = []
// let Car = new Car('Mazda', 'red')
// CarsArray.push(Car)

let newCar = new Car()
let newCar1 = new Car()

var Mazda = new Car('Mazda', 'red')
var Honda = new Car('Honda', 'white')

console.log(Mazda, Honda)

// let car = {
//     name:getEleme
// }
//var Honda = new Car(5, 1800, 'black', 2022)
