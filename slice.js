 const address = 'andorkilla'
const part = address.slice(2,6)
console.log(part)


const sentense = 'i am a good and hardworking student'
console.log(sentense.split(' '))//

const friendsstr = 'rahim, fahim, karim, mahin, sahin, muhin'
const friends = friendsstr.split(',')
console.log(friends)

const realfriend = [ 'rahim', ' fahim', ' karim', ' mahin', ' sahin', ' muhin' ]

console.log(realfriend.join())
console.log(realfriend.join(','))
console.log(realfriend.join('-'))