var products = [];


function onSubmit(){
    var product = {
        name:nameDV.value,
        price:priceDV.value,
        category:categoryDV.value,
    }

    products.push(product);
    mainForm.reset();
}


function printProductsToTable(categoryID){
    console.log(categoryID)
    tableBody.innerHTML = '';

    for(var i=0;i<products.length;i++){
        console.log(products[i].category ,categoryID)

        if(products[i].category == categoryID)
        {
            tableBody.innerHTML += `
            <tr>
                <td scope="col">${products[i].name}</td>
                <td scope="col">${products[i].price}</td>
                <td scope="col">${getCatgoryName(products[i].category)}</td>
            </tr>`;
        }
    }
}

function getCatgoryName(categoryId){
    if(categoryId == 1)
        return 'מוצרי חלב';
    if(categoryId == 2)
        return 'שתייה';
   
    return 'חומרי ניקוי'
}