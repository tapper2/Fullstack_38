var cars = []
var carCount = 2

for (i = 0; i < carCount; i++) {
  var car = {}
  car.name = prompt('Enter car name')
  car.year = prompt('Enter car year')

  cars.push(car)
}

var searchYear = prompt('Enter year')

for (i = 0; i < carCount; i++) {
  if (searchYear == cars[i].year) {
    console.log('CAR : ', cars[i])
  }
}
