
// function discountedprice(quantity){
//     if(quantity <= 100){
//         const price = quantity * 10
//         return price
//     }
//     else if(quantity <= 200){
//         const price = quantity * 50
//         return price
//     }

//     else{
//         const price = quantity *40
//         return price
//     }
// }

// console.log(discountedprice(201))



function layerddiscounttotal(quantity){
     const first100 = 100
     const second100 = 90
     const above200 = 50

     if(quantity <=100){
        const total = quantity * first100
        return total
     }

     else if(quantity<=200){
        const first100price = 100 * first100
        const remainingquantity = quantity - 100
        const second100price = remainingquantity * second100
        const total = first100price + second100price
        return total
     }

     else{
        const first100price = 100 * first100
        const second100price = 100 * second100
        const remainingquantity = quantity - 200
        const remainingquantityprice = remainingquantity * above200
        const total = first100price + second100price + remainingquantityprice
        return total
     }
}

console.log(layerddiscounttotal(200))






