var n = 20
let n1 = 50
let n2 = 30
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let obj = {}
let testId = 92
let letter = 'n'
let comments = [
  {
    postId: 1,
    id: 2,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 3,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 4,
    name: 'odio adipisci rerum aut animi',
    email: 'nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
  {
    postId: 1,
    id: 5,
    rate: '70',
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
  },
  {
    postId: 1,
    id: 6,
    rate: '70',
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
  },
  {
    postId: 2,
    id: 7,
    rate: '70',
    name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    email: 'Presley.Mueller@myrl.com',
    body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in',
  },
]

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    VAR / LET //////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function run() {
  foo = 4
  console.log(foo) // undefined
  var foo = 'Foo'
  console.log(foo) // Foo
}

run()

// if (n < 30) {
//     let n2 = 10;
// }
//console.log(n2)
// let a = 6;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 6) {
//         return
//     }

//     console.log(arr[i])

// }

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    For loop es6 ///////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let i = 0

for (let comment of comments) {
  if (comment.id == testId) {
    obj = comment
    //console.log(obj)
  }
}

let nm1 = 8
let nm2 = nm1

nm1 = 60
nm2 = nm1
//console.log(nm1, nm2)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Pointers////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let numArray1 = [2, 3, 4, 5, 6]
let numArray2 = [...numArray1]
numArray1.push(10)

//console.log(numArray2);

let ob1 = {
  name: 'a',
  mail: 'm@gmail.com',
}

let ob2 = { ...ob1 }
ob1.name = 'b'

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Arrow function   //////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//es5
function fn(num) {
  //console.log("Hello fn : ", num)
}

//es6
var fn1 = (num) => {
  //console.log("Hello fn : ", num)
}

fn(10)
fn1(10)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Map  ///////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let mapArray = [2, 3, 4, 5, 6, 7, 8, 9]

for (let item of mapArray) {
  //console.log("ForLoop : ", item)
}

mapArray.map((item) => {
  //console.log("Map : ", item)
})

let newMapArray = comments.map((item) => {
  item['myId'] = Math.floor(Math.random() * 100) + 1
  if (item.id < 4) item['rate'] = 70
  else item['rate'] = 40

  return item
})

//console.log(newMapArray)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    StartEnd With  ///////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let strStart = 'asdasdasfdsg klsdflkds dsfkljsdkf'
//console.log(strStart[0] == 's' && strStart[1] == 'h')
// console.log(strStart.startsWith('asdasd'));
// console.log(strStart.endsWith('fkljsdkf'));
// console.log(strStart.includes('sdasf'));

let newLetterArray = comments.map((item) => {
  item['isIncludeLetter'] = item.email.includes(letter)
  return item
  // if (item.email.includes(letter))
  //     item['isIncludeLetter'] = true;
  // else
  //     item['isIncludeLetter'] = false;
})

//console.log(newLetterArray)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Filter With  ///////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let filterArray = comments.filter((item) => {
  return !item.email.includes(letter)
})

console.log(filterArray)
