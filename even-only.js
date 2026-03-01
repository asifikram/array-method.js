
// function onlyeven (numbers){
//     let even = []
//   for(number of numbers){
//     if(number % 2 === 0){
//         even.push(number)
//     }
//   }
//   return even
// }

// const numbers = [12,37,79,67,34,46]
// const even = onlyeven(numbers)
// console.log(even)



function sumoffeven(digits){
    
    let sum = 0
  for(const digit of digits){
     if(digit % 2 === 0){
         console.log(digit)
         sum = sum + digit
     }
  }
  return sum
}

const digits = [34,33,12,46,57,80,89]
const sum = sumoffeven(digits)

console.log( 'the sum of even is',  sum)