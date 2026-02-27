
// // string task - 1

let team = 'AmiHalaRealMadrid'
let count0 = 0
for(let i = 0; i<team.length; i++){
    if(team[i]==='a'){
        count++
    }
}
console.log(count)

// // string task-2

let pharse = 'AmarShonarBanglaAmiTomaiValobasi'
let count1 = 0

for(let i = 0; i<pharse.length; i++){
      if(pharse[i]==='a'|| pharse[i]==='o'){
        count1++
      }
}
console.log(count1)

// // string task-3
const sentence = 'Check whether a string contains all the vowels'

console.log(sentence.includes('a'&&'e'&&'i'&&'o'&&'u'))


// // string task-4
const word ='hello world'
const replace = word.replace('l', 'x')
console.log(replace)

let str = 'hello world'
let newstr = str.replaceAll('l','x')
console.log(newstr)

const place = 'Dhaka'

const replace2 = place.replaceAll('a', 'F')
console.log(replace2)

// // task 5- i did not understand

// practise
let name = 'samsung'
let count = 0

for(let i = 0; i<name.length; i++){
    if(name[i]==='s'){
        count++
    }
}
console.log(count)


let subject = 'salauddinAmmar'
let count3 = 0

for(let i = 0; i<subject.length; i++){
    if(subject[i]==='a'|| subject[i]==='A'){
        count++
    }
}

console.log(count)


let fish = 'jui'

let palta = fish.replace('j', 'r')

console.log(palta)