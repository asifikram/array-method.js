// task-1

const colors = ['red','blue','green','yellow','orange']

console.log(colors)
colors.reverse()
console.log(colors)

// task-1 finish


// task-2

const numbers = [12,98,5,41,23,76,46]
// get even number by for array
for(let i = 0; i<numbers.length; i++){
    // console.log(numbers[i])
    if(numbers[i]%2===0)[
        console.log(numbers[i])
    ]
}
// / get even number by for-of array
 
for(let number of numbers){
    // console.log(number)
    if(number%2===0){
        console.log(number,'even number')
    }
}
// get even number by while loop
let i = 0

while(i<numbers.length){
    // console.log(numbers[i])
    if(numbers[i]%2===0){
        console.log(numbers[i])
    }
    i++
}

// task-3 temon ekta bujinai
var Numbers = ['tom','tim','tin','tik']
var result = '' 

for(number of Numbers){
    result= result + number
}

console.log(result)

// task-3 finish


// task-4 

const statment = 'I am a hard working person'.split(' ').reverse().join(' ')

console.log(statment)


