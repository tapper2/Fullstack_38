

function addFunction(n){
    if(n < 20)
    return 1;
    if(n >= 20 && n < 30)
    return 2;

    var result = n*10;
    return result;
}

var res = addFunction(30);
console.log(res)


res = res*5;
console.log(res)


