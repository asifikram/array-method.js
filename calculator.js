function add (num1, num2){
   return num1 + num2
}

function sub (num1, num2){
    return num1 - num2
}

function multipy(num1, num2){
    return num1 * num2
}

function divide(num1 , num2){
    return num1 / num2
}


function calculator(num1 , num2 , operation){
    if(operation === 'add'){
        const result = add(num1 , num2)
        return result
    }

    else if(operation === 'sub'){
        const result = sub(num1 , num2)
        return result
    }

    else if(operation === 'multify'){
        const result = multipy(num1 , num2)
        return result
    }

    else if(operation === 'divide'){
        const result = divide(num1 , num2)
        return result
    }
}

const result = calculator(30 , 6 , 'divide')
console.log(result)