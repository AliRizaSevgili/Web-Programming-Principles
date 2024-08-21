/* 
-Student Name   : Ali Riza Sevgili
-Student Number : 135200228
-Email Address  : alirizasevgili@myseneca.ca
-Section        : WEB222_NDD
-Content        : Lab / Test-1
-Date           : 1/18/2024
*/



// Question-1 

console.log("Answer-1:");
console.log ("I love doing exercise at gym and driving a car for a long trip");


// Question-2

let favoriteFood = "Steak Burger";
console.log("Answer-2:");
console.log("My favorite food is \"" + favoriteFood + "\".");

//Question-3

function calculateVolume(length, width, height) {    //Create a function which has 3 parameters
    let volume = length*width*height;               //Assign volume via let feature to calculate volume of whole parameters.
        return volume;                              // This function return volume
}

// Calling calculateVolume function for different values

console.log("Volume of box 1: " + calculateVolume(10,5,2));
console.log("Volume of box 2: " + calculateVolume(6,3,4));
console.log("Volume of box 3: " + calculateVolume(8,7,5));


// Question-4

// Creating a for loop to iterate even numbers from 2 to 20 

for (let evenNumber=2;  evenNumber<=20; evenNumber++) {     //Assign evenNumber=2 and increase up 2 to until 20 
    if (evenNumber % 2===0) {                               //Check the if statement is true or not
        console.log(evenNumber);                            // If it is true, give output for evenNumber
    }
    
}


// Question-5

let numberCount=1;                      // Initializing a variable to count numbers from 1.

while (numberCount<=10) {               // Add a condition for while statement
    console.log(numberCount++);         
    
}


// Question-6

function division(number1, number2 = 1) {     // The function gets two parameters which has a default parameter.
    return number1 / number2;               // Return division between of them, and if the function calls just one parameter, other parameter sets default 
    
}

console.log(division(6, 2));         // Output is 3
console.log(division(7));           // Output is 7 with default parameter.


// Question-7 

let summary=(number1,number2) => number1+number2;
console.log(summary(21,43));

/* 
There are some obvious differences between arrow functions and traditional functions regarding scope of Variables.
Scope about "this" 
a) In traditional functions 'this' is determined according to execution context of the related function.
This can refer to different things based on where the function is called. For example, if the this is called as a method of an object, this refer the object.
b) In arrow function, there is no special 'this' context.It means that 'this' inside an arrow function always refers to the 'this' from the context in which it was defined.
The main differences between two type of function is basically this context as I briefly explained.
*/



// Question-8



varA= 3;                       //Global variable

function a() {

    var localVara=4;           //Local variable       

    console.log(localVara);   // Accessible here 
}

 a();

console.log(varA);           

// console.log(localVara); // Not works properly, it will give error.

// When we declare global variable, we can access outside the function and inside of the function as well, but the local variable is just available to access for inside of the function.
// console.log() shows if each variables accessible or not



// -Question-9

// I will write two JavaScript functions which are used a function declaration and expression.

// -Function Declaration

function nameDeclaration() {
   return "My name is Ali Riza";
}

// Function Expression

const nameExpression = function () {
    return "My last name is Sevgili";
};


// Differences regarding Hoisting

console.log(nameDeclaration());
function nameDeclaration() {
    return "My name is Ali Riza";
 }

/*
 console.log(nameExpression());    -Gives error because nameExpression is not accessible
function nameExpression() {
    return "My last name is Sevgili";
 }

 */

 
 /*
 Hoisting in JavaScript is a kind of process where the interpreter   
 relocate functions and variables declarations to their scope before execution. The declaration of function is fully hoisted, so whole function structure which are name and body is moved to the top of its scope.
 You can call function via this way before the point in the code wherever the function is defined.
In terms of function expression is different, because trying call expression before where the function assign will end up errors.
 */




// Question 10

function outerType () {
    let OuterString= "I am outer.";

    function innerType() {
        return "I am inner." +outerType;   
    }
    
    return innerType();
}

console.log(outerType());

/*
-When you execute outer function, it also calls inner function which contains outer function value and return both together within console.log
*/
