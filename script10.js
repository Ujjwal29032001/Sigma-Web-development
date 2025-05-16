//  const prompt = require('prompt-sync');
// console.log("Hey there is tutorial 55")

// var a = 5
// // a = a + 1
// let b = 10
// let c ="Harry"
// let _a = "Shubham"

// //  console.log(a+b)
// //  console.log(c)
// //  console.log(typeof a, typeof b, typeof c )
// //  console.log(_a)
//  {
//     // let a = 66
//     console.log(a)
//  }
//  console.log(a)

// //  const a1 = 6
// //  a1 = a1 + 1
// //  console.log(a1)

// let x = "Shankar Bhai"
// let y = 22
// let z = 3.55
// const p = true
// let q = undefined
// let r = null

// console.log (x, y, z, p, q, r)
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// let o = {
//     "name": "Ujjwal", 
//     "job role" : 5600,
//     "is_handsome": "true"
// }
// console.log(o)
//  o.salary = "100crores"
//  console.log(o)

// 
// console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"
// document.getElementById("redbox").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor = "green"
//  document.querySelectorAll(".box").forEach(e =>{
//       e.style.backgroundColor = "green";
//  })

// let btn = document.getElementById("btn")
// list of all Mouse events
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
//  btn.addEventListener("mousedown", ()=>{
//    document.querySelector(".Box").innerHTML = "<b>YaY you were Clicked</b> Enjoy You were click!"
//      //     alert("I was clicked Yayy!!")  
// })
// btn.addEventListener("contextmenu", ()=>{
//      alert("Don't hack us by Right Click Please ")
// })

// document.addEventListener("keydown", (e)=>{
// console.log(e.keycode)
// })

// console.log("harry is hacker")
// console.log("Rohan is Good Boy")

// setTimeout(() => {
//     console.log("I am inside set timeout")
// }, 2000)
// setTimeout(() => {
//     console.log("I am inside set timeout2")
// }, 2000)

// const fn =() => {
//     console.log("Nothing")
// }
// const callback = (arg, fn) => {
//     console.log(arg)
//     fn()
// }
// console.log("The End")
// const loadScript = (src, callback) => {
//     let sc = document.createElement("script")
//     sc.src = src;
//     sc.onload = callback("UJJWAL", fn)
//     document.head.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
// async function getData() {
//     // Simulate data getting from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
// settle means resolve or reject
// resolve means promise has settled successfully
// reject means not settled





// async function getData() {
// Simulate data getting from server
// let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//  let data = await x.json()
// let data = await x.text()
// console.log(data)
//    console.log(x)
//    return 455
// }

// async function main() {
// console.log("Loading the Data modules")
// 
// console.log("Do something else")

// console.log("Load data")


// let data = await getData()

// console.log(data)

// console.log("Process data")

// console.log("task 2")
// }

// main()

// async function postData(url ="", data = {}) {
// const response = await fetch (url, {
// method : "Post",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify(data),
// });
// return response.json();

// }

// postData("https://example.com/answer", {answer : 42}).then ((data)=> {
// console.log(data);
// })



// data.then((v)=>{
//     console.log(data)
//     console.log("Process data")
//     console.log("task 2")
// })

// let a = prompt("Enter the first number")

// let b = prompt("Enter the Second number")
// if (isNaN(a) || isNaN(b)) {
// throw SyntaxError("Sorry this is Not allowed")
// }
// let sum = parseInt(a) + parseInt(b)


// function main() {
// let x = 1;
// try {
// console.log("The sum is", sum )
// return true;
// } catch (error) {
// console.log("Error aa gaya bhai")
// return false;
// }
// finally {
// console.log("files are close and db connection is beinged Close")
// }
// }
// // let c = main()

// let obj = {
//     a: 1,
//     name: "UJJWAL"
// }
//  console.log(obj)

//  let animal = {
//     eats: true
//  };
//  let rabbit = {
//     jumps: true
//  };

//  rabbit._proto_ = animal;

// //  class Animal{
//     constructor(name){
//         this.name = name
//         console.log("Object is created")
//     }

//     eats(){
//         console.log("kha raha hoon")
//     }
//     paad(){
//         console.log("paad raha hoon")
//     }
// //  }

//  class Lion extends Animal {

//     constructor(name) {
//         super(name)
//         this.name = name
//         console.log("Object is created and Lion is Roar")
//     }
//     eats(){
//         super.eats
//         console.log("kha raha hoon yaar")

// }


//  }
//  let a = new Animal ("Bunny");
//  console.log(a) 

//  let l = new Lion("Shera")
//  console.log(l)
// console.log(a1);

// async function sleep() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000)
//     })
// }
// function sum(a,b,c){
//     return a+b+c
// // }
// (async function main() {
    // console.log(a1)
    // var a1
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);

    // let [x , y,rest] = [1,7,9,15,19,22]
    // console.log(x,y ,rest)


//     let obj = {
//         a: 1,
// //         b:2,
//         c: 3
//     }
//     let {a,b} = obj
//     console.log (a, b)

//     let arr = [1,4,6]
//     console.log(sum(...arr))
//     console.log(arr[0] + arr[1] + arr[2])
//     console.log(sum(arr[0] , arr[1] , arr[2]))
//     // var a1 = 6;
// })()

// var al = 6;

// const sleep = async ()=>{
//     return new Promise((resolve, reject)=>{
        //  setTimeout(()=>{
//             resolve(45)
//          }, 1000)
//     })
// }

// const sum = async (a, b, c)=>
// {
    // return a+b+c
// }

// let a = "UJJWAL"
// let b = "8"
// console.log(a+b);
// console.log(typeof (a+b))

// const a1 = {
//     name: "Mahakkal",
//     Section : 2,
//     isprincipal: false   
// }
// a1['friend'] = "Shubham"
// a1['name'] = "Ramesh"
// console.log(a1)

// const dict = {
//     appreciate: "appreciate someone",
//     yakka: "hard Work",
//     romance: "Love someone"
// }
// 
/*
let age = prompt("What is your age")
age = Number.parseInt(age)
if (age>10 && age<20){
    console.log("Your age is lies between 10 and 20")
}
else {
    console.log("Your age doesn't lies between 10 and 20")
}
    */
// 
// let num = prompt("hat is your age")
// num = Number.parseInt(num)
// if(num%2==0&& num%3 ==0){
//     console.log("Your Number is divisible by 2 and 3")
// }else{
//     console.log("Your number is not divisible by 2 and 3")
// }
// let num = prompt("What is your age")
// num = Number.parseInt(num)
// if(num%2==0){
//     console.log("Your Number is divisible by 2 ")
// }if(num%3==0){
//     console.log("Your number is divisble by 3")
// }else{
//     console.log("Number is not divisible by 2 and 3")
// }
// 

// let marks = {
//     Ujjwal: 90,
//     Sourabh: 9,
//     Kushagra: 18,
//     Megha: 100
  
// }
// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of" + Object.keys(marks)[i] + " are " + marks[ Object.keys(marks)[i]])
// // }
// for(let key in marks){
//     // console.log("The marks of" + Object.keys(marks)[i] + " are " + marks[ Object.keys(marks)[i]])
//     console.log("The marks" + key + "are" + marks[key])
    // console.log(i)
// }
// let cn = 4
// let i
// while(i != cn){
//     i = prompt("Enter a Number")
//     console.log("try again")
// }
// console.log("You have entered a correct number")

// const mean = (a , b , c, d) => {
//     return(a + b + c +d)/4
// }
// console.log(mean(4,5,6,7))
// let str = "UJJU\""
// console.log(str.length)
// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // Expected output: true

// console.log(str1.startsWith('Sat', 3));
// Expected output: false
// 

// Expected output: false
// const word = "fox2";

// console.log(word.toLowerCase())
// console.log(word.toUpperCase())

// let str2 = "Please give rs 1000"
// // let amount = str2.slice("Please give rs".length)
// let amount = Number.parseInt(str2.slice(15))

// console.log(amount)
// console.log(typeof amount)
// let friend = "Deepika"
// friend[3] = "R"
//  console.log(friend) //friend is not changed because string is immutable

//  let arr = [1,8,3,6,7,41]
//  let a = prompt("Enter a Number")
//  a = Number.parseInt(a)
//  arr.push(a) 
//  console.log(arr)  
//  const prompt = require('prompt-sync');
//  let arr = [1,8,3,6,7,41]
//  let a;
//  do{
//   a = prompt("Enter a Number")
//  a = Number.parseInt(a)
//  arr.push(a) 
// }while(a !=0);
// console.log(arr)

//  let arr = [1,8,30,60,670,41]
//  let n= arr.filter((x)=>{
//     return x%10 == 0
//  })
//  console.log(n)
//  let arr = [1,8,30,60,670,41]
//  let n = arr.map((x)=>{
//     return x*x
//  })
//  console.log(n)
//  let arr = [1,2,3,4]
//  let n = arr.reduce((x1,x2)=>{
//     return x1*x2
//  })
//  console.log(n) 
// let score = 0;
// let r = Math.ceil(Math.random());
// console.log(r)
// for(let i=1; i<100; i++){
//     let userinput = Number(prompt("Enter your Number"));
//   if(r>userinput){
//      score+=1;
//   }

// else if(r<userinput){
//      score+=1;
// }
// else{
//     break;
// }
// }
// let res = (100-score)
// console.log(res);

// let age = prompt("Enter your age")
// age = Number.parseInt(age)
// const canDrive= (age)=>{
//     return age>=18 ? true:false
// }
// if(canDrive(age)){
//     alert("Yes you can Drive")
// }
// else{
//     alert("You cannot drive")

// } 
// 

// let number = prompt("Énter your Number")

//  number = Number.parseInt(number)

//  if (number>4){
// location. href="https://google.com"
//  }
//  else{
//     console.log("Wrong click By You")
//  }   
// function double(arr){
//     for(let i=0; i<100; i++) {
//         if (arr[i] == arr[i+1]) {
//             continue;
//         }
        
//         else {
//             console.log(arr[i] + arr[i])
//         }
//     } 

// }
// let myArray = [2,8,5,4,2,2,3,3,3,4,5,9];
// double(myArray);

    // function mirror(string) {
    //     return string + Array.from(string).reverse().join("");
    //er = /[A-Z]/.test(password);
    // let haslower = /[a-z]/.test(password);A
    


// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// Array.from(document.getElementsByTagName("li")).forEach((element)=>{
//     element.style.background = "skyBlue"
// })    
// let user = prompt("Enter the S W or G")
// let cpuI = Math.floor(Math.random() * 2);
// let cpu = ["S", "W" , "G"][cpuI]
// const match = (cpu, user)=> {
    // if(cpu === user) {
        // return 0;
    // }
    // else if(cpu === "S" && user=== "W"){
            // return "cpu"
    // }
    // else if(cpu === "S" && user=== "W"){
            // return "user"
    // }
    // else if(cpu === "G" && user=== "W"){
            // return 
    // }
// }
// match(user, cpu)  
// document.getElementById("google").addEventListener("click", function() {
//     window.location = "https://www.google.com";
//     win.focus();
// })
 
// const fetchContent = (url) => {
// con = await fetch(url);
//     let a = await con.json()
//     return a;
// }

// setInterval(async function(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetchContent(url))
// }, 3000)    

// setInterval(async function () {
//  document.querySelector("#bulb").classList.toggle("bulb")   
// }, 1000)       
