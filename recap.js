
// function add(num1, num2){
//     const total = num1 + num2
//     return total
// }

// const total = add (7,5)
// console.log(total)

// // shortcut

// function add2 (num1, num2){
//    return num1 + num2
// }

// const total2 = add2(56,78)
// console.log(total2)

// function domath(num1,num2){
//      const sum = num1 + num2
//      const diff = num1 - num2
//      const multify = sum * diff
//      const result = multify / 2 
//      return result
// }

// const result = domath(12,5)
// console.log(result) 


function iseven(number){
   if(number % 2 === 0){
    return true
   }
   else{
    return false
   }
}

console.log(iseven(54))
console.log(iseven(67))

// shortcut

function isodd(number){
    if(number % 2 ===1){
        return true
    }
    return false
}
console.log('-----------')
console.log(isodd(1099))
console.log(isodd(10))