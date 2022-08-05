// הדפיסו את כל המספרים מ1-10
// הדפיסו את כל המספרים הזוגיים מ 1-100
// הדפיסו את כל המספרים המתחלקים ב3 מ 1-100
// הדפיסו את כל המספרים המתחלקים ב10 או 5 מ 1-100
// הדפיסו את כל המספרים המתחלקים ב3 או 5 מ 1-100

//בקש מספר מהמשתמש והדפס את כל המספרים מהמספר שהתקבל ל-0
// קלוט מספר מהמשתמש והדפס את הסכום מ1 עד למספר שהתקבל
//var num = +prompt('Enter number : ')
var bool = true

// var sum = 0

// if (bool == true) {
//   sum = 10
// } else {
//   sum = 5
// }

if (num < 50) {
  smallerThen50 = 'smaller'
} else {
  smallerThen50 = 'bigger'
}

var num = 40
// var smallerThen50 = bool == false ? 10 : 5
var smallerThen50 = num < 50 ? 'smaller' : 'bigger'

console.log(smallerThen50)

var i = 0

for (i = 0; i <= 10; i += 1) {
  if (i != 7) console.log(i)
}

// for (i = 1; i <= 10000; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (i = 0; i <= 10000; i += 2) {
//   console.log(i);
// }

// for (i = 0; i <= 100; i += 5) {
//   console.log(i)
// }

// for (i = 0; i < 100; i += 1) {
//   if (i % 3 == 0 || i % 5 == 0) console.log(i)
// }

// for (i = num; i >= 0; i--) {
//   console.log(i)
// }

// for (var i = 0; i <= num; i++) {
//   sum = sum + i
// }

// console.log('End loop', sum, i)

/* 
    i=0 ; //
    i=2 ; //
    i=4;
    i=6;
    i=8;
*/
