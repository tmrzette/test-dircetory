//////////////////////////////////////////////////////////////////////////////////////////////////
//*Booleans & Switch Statements*
/*
var name= 'John';
var age= 26;
var isMarried= 'yes';

isMarried= 'no';

if (isMarried === 'yes') {
    console.log(name +' '+'is happily married')
} else {
    console.log(name + ' '+'hopefully will marry soon')
}
*/

/*
var age= 20;

if (age < 20){
    console.log('John is a teenager')
} else if (age >= 20 && age < 30) {
    console.log('John is a young man')

}
 else {
    console.log('John is a  man')
}




var job= 'teacher';

job = prompt('What does John do?');

switch (job) {
    case 'teacher':
    console.log('John teaches kids');
    break;
    case 'driver':
    console.log('John drives a cab');
    break;
    case "cop":
    console.log('John is a cop');
    break;
    default:
    console.log('John does something else');

}




////////////////////////////////////////////////////////////////////////////////////////////////
*/
// *Coding Challenge 1*
/*
var heightJohn = 76;
var heightMark = 60;
var ageJohn = 16;
var ageMark = 25;

var scoreJohn = heightJohn + ageJohn * 5;
var scoreMark = heightMark + ageMark * 5;


if (scoreJohn > scoreMark){
    console.log('John is the winner!' + ' ' + scoreJohn)
} else if (scoreMark > scoreJohn){
    console.log('Mark is the winner!' + ' ' + scoreMark)
} else if (scoreJohn === scoreMark){
    console.log("The game ended in a draw")
} else {
    console.log(Null)
}


var heightMary = 90;
var ageMary = 20;
var scoreMary = heightMary + ageMary * 5;
 if (scoreJohn > scoreMark && scoreJohn > scoreMary){
     console.log('John is the winner with' + ' ' + scoreJohn + ' ' + 'points!')
 } else if (scoreMark > scoreJohn && scoreMark > scoreMary){
     console.log('Mark is the winner with' + ' ' + scoreMark + ' '+ 'points!')
 } else if (scoreMary > scoreJohn && scoreMary > scoreMark){
     console.log('Mary is the winner with' + ' ' + scoreMary + ' ' + 'points!')
 } else {
     console.log('The game ended in a draw')
 }

 */



 ///////////////////////////////////////////////////////////////////////////////////////////////////
//*Functions*
//camelCase for Functions!

/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}
 var ageJohn = calculateAge(1990);
 var ageMark = calculateAge(1998);
 var ageMary = calculateAge(1980);
 


//To put a function inside of a function, you must assign that function as a variable or constant.
//You can also console log a function without having to write out a return fubction.
//You can also log if/else statements inside of a function. 
//Parameters is the varible that is assigned a arguement inside of a function. Parameter in line 106 behind function yearsUntilRetirement, Arguement is assigned on line 118-120.
 function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' ' + 'retires in' + ' ' + retirement + ' ' + 'years!');
    } else {
        console.log(name + ' Is retired! ');
    }
 }


 yearsUntilRetirement('John', 1990);
 yearsUntilRetirement('Mark', 1980);
 yearsUntilRetirement('Mary', 1938);
*/


/////////////////////////////////////////////////////////////////////////////////////
/*
//*Statements and Expressions*
//Function statement (a Statement performs an action. Nothing is stored. Doesnt produce a variable or immediate product.)
function someFunc(Parameters){
    //some code here
}
 //Function expression (an Expression produces a value or outcome.)
 var someFunc = function(){
     //code
 }

// Expressions 
3 + 4;
var x = 3;

//Statements
if (x === 5) {
    // then do something
}
*/





///////////////////////////////////////////////////////////////////////////////////
//*Arrays*
/*
//Array are usually written in square brackets.
//Arrays in JavaScript are ordered from a zero base. [0,1,2,3,4,etc....]
//Alt way an array can be written
//var years = newArray(1999, 2000, 2001);
var names = ['John', 'Mark', 'Mary', 'Tyler'];
var years = [1999, 2001, 1989, 1992];

console.log(names[3]);

// Array order mututation
names[1]= 'Ben';
//Then console.log 
console.log(names[1]);

var john = ['John', 'Smith', 1991, 'teacher', false];

//The Push function adds an element to the end of the array.
// Ex. Console log; ['John', 'Smith', 1991, 'teacher', false, 'blue']
john.push('blue');
//Unshift function adds an element to the beginning of the array.
//Ex. Console log; ['Mr.', 'John', 'Smith', 1991, 'teacher', false, 'blue']
john.unshift('Mr.');
//Pop function removes an element from the end of the array.
//Ex. Console log; ['Mr.', 'John', 'Smith', 1991, 'teacher', false], removed blue from end of list. 
john.pop();
//Shift function removes an element from the beginning of the array.
//Ex. Console log; ['John', 'Smith', 1991, 'teacher', false]; removed 'Mr.' from beginning of the array. 
john.shift();
console.log(john);

//Index Of Function just returns the number of the position of the varible inside of an array.
//Can be console logged if a var variable is stored in front of it or sent to the console as an alert.
// Ex. alert(john.indexOf('Smith')) or var john.indexOf('Smith'); console log = '1'. 
//alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher');
} else if (john.indexOf('teacher') === 1) {
    console.log('John is in a new career');
} else (john.indexOf('teacher') >= 1); {
    console.log('John is a teacher!')
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
// *Objects*
/*
//Objects have key value pairs - each value have a name in a key.
//Objects use curly brackets unlike Arrays that use straight (regular) brackets.
//We use objects to group together items that aren't in any particulare order.
//Objects also use commas to seperate key values.


var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
};

//Objects use the Dot.notation method to retrieve an value from the key.
 console.log(john.lastName);
 //Objects can also use straight brackets to retrieve data from the key. But must be inserted as a 'string'.
 console.log(john['lastName']);

//You can even assign a key to a Variable and retrieve the data from the original key.
 var xyz = 'job';
 console.log(john[xyz]);


 //You can console log and the result should be 'teacher'

 //You can also mutate Data from the Objects list.
 //Similar to how arrays mutate data. Using dot notation.

//Standard use of data mutation
 john.lastName = 'Miller';

//Alternate way to mutate Data
 john['job'] = 'programmer';
 
 console.log(john);

 //Results {name: "John", lastName: "Miller", yearOfBirth: 1990, job: "programmer", isMarried: false}
//How to input a new Object (Different Way to create an object.)
 var jane = new Object();
 jane.name = 'Jane';
 jane.lastName = 'Smith';
 jane.yearofBirth = 1999;
 
 //Alternate way to input in a new Object
 jane['job'] = 'teacher';
 jane['isMarried'] = true;

 console.log(jane);
*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Objects and Methods
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    //Objects can even hold arrays, other objects and functions
    family: ['Goku', 'Gohan', 'Goten'],
    //Objects can hold functions as well, function expression are important to this 
    // this is the same as the expression var calculateAge = function(yearOfBirth) {}
    calculateAge: function(yearOfBirth) {
        return 2016 - yearOfBirth;

    }
};

console.log(john);
console.log(john.family);
//To target a certain value in the family array.
console.log(john.family[1]);
//To target the function in the object
console.log(john.calculateAge(1990);
*/

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    //Objects can even hold arrays, other objects and functions
    family: ['Goku', 'Gohan', 'Goten'],
 
    calculateAge: function(yearOfBirth) {
    // this.yearOfBirth refers to the object var john, yearOfBirth refers to the key inside of var john.     
        return 2016 -this.yearOfBirth;

    }
};
 console.log(john.calculateAge(1990));





















































































































































































































































































































































