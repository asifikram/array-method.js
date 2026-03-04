
function multify(num1 , num2){
    if(typeof(num2) !== 'number'|| typeof(num1)!== 'number'){
        return 'please provide a number'
    }
   return num1 * num2
}

// const result  = multify(5 , 7)
// console.log(result)


// function fullname(first , second){
//     if(typeof first !== 'string'){
//         return 'fast is should be string'
//     }

//     else if(typeof second !== 'string'){
//         return 'second should be string'
//     }
//     const fullname = first + ' ' + second
//     return fullname
// }

// const result = fullname('asif')
// console.log(result)

function getprice(product){
    if(typeof product !== 'object'){
        return 'provide an object'
    }
    const price = product.price
    return price
}

// const product= getprice(5)
// const product = getprice({name : 'chulkanir name', price : 35, color : 'black'})
// console.log(product)


function getarray(numbers){
        if(Array.isArray(numbers) === false ){
            return 'provide an array'
        }
   const second = numbers[1]
   return second
}

const second = getarray([12,34,56])
console.log(second)