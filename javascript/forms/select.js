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
    tableBody.innerHTML = '';

    for(var i=0;i<users.length;i++){
        console.log(users[i])
        let u = users[i];
        tableBody.innerHTML += `
        <tr>
            <td scope="col">${users[i].name}</td>
            <td scope="col">${users[i].mail}</td>
            <td scope="col">${users[i].phone}</td>
            <td scope="col">${users[i].city}</td>
            <td> <button type="button" class="btn btn-primary mt-3" onclick="showDetails(${i})">הצג פרטים</button></td>
        </tr>`;
    }
}

function showDetails(i){
   console.log(users[i])
}