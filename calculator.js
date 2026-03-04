function add(num1,num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2
}

function multi(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

function calculator(num1, num2, operation){
    if(operation === 'add'){
        const result = add(num1,num2)
        return result
    }

    else if(operation === 'sub'){
        const result = sub(num1,num2)
        return result
    }

    else if(operation === 'multi'){
        const result = multi(num1,num2)
        return result
    }

    else if(operation === 'divide'){
         const result = divide(num1, num2)
         return result
    }
}

const result = calculator(5, 6,'multi')
console.log(result)