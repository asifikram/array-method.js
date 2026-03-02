
const biriyanikhor = ['babul', 'kabul', 'dabul', 'babul', 'kabul', 'sahol', 'dabul']

const number = [12,34,12,56,78,34,78]


function dupli(list){
    const unique = []
  for(talika of list){
        if(unique.includes(talika) === false){
            unique.push(talika)
        } 
  }
  return unique
  
}

const remdupli = dupli(number)
console.log(remdupli)