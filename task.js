
// object task-1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors['golden rod'])

// object task-2

const car = {
    make : 'toyota',
    model : 'corola',
    year : 2020,
    passengerCapacity : 5
}

console.log(car.passengerCapacity)








// object task-3

const student = {
    name : 'hamim sakep',
    id : 5421,
    physics:{
        subject :'hsc physics',
        author : 'sahajan tapar',
        marks : 30
    }
}
console.log(student['physics'].marks)
console.log(student.physics.marks)

// object task-4

let pupil ={
         name : 'ariyan grande',
         age : 21,
         city : 'gaibanda',
         isstudent:true
}

const value= Object.values(pupil)
const key= Object.keys(pupil)
console.log(key)
console.log(value)

// object task-5 i cant but i try

let myObject ={
    name : 'jhon doe',
    age : 25,
    city : 'example city',
    isstudent : true
    }

for(let key in myObject){
   let value =myObject[key]
     let type = typeof value

     console.log(key + ':'+ value + '/'+ type)
} 





