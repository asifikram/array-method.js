
function isleap (year){
 if( year % 100 !== 0 && year % 4 === 0){
    return true
 }
  else if(year % 400 === 0){
    return true
 }
 else {
    return false
 }
}

const lipi = isleap(2300)
console.log(lipi)