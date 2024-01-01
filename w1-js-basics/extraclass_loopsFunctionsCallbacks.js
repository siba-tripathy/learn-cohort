//LOOP
let sum = 0;
for (let i=1; i<=50;i++) {   //i is only in the loop scope, outside this loop there is no i. if you declare and use "i" outside, you can do so without worrying about the loop's i
                            //let i=1 is the declaration, only exeucted in begining of loop
    sum += i;               //for every iteration: other 2 statements are run 
                            //i<50 is the condition checked before every iteration;     
                            //i++ is just incrementing value of i for next interation
                            
}
console.log(sum)


//FUNCTIONS give us code reusability, separation of concern: absrtaction(caller does not worry about minnute details every time they use it)
//DRY concept: Dont Repeat Yourself
function findArithmaticSum(n) {

    let sum = 0;

    for (let i=1; i<=n; i++) {
        sum += i;
    }

    return sum;

}
//write once and reuse as many times as you want
console.log(findArithmaticSum(100))
console.log(findArithmaticSum(10))
console.log(findArithmaticSum(500))


//CALLBACK FUNCTIONS: pass a function as an arguemnt to another function, so that it can be called as seen fit by the first function
function getSquare(n) {
    return n*n;
}

function getSumOfSquares(a, b) {
    const val1 = getSquare(a);
    const val2 = getSquare(b);

    return val1 + val2;
}

console.log("Sum of squares: "+getSumOfSquares(2, 3));

// Now if there comes more functions like, finding the sum of cubes, sum of ^4s, ^5s etc, then we may create another couple of functions like

function getCube(a) {
    return a * a * a;
}

function getSumOfCubes(a, b) {
    const val1 = getCube(a);
    const val2 = getCube(b);

    return val1 + val2;
}

console.log("Sum of cubes: "+getSumOfCubes(2, 3));


//But we should recognize that the val1 + val2 line is common(as expected). DRY principle(Dont Repeat Yourself) is not followed. 
//we can create a single method that does the addition. But you can use callbacks to pass which function (square/cube/^4/^5s) and only add
//the result in the common method

//here f is the callback function
function getSumOfFunctionResults(a, b, f) {
    const val1 = f(a);
    const val2 = f(b);
    return val1 + val2;
}

//getSquare is passed as callback function
console.log("sum of squares: " + getSumOfFunctionResults(2, 3, getSquare));
//getCube is passed as callback function
console.log("sum of cubes: " + getSumOfFunctionResults(2, 3, getCube));


//Anonymous calback function define inline. Just like Anonymous, inline lambda functions in Java
console.log("sum of cubes: " + getSumOfFunctionResults(2, 3, function getCube(a) {
    return a * a * a;
}));

//Anonymous functions dont need name , as cant be used outside, as only in that scope
console.log("sum of cubes: " + getSumOfFunctionResults(2, 3, function (a) {
    return a * a * a;
}));