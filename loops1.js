//  let a = [1, 3, 5,6,88]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)

// }
// a.forEach((value,index,arr)=>{
//     console.log(value, index, arr)
// })
// for (const element of object) {
    
// }
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)
        
//     }
// } 
// for (const value of a) {
//     console.log(value)

// }

 let arr = [1,13,5,7,11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element**2)

    

let newArr = arr.map((e,index, arr)=>{
    return e**2
})
 console.log(newArr)
 const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
 }
 console.log(arr.filter(greaterThanSeven))

 console.log(arr.filter((e)=>{
    if(e>7){
        return true
    }
    return false
 }))

//  let arr2 = [1,2,3,4,5,6]
//  const red = (a,b)=>{
//     return a*b
//  }
//  console.log(arr2.reduce(red))

//  let arr2 = [1,2,3,4,5,6]
//  const yellow = (a,b)=>{
//     return a+b
//  }
//  console.log(arr2.reduce(yellow))

// 
