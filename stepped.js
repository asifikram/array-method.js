const price=10000

if(price >=5000){
    // 10% discount
    const discount=price * 10 / 100
    const payamount=price - discount
    console.log(payamount)
}

else{
    console.log(price)
}