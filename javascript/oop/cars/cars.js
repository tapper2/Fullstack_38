let CarsArray = []
let id = 1

class Car {
  id = 0
  brand = ''
  price = 0
  year = 0
  carServices = []

  constructor(id, brand, price, year) {
    this.id = id
    this.brand = brand
    this.price = price
    this.year = year
  }

  setService(date, km) {
    let ob = {
      date: date,
      km: km,
    }

    this.carServices.push(ob)
  }
}

let mazda = new Car(1, 'Mazda', 90000, 2022)
let honda = new Car(2, 'Honda', 98000, 2021)
CarsArray[(mazda, honda)]

let searchId = 2
let date = '20/10/2022'
let km = '50,000'

//let car =  CarsArray.find()

console.log(mazda, honda)

//let carService = []

// let date = '20/10/2022'
// let km = '50,000'

// let ob = {
//   date: date,
//   km: km,
// }

// carService.push(ob)

//[('20/10/2022', '50,000', '26/10/2022', '58,000')]

// function onSubmit() {
//   let car = new Car(id, nameDV.value, priceDV.value, yearDV.value)
//   CarsArray.push(car)
//   console.log(CarsArray)
//   id++
// }
