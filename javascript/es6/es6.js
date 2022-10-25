// console.log(posts)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Const , let , var ///////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let num = 10
const id = 1234567

//let num = 20;
//var num = 10;
//var num = 12;

let num3 = 30

if (num > 8) {
  let num1 = 30
  var num2 = 50
  var num2 = 20
  num2 = 10
  num1 = 5
}

console.log(num2, num2)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    For Loop ///////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/// ES5
for (let i = 0; i < posts.length; i++) {
  //console.log(posts[i])
}

// forEach
let i = 0

for (let p of posts) {
  if (i > 10 && i < 20) {
    //console.log(p);
  }

  if (i % 2 == 0) {
    //console.log(p);
  }
  i++
}

// let random = getRandomNumber();
//console.log(random)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Arrow function   //////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//es5
function fn(num) {
  //console.log('Hello fn : ', num)
}

//es6
let fn1 = (num = 10) => {
  console.log('Hello fn : ', num)
}

let function2 = () => {}

//console.log(typeof fn)
fn1(30)
fn1()

let fn3res = 0

let fn3 = (n) => {
  //fn3res = n * 3
  return n * 3
}

//fn3(30);
//let fn3Result = fn3res
let fn3Result = fn3(20)

// console.log(fn3Result)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////   Pointers        /////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let arr = [2, 3, 4]

//let arr1 = arr;
let arr1 = [...arr]

for (let item of arr) {
  arr1.push(item)
}

// let arr1 = arr
// arr1.push(5)
arr1.push(5)
//console.log(arr1, arr)

let user = {
  name: 'abc',
  phone: '123',
}

let user1 = { ...user }
user1.mail = 'a@gmail.com'
//console.log(user, user1)

let a1 = [1, 2, 3]
let a2 = [...a1]
a2.push(4)
a1.push(7)

console.log(a1, a2)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////   Map      ////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// for (let i = 0; i < posts.length; i++) {
//   console.log(posts[i])
// }

// for (let p of posts) {
//   console.log(p)
// }

// let newPost = posts.map((p,i) => {
//   console.log(p)

//   let o = {
//     name:p.name,
//     id:p.id,
//     index:i,
//   }

//   return o;
// })

//let postsID = posts.map(p =>  p.title)

let postsID = posts.map((p) => {
  if (p.id >= 20 && p.id <= 30) return p.title
  return 1
})

// console.log(postsID)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////   Filter      /////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// let arr3 = [];
// for(let post of posts){
//     if(post.id == 20 || post.id ==30)
//     arr3.push(post);
// }

let a = []

let f = () => {
  return '123'
}

let postsFilter = posts.filter((p, i) => {
  return p.id >= 20 && p.id <= 30 //p.id == 20 || p.id == 30
})

console.log('postsFilter : ', postsFilter)

let postsFilter1 = posts.filter((p, counter) => {
  if (p.id == 20 || p.id == 30) {
    p.index = counter
    return p
  }
})

//console.log(postsFilter1)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////   Find      /////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// let arr3 = [];
// for(let post of posts){
//     if(post.id == 20 || post.id ==30)
//     arr3.push(post);
// }

let postsFind = posts.find((p) => {
  return p.id >= 20 && p.id <= 30
})

console.log('postsFind : ', postsFind)

let postsFindIndex = posts.findIndex((p) => {
  return p.id == 20
})

//console.log(postsFind, posts, postsFindIndex)

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////    Start End With  ///////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

let str = 'abcd klsdflkds dsfkljsdkf'
let str1 = 'abcd'

// if (str[0] == 'a' && str[1] == 'b') {
//   console.log(true)
// } else {
//   console.log(false)
// }

let resultStart = str1.startsWith('abcd')
let resultInclude = str1.includes('abcd')
let resultEnd = str1.endsWith('abcd')

//console.log(resultStart, resultInclude, resultEnd)

//כתוב פונקציה המקבלת 3 פרמטרים
// titleStartWidth : string , bodyEndWidth : string , Id:int

//מחזירה מערך של הפוסטים אשר או
//title start width titleStartWidth
//body end width bodyEndWidth
//Id = Id;

let filterFunction = (titleStartWidth, bodyEndWidth, id) => {
  let arr = posts.filter((p) => {
    return (
      p.title.startsWith(titleStartWidth) ||
      p.body.endsWith(bodyEndWidth) ||
      p.id == id
    )
  })

  return arr
}

let filterResult = filterFunction('zxcvxcfcfcg', 'sunt', 20)
console.log(filterResult)


