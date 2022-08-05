//var NumbersArr = [10, 'abc', 50, 20, 1, 9];
//NumbersArr.push(45)
//console.log('Arr : ', NumbersArr)
//הכנס למערך 5 מספרים וחשב את סכומם

var forLoopArray = []
var count = 0
var countArr = [4, 8, 12, 56, 34]
var r = Math.random() * 100
var random = 0
var randomArray = []
console.log(random)

num = 4
count = 0
// 0*1 + 1*2 + 2*3 + 3*4;

// for (i = 0; i < num; i++) {
//   count += i * (i + 1)
//   console.log('Count : ', i, i * (i + 1))
// }

console.log('TotalCount : ', count)
//var random = Math.floor(Math.random() * 100);

// for (i = 0; i <= 10; i++) {
//   forLoopArray.push(i * 2)
// }

// for (i = 0; i < countArr.length; i++) {
//   //console.log(i, countArr[i])
//   count += countArr[i]
// }

// console.log(count)

for (i = 0; i < 100; i++) {
  random = Math.floor(Math.random() * 100)
  random -= random % 10
  randomArray.push(random)
}

console.log(randomArray)
