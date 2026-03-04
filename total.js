
const products = [
    {name : 'shampoo', price: 200},
    {name : 'chiruni', price: 100},
    {name : 'soap', price: 60},
    {name : 'cleaner', price: 200}
    
]


function totalprice(products){
    let total = 0
    for(const product of products){
        total = product.price + total
    }
    return total
}


const total = totalprice(products)
console.log(total)


const shopping = [
    {name : 'shirt', price : 300, quantity : 2},
    {name : 'pant', price : 1300, quantity : 2},
    {name : 'panjabi', price : 2200, quantity : 1},
    {name : 'perpume', price : 1300, quantity : 2},
]

function gettotalmarket(items){
    let total = 0
   for( list of items){
        total = total + list.price * list.quantity
   }
   return total
}

const totallprice = gettotalmarket(shopping)
console.log(totallprice) 


