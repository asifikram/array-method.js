const college = {
    name : 'dskm',
    address : 'saruliya',
    hall : ['fateh', 'nizami', 'khotani'],
    jamat : {
        fazil : 'quran',
        kamil : 'hadis',
        result : {
            mrit : 'top top'
        }
    }



}

// const key = Object.keys(college)
// console.log(key)
// const value = Object.values(college)
// console.log(value)
delete college.jamat
console.log(college)
// console.log(college)
// console.log(college['jamat'].fazil)
// console.log(college.jamat.result.mrit)


// college.hall[2]= 'sahidul'
// delete college.hall
// console.log(college)