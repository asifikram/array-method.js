
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

function highestphone (mobiles){
    let max = mobiles[0]
   for(const mobile of mobiles){
       if(mobile.price > max.price){
        max = mobile
       }
   }
   return max
}

const phones = highestphone(mobiles)
console.log(phones)