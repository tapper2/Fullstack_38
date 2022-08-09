var cars = [
  { name: 'Honda', year: '2022' },
  { name: 'Mazda', year: '2021' },
]

//{ name: 'Honda', year: '2022' },
//{ name: 'Mazda', year: '2021' },

var carCount = 2

for (i = 0; i < carCount; i++) {
  var car = {}
  car.name = prompt('Enter car name')
  car.year = +prompt('Enter car year')

  cars.push(car)
}

var searchYear = +prompt('Enter year')
var searchName = prompt('Enter name')

//var search = prompt('search details')

//mazda -- 2021
for (i = 0; i < carCount; i++) {
  // if (search.includes(cars[i].year) || search.includes(cars[i].name)) {
  //   console.log('CAR : ', cars[i])
  // }
  if (searchYear == cars[i].year && searchName == cars[i].name) {
    console.log('CAR : ', cars[i])
  }
}
