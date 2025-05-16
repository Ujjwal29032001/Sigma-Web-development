// console.log('This is Promises ')
// 
// let promp1 = new Promise ((resolve, reject) => {
    // let a = Math.random();
    // if (a<0.5) {
        // reject("no random nuber was not supporting you")
    // }
    // else{
        // setTimeout(() => {
            // console.log("Yes I am done")
            // resolve("Harry")
        // }, 3000);
    // }
// })
// let promp2 = new Promise ((resolve, reject) => {
    // let a = Math.random();
    // if (a<0.5) {
        // reject("no random number was not supporting you")
    // }
    // else{
        // setTimeout(() => {
            // console.log("Yes I am done 2")
            // resolve("Harry 2")
        // }, 1000);
    // }
// })

// promp1.thenallSettled((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
//  let p3 = Promise.race([promp1,promp2]) 
//  p3.then ((a)=>{
    // console.log(a)
//  }) .catch(err=>{
    // console.log(err)
//  }

console.log('This is promise');

let prom1 = new Promise ((resolve , reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you")
    }
    else{
        setTimeout(() =>{
            console.log("Yes I am done")
            resolve("Trimbyak")
         }, 3000);
    }
     
})

let prom2 = new Promise ((resolve , reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(() =>{
            console.log("Yes I am done 2")
            resolve("Trimbyak 2")
         }, 2000);
    }
     
})

// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)

// }).catch((err)=>{
//     console.log(err)
// })

// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)

// }).catch((err)=>{
//     console.log(err)
// })




// let p3 = Promise.allSettled([prom1, prom2])
// let p3 = Promise.any([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)

// }).catch((err)=>{
//     console.log(err)
// })
// p3.then((a)=>{
//     console.log(a)

// }).catch((err)=>{
//     console.log(err)
// })

// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.resolve([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>
console.log(err))

         
