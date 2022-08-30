var users = [];


function onSubmit(){
   
    var user = {
        name:nameDV.value,
        mail:mailDV.value,
        phone:phoneDV.value,
        city:cityDV.value,
    }
    
    users.push(user);

    //printUsersSingleUserToTable(user);
    printUsersToTableByArray();
}

function printUsersSingleUserToTable(user){
    tableDV += `
        <div>${user.name}</div>
        <div>${user.mail}</div>
        <div>${user.phone}</div>
        <div>${user.city}</div>
    `
}

function printUsersToTableByArray(){
    tableDV.innerHTML = '';

    for(var i=0;i<users.length;i++){
        tableDV.innerHTML += `
        <div>${users[i].name}</div>
        <div>${users[i].mail}</div>
        <div>${users[i].phone}</div>
        <div>${users[i].city}</div>
    `;
    }
}