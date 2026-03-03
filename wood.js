
// function wood(tablequantitiy, bedquantity,  chairquantity ){
//     const pertablewood = 4;
//     const perbedwood = 5;
//     const perchairwood = 6;

//     const tabletotalwood = pertablewood * tablequantitiy
//     const bedtotalwood = perbedwood *bedquantity
//     const chairtotalwood = perchairwood * chairquantity

//     const totalwood = tabletotalwood + bedtotalwood + chairtotalwood
//     return totalwood
// }

// const result = wood(1,1,1)
// console.log(result)


function market(shirt, pant, panjabi,shoe){
  const pershirt = 300;
  const perpant = 300;
  const perpanjabi = 400;
  const pershoe = 250;

  const totalshirt = pershirt * shirt
  const totalpant = perpant * pant
  const totalpanjabi = perpanjabi * panjabi
  const totalshoe = pershoe * shoe

  const totalmoney = totalshirt + totalpant + totalpanjabi + totalshoe
  return totalmoney


}

const list = market(2,2,1,1)
console.log(list)