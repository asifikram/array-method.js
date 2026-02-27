
const person = ['akib', 'rakib', 'jawad', 'babu']
const sortedPerson = person.sort()

console.log(sortedPerson)

const numbers = [1,2,34,67,98,54,4]
const number_asc = [...numbers].sort(function(a,b){return a-b})
const number_dsc = [...numbers].sort(function(a,b){return b-a})

console.log(number_dsc)
console.log(number_asc)




