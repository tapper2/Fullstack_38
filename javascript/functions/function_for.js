//הגדר מערך מספרים בגודל 10
// בנה פונקצייה שמבצעת לולאת FOR על המערך
// בנה פונקצייה שמקבלת איבר מהמערך ומדפיסה אותו כפול 5

var arr = [2, 6, 5, 8, 9, 12, 4, 6, 3, 17]

function printLoop() {
  for (var i = 0; i < arr.length; i++) {
    printVar(arr[i])
  }
}

function printVar(num) {
  var n = num * 5
  console.log(n)
}

printLoop()
console.log('---------------------------------')
printLoop()
