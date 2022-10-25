console.log('WHILE')

let rand = Math.floor(Math.random() * 10) + 1
let n = 0
let counter = 0
console.log('Rand : ', rand)

while (n != rand) {
  n = +prompt('Enter Number1')
  console.log('N : ', n)

  if (!n) {
    counter--
    alert('please enter number')
  } else if (n < rand) {
    alert('bigger')
  } else if (n > rand) {
    alert('smaller')
  } else {
    alert('Correct : ' + counter)
  }

  counter++
}

console.log('End While')

// let rand = 0

// for (i = 0; rand != 10; i++) {
//   console.log(rand)
//   rand = Math.floor(Math.random() * 11)
// }
// console.log(rand)
