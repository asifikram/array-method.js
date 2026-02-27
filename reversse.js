
// 1 method
const numbers = [1,2,3,4,5,6,7]
console.log(numbers)
numbers.reverse()
console.log(numbers)


// // unsfit method for of
const reverse = []
for(const number of numbers){
    console.log(number)
    reverse.unshift(number)
}
console.log(reverse)
// unshit of for loop of number
const reversee = []
for(let i=0; i<=numbers.length; i++){
    console.log(numbers[i])
    reverse.unshift(i)
}
console.log(reversee)



// // unshift method
const friends = ['bill', 'elon','waren','mark']
console.log(friends)
friends.reverse()
console.log(friends)
const reversse = []
for(const friend of friends){
    console.log(friend)
    reversse.unshift(friend)
}
console.log(reversse)












