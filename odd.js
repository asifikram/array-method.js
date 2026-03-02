
// function oddnumber (numbers){
//     let odd = []
//    for(const number of numbers){
//     if(number % 2 === 1){
//        odd.push(number)
//     }
//    }
// //    console.log(odd)
//     let sum = 0
//     let avg =[]
//    for(number of odd){
//     sum = sum + number
//     avg = sum / odd.length
//    }
// //    console.log(sum)
// return avg

// }


// const numbers = [12,23,34,35,45,57,67,68,79]
// const avg = oddnumber(numbers)
// console.log(avg)



// function evennumber (numbers){
//     let even = []
//     let sum = 0
//     let avg = []
//     for(number of numbers){
//         if(number % 2=== 0){
//             even.push(number)
//            sum = sum + number
//            avg = sum / even.length
           
//         }
//     }
//     return avg
// }


// const numb = [12,33,44,56,57,59,80]
// const avgg = evennumber(numb)
// console.log(avgg)







function oddnumber(numbers){
    let odd = []
    let sum = 0
    let avg = []
    for(const number of numbers){
        if(number % 2 === 1){
            odd.push(number)
            sum = sum + number
            avg = sum / odd.length
        }
    }
     return avg


}

const numb = [12,32,33,37,45,57,66]
const avg = oddnumber(numb)
console.log(avg)