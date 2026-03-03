
const height = [65,34,79,80,90,78,79]

// function minheight(numbers){
//     let min = numbers[0]
//     for( const number of numbers){
//        if(number < min){
//          min = number
//        }
//     }
//     return min
// }

// const min = minheight(height)
// console.log(min)


// function minheight(numbers){
//     let min = numbers[0];
//     for(const number of numbers){
//         if(number < min){
//             min = number
//         }
//     }
//     return min

// }

// const min = minheight(height)
// console.log(min)


function getmax (numbers){
    let max = numbers[0]
   for(const num of numbers){
    if(num > max){
        max = num
    }
   }
   return max
}

const max = getmax(height)
console.log(max)