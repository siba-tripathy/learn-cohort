//slides: https://slides.com/harkiratsingh-8/week-1-2javascript-foundation

console.log("Hello World");
const a = 2;
console.log(a)

let name = "boxstrike";
let age = 25;
let isGood = true;
console.log("Hey " + name + ". You are " + age + " years old.")

if (isGood) {
    console.log(name + " is good!");
} else {
    console.log(name + " is not good!")
}

//sum of 1 to 1000
let ans = 0 
for (x = 1; x<=1000; x++) {
ans+=x;
}
console.log(ans)

//print all even elements of an array
const ages = [21, 32, 13, 24, 56]

for (x=0; x<ages.length; x++) {
    if (ages[x]%2 ==0) {
        console.log(ages[x]);
    }
}

//objects and arrays of objects
const users = [
{
    firstname: "box",
    isGood: true,
    gender: "male"
},
{
    firstname: "amit",
    isGood: false,
    gender: "male"
},
{
    firstname: "ria",
    isGood: true,
    gender: "female"
}]

for (let i=0; i<users.length; i++) {
    if (users[i].gender == "male") {
        console.log(users[i].firstname + " is male!")
    }
}

//function
function sum (a, b) {
    return a+b;
}

//function call-backs
    function sum(num1, num2, fnToCall) {
        let result = num1 + num2;
        fnToCall(result)
        return result;
    }

    function displayResult(data) {
        console.log("Result of the sum is : " + data);
    }

    function displayResultPassive(data) {
        console.log("Sum's result is : " + data);
    }

    // You are only allowed to call one function after this
    // How will you displayResult of a sum
    sum(10, 12, displayResult)

    //setTimeout Example
    function greet() {
        console.log("hello alien");
    }

    setTimeout(greet, 4 * 1000)
    console.log("Just after setTimeout")   //gets called before the first setTimeout
    setInterval(greet, 4 * 1000)



//String
