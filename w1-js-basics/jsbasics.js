//slides: https://slides.com/harkiratsingh-8/week-1-2javascript-foundation

console.log("Hello World");
const a = 2;
console.log(a)

let name = "boxstrike";
let age = 25;
let isGood = true;
console.log("Hey " + name + ". You are " + age + " years old.")

//=== for equality and !== for inequality check

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

//ARRAYS
//print all even elements of an array
const ages = [21, 32, 13, 24, 56]

//length to give array size not ages.size
//other way of for method : for (let x of numbers)
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

//push is the way to add element to js array, not concat, that is to concat another array
    //other way to access attributes of objects : spend['category']
//pop() removes the last element of the array and decrements the array size
//splie(x, y) removes elements from indices x to y and updates the array size by decreasing it
for (let i=0; i<users.length; i++) {
    if (users[i].gender == "male") {
        console.log(users[i].firstname + " is male!")
    }
}



//JS Maps
    //to traverse each key-val in map, use for(let [key, value] of map1)
    //using map1[str[i]] is not the right way, it wont give correct size and element value assignment always use get and set with Map
    //Learning: using map2.get(key) gives undefined if that key is not found.

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

    setTimeout(greet, 4 * 1000) // gets triggered after 4secs 
    console.log("Just after setTimeout")   //gets called before the first setTimeout, so that means js does not wait for previous set timeout/setinterval to execute, 
                                           //it goes on to next line. 
    setInterval(greet, 4 * 1000)   //gets triggered in repeated intervals of 4 secs
    