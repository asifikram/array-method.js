
// task-1
function getlowestnumber(numbers){
    let lowest = numbers[0];
    for(const number of numbers){
        if(number < lowest){
            lowest = number
        }
    }
    return lowest
}
const height2 = [162,190,120,165,137]
const result = getlowestnumber(height2)
console.log(result)

// task-2

function getsmallestname(names){
    let small = names[0]
     for(const name of names){
        if(name.length < small.length){
            small = name
        }
     }
     return small
    
}
const friends = ['rahim','robin','rafi','ron','rashed'] 
const outcome = getsmallestname(friends)
console.log(outcome)

// task-3
function calculateElectronicsBudget(laptop , tablet , mobile){
      const perlaptop = 35000 
      const pertablet = 15000
      const permobile = 20000

      const totallaptopprice = perlaptop * laptop
      const totaltabletprice = pertablet * tablet
      const totalmobileprice = permobile * mobile

      const total = totallaptopprice + totalmobileprice + totaltabletprice
      return total
}

const budget = calculateElectronicsBudget(2,3,5)
console.log(budget)

// task-4
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

function  findAveragePhonePrice (phones){
    let sum = 0
    for(const phone of phones){
        sum = sum + phone.price        
    }
     let avg =sum /  phones.length
    return avg
}   

const product = findAveragePhonePrice(phones)
console.log(product)

// task-5
 const employees = [
 { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
 { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
 { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
 { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function gettotalsalary(accounts){
    let total = 0
    for(const account of accounts){
        const firsttsalary = account.starting 
        const currentsalary = account.experience * account.increment
        total =  total +  firsttsalary + currentsalary
    }   
    return total
}

const parameter = gettotalsalary(employees)
console.log(parameter)