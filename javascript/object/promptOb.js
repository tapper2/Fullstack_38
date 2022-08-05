var users = []

for (i = 0; i < 2; i++) {
  var user = {}
  user['name'] = prompt('enter name')
  user['mail'] = prompt('enter mail')
  user['phone'] = prompt('enter phone')

  users.push(user)
}

console.log(users)
