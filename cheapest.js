
// const prices = [12000,23000,35000,60000]


// function cheapprice(prices){
//     let min = prices[0]
//    for(const price of prices){
//        if(price < min){
//         min = price
//        }
//    }
//    return min
// }

// const lowestprice = cheapprice(prices)
// console.log(lowestprice)


const mobiles = [
     { name : 'samsung', price : 20000, camera : '12mp', color : 'black'},
     { name : 'xaoimi', price : 15000, camera : '12mp', color : 'black'},
     { name : 'iphone', price : 120000, camera : '12mp', color : 'black'},
     { name : 'walton', price : 21000, camera : '12mp', color : 'black'},
     { name : 'htc', price : 250000, camera : '12mp', color : 'black'},
] 

function maxphone (phones){
    let min = phones[0]
    for(const phone of phones){
       if(phone.price < min.price){
        min = phone
       }
    }
    return min
}

const phones = maxphone(mobiles)
console.log(phones)