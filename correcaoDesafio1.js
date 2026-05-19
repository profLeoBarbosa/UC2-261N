const ask = require('readline-sync')

function insertProduct (){
    console.clear()
    let id = products.length + 1
    let name = ask.question('Insert product name: ')
    let sellPrice = Number(ask.question('Insert selling price: '))
    let manufacturingPrice = Number(ask.question('Insert manufacturing price: '))
    let stock = Number(ask.question('Insert quantity in stock: '))
    console.clear()
    products.push([id, name, sellPrice, manufacturingPrice, stock])
    console.log(`Product ${name} inserted successfully!`)

    ask.question('Press ENTER to continue...')
}



function searchById(id){
    for(let product of products){
        if (product[0] === id){
            return product
        }
    }
    return null
}



function searchByName(name){
    for(let product of products){
        if (product[1] === name){
            return product
        }
    }
    return null
}

function showProducts(){
    console.clear()
    for(let product of products){
        console.log(`
--------------------
ID: ${product[0]}
Name: ${product[1]}
Selling price: R$${product[2]}
Manufacturing price: R$${product[3]}
Stock: ${product[4]}
--------------------
        `)
    }
    ask.question('Press ENTER to continue...')
}


const products = []

while(true){
    console.clear()
    console.log(`
1 - Register new product
2 - Search product by ID
3 - Search product by name
4 - Show all products
0 - Exit

    `)
    let option = Number(ask.question(`Choose option: `))

    switch(option){
        case 1:
            insertProduct()
            break
        case 2:
            console.clear()
            let id = Number(ask.question('Insert ID: '))
            console.log(searchById(id))
            ask.question('Press ENTER to continue...')
            break
        case 3: 
            console.clear()
            let name = ask.question('Insert name: ')
            console.log(searchByName(name))
            ask.question('Press ENTER to continue...')
            break
        case 4:
            showProducts()
            break
        case 0:
            process.exit()
            break
        default:
            console.clear()
            console.log('Invalid option')
            ask.question('Press ENTER to continue...')
    }
}




