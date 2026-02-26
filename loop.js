const hat = {
    brand : 'nabawi',
    color : 'black',
    price : 450,
    isnew : true
}


for(const prop in hat){
    console.log(prop)
    console.log(hat[prop])
}    

// const key = Object.keys(hat)
// console.log(key)

// for(const key in hat){
//     console.log(key,':',hat[key])
// }

