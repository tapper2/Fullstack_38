let randomArray = []
let names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
let phones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

let getRandomNumber = (max) => {
  let r = Math.floor(Math.random() * max)
  return r
}

let createObject = (rand) => {
  let ob = {
    name: names[rand],
    phone: phones[rand],
  }

  return ob
}

let randomLoop = getRandomNumber(100) + 1
console.log('randomLoop : ', randomLoop)

for (let i = 0; i < randomLoop; i++) {
  // let random = getRandomNumber(1000)
  let rand = getRandomNumber(10)
  let ob = createObject(rand)
  randomArray.push(ob)
}

console.log('RandomArray : ', randomArray)

/* 
    let arr = [];
    let ob = {};

    let fn = () => { 
        let ob = {
            name:getElementById('name'),
            phone:getElementById('phone');
        }

        //ob = getElementById('name')
        
        arr.push(ob);
    }

    //name => 'a'
    //phone => '1'

    //name => 'b'
    //phone => '2'
*/
