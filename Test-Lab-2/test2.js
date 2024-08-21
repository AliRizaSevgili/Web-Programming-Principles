/**
 * WEB222 – Quiz/Lab #2
 *
 * I declare that this labs is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <Ali Riza Sevgili>
 *      Student ID: <135200228>
 *      Date: <02/04/24>
 *
 */

/*******************************************************************************
 * Lab 2: Complete and/or modify the code below as per the instructions included in
 * each individual question. Your code should run in NODE.js as shown in class.
 * Some questions may need to be modified in order to run correctly, or written from
 * scratch. You may decide.
 *
 * Note, you can create your answer beneath the question comment itself
 */

/*******************************************************************************
 * Q1:
 * create a function that displays each character of this string on the screen
 * with a space between each letter. The string must appear on one line
 *
 * Example output:
 * H e l l o   W o r l d ,   I ' m   a   n e w   j a v a s c r i p t   p r o g r a m m e r
 */

function spaceWithString(str) {
    
    // To split this string into the array for each letters and then put together all the characters via join feature of JS
return str.split('').join(' ');

}

const stringData = "Hello World, I'm a new javascript programmer";
console.log(spaceWithString(stringData))
/*******************************************************************************
 * Q2:
 * Replace all of the pipe "|" characters with a comma ",". Note, Older versions of
 * Javascript do not have a replaceall function. Find a way to replace these.
 * Example output:
 * Harry,Jim,Jeswin,Gurpreet,Sam,Tobias,Angel,Tong
 */

var names = "Harry|Jim|Jeswin|Gurpreet|Sam|Tobias|Angel|Tong";
var newFormattedNames = names.replace(/\|/g, ",");    //use replace all of '|' with ',' so that will replace all of the pipe characters with a comma
console.log(newFormattedNames);
/*******************************************************************************
 * Q3:
 * Split the names string into an ARRAY based on the ',' and display the names vertically on the screen
 * Example Output:
 * Harry
 * Jim
 * Jeswin
 * Gurpreet
 * Sam
 * Tobias
 * Angel
 * Tong
 */

var names = "Harry|Jim|Jeswin|Gurpreet|Sam|Tobias|Angel|Tong";
var newFormattedNames = names.replace(/\|/g, ",");  //use replace all of '|' with ',' so that will replace all of the pipe characters with a comma
var newFormattedNamesArray = newFormattedNames.split(",");  //split the string into an array based on the ','
for ( var index = 0;  index  < newFormattedNamesArray.length; index ++) {     //loop through the array
    console.log(newFormattedNamesArray[index]);  //display each element of the array
    
}
/*******************************************************************************
 * Q4:
 * Write a function that extracts the area code from a phone number and display it
 * on the screen. You can use a regex if you want, but your function must work for
 * all three types of phone numbers.
 * Example Output:
 * 519
 */
function getAreaCode(phoneNumber) {  //create a function that extracts the area code from a phone number and display it
   
    var regex = /\(?(\d{3})\)?-?\d{3}-?\d{4}/;  //create a regex to match the phone number
    var match = phoneNumber.match(regex);       //match the phone number
    if (match) {                                //if the match is found
        
        return match[1];                     //return the area code 
    } else {                                //if the match is not found
        return 'No area code found';            //return an error message
    }
}


console.log(getAreaCode("(519)-555-5555")); // Should return 519
console.log(getAreaCode("519-555-5555"));   // Should return 519
console.log(getAreaCode("5195555555"));     // Should return 519


/*******************************************************************************
 * Q5:
 * Create a simple int array that holds X amout of numbers. Initalize the array
 * when you create it. Output the array to the screen.
 * Example Output:
 * 5,5,6,10,3,1,6
 */
let numbersArray = [5, 5, 6, 10, 3, 1, 6];  //  returns
console.log(numbersArray.join(","));        // should return 5,5,6,10,3,1,6

/*******************************************************************************
 * Q6:
 * Create a new object called "person". Give the person object 2 properties;
 *
 * name
 * age
 *
 * name should be a string array, the first position holds your first name, and second your last.
 * age should be a number, date
 *
 * output the entire object to the console.
 */
let person = {          // create a new object called "person"
    name: ["Ali Riza", "Sevgili"],      // name of the person
    age: 28                 // default
};

console.log(person);            // should return { name: ["Ali Riza", "Sevgili"], age: 2

/*******************************************************************************
 * Information:
 *
 * DOT NOTATION
 *
 * The object name (person) acts as the namespace — it must be entered first to access
 * anything inside the object. Next you write a dot, then the item you want to access
 * — this can be the name of a simple property, an item of an array property, or a call
 *  to one of the object's methods.
 *
 * If you defined your object correctly in Q6, the following code should display your
 * name and age
 * ex:
 ********************************************************************************/
console.log(person.name);
console.log(person.age);

/*******************************************************************************
 * Q7:
 *
 * Redefine (recreate) your person object to include a function.
 * The function should be called "bio" and should output your first name,
 * last name and age to the console when you call it.
 *
 * Make sure to use DOT notation for your output.
 *
 * ex:
 * Harry Scanlan is 35 years old
 *
 * Use your function to display the output to the screen.
 *
 */

person = {          // create a new object called "person"
    name: ["Ali Riza", "Sevgili"],  // name of the person
    age: 28,                        // default is 28
    bio: function() {               // create a function that outputs your first name, last name and age to the console when you call
        console.log(this.name[0] + " " + this.name[1] + " is " + this.age + " years old");    // display the output to the console
    }

    
};

person.bio();   // should return Ali Riza Sevgili is 28 years old. 
/*******************************************************************************
 * Q8:
 * Using the same Object from Q7, ADD a new property to your object.
 * This property should be called "studentid" and should be defaulted to your
 * student number.
 *
 * DO NOT redefine your object. You must ADD the property to it.
 *
 * You may have to research "how to add a new property to a javascript object"
 *
 * Make sure to use DOT notation for your input/output.
 *
 * Display the entire object using the console.
 */
person.studentid = 123456789;   // default  is 123456789

console.log(person);            // should return { name: ["Ali Riza", "Sevgili"], age: 2
/*******************************************************************************
 * Q9:
 * Using the same object from Q7, ADD a new function called "introduceSelf()"
 *
 * DO NOT redefine your object. You must ADD the property to it.
 *
 * The function should introduce yourself by just your first name and your student id.
 *
 * Call your function to display your output.
 *
 * Ex:
 * Hi! I'm Harry and my student id is 1234567.
 */
person.introduceSelf = function() {  // default is 123456789

    console.log("Hi! I'm " + this.name[0] + " and my student id is " + this.studentid + ".");   // display the output to the console
};

person.introduceSelf(); // should return Hi! I'm Harry and my student id is 12345
/*******************************************************************************
 * Information:
 * An object like this is referred to as an object literal — we've literally written
 * out the object contents as we've come to create it. This is different compared to
 * objects instantiated from classes, which we'll look at later on.
 ********************************************************************************/

/*******************************************************************************
 * Q10:
 * So far we've been using DOT notation, but we can also use Bracket Notation when
 * accessing objects.
 *
 * Display your FIRST NAME only and age using Bracket notation in the console.
 *
 */
console.log(person['name'][0]);     // should return Ali Riza
console.log(person['age']);         // should return 28 
/*******************************************************************************
 * Q11:
 * Add another function to your person object that outputs the same as bio(), but
 * uses BRACKET notation for the output instead of DOT notation. 
 * 
 * Call the function bioBracket() and then use it to display your output

 */
person['bioBracket'] = function() {
    console.log("Hi! I'm " + this['name'][0] + " and my student id is " + this['studentid'] + ".");
};

person.bioBracket();

