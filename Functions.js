const prompt = require('prompt-sync');
function nice(name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are good");
    console.log("Hey" + name + "your tshirt is nice");
    console.log("Hey" + name + "your Course is good too");
}
function sum(a, b, c=3){
    // console.log(a + b)
    console.log(a, b , c)
    return a + b + c
}

// nice("R0HAN")
// nice("Shivam")
result1 = sum(3,10)
result2 = sum(7, 5)
result3 = sum(3, 13, 1) 



console.log("The sum of these numbers is: ", result1)
// result=sum(3, 5)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x)=>{
    console.log("I am a arrow function" , x)
}

func1(34);
func1(66);
func1(30);