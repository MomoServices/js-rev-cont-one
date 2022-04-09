// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = "Matilda";
// let first = 'jonas'
// let firstNamePerson

//let first_name_person (ruby variables are written like this.)

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//Constants are the only variables that use all uppercase, like the below example. 

/*let PI = 3.1415;

let myCurrentJob = 'Shopify Developer';
let myNextJob = 'Programmer';

console.log(myCurrentJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// How typeof helps identify a Data Type ex: 
console.log(typeof true);

console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');
*/


//How you can change a Data Type once a variable has been previously established. 
// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// //Example of undefined Data Type. 
// let year;
// console.log(year);
// console.log(typeof year);

// //An example of changing an undefined variable into a number.
// year = 1990;
// console.log(typeof year);


// //About null: Null is not an object, but will show up as one using 'typeof' this is a bug in javascript but isn't fixed for legacy reasons. 
// console.log(typeof null);


// //Using 'Let' allows you to reasign a new value to a variable using 'let'. AKA "Mutate the 'age' variable".  for example:

// let age = 31;
// age = 32;
// console.log(age);

//We use the "const" variable for values that are not suppose to change at any point in the future. for example:

// const birthYear = 1990;
// birthYear = 1989;
//An error message will show up in your console. 

//Empty "Const" variables are illegal. for example:
//const job;
//An error message will show in your console.

//It's good practive to have as little variable mutations as possible in your code to avoid bugs and errors. So "const" should be your go to variable. 


//"Var" should be avoided as much as possible. It's the old way of declaring variables. 

// var job = 'programmer';
// job = 'shopify developer';

//Never write code like this just cause it works. You must always declare a variable. 
// lastName = 'Orekoya';
// console.log(lastName);

//----------------------OPERATORS:

//--------------MATHIMATICAL Operators
// const now = 2022;
// const ageMorayo = now - 1990;
// const ageSarah = now - 2018;
// console.log(ageMorayo, ageSarah);
//console.log (typeof now);
//Answer is Number

// console.log(ageMorayo * 2, ageMorayo / 10, ageMorayo ** 3);
//"**" means to the power of (in this case, 3.) ex: 3 = 2 * 2 * 2.... So, raised to the power of... Get it? They are exponents. 

// const firstName = 'Morayo';
// const lastName = 'Orekoya'
// console.log(firstName + ' ' + lastName);

//---------------ASSIGNMENT Operators
// let x = 10 ** 5; // 100000
// x += 10; // Meaning: x = x + 10 (Which is = 100010)
// x *= 4; // Meaning: x = x * 4 (Which is = 400040)
// x++; // Meaning: x = x + 1  (Which is = 400041)
// x--; // Meaning: x = x - 1 Which is back to = 400040
// x--; //Answer is now = 400039
// console.log(x);


// COMPARISON Operators
// console.log(ageMorayo > ageSarah); //>,<. >=, <=
// console.log(ageSarah >= 14);
// *Note that in actual coding, these values will be hiden or incoperated in a variable, and not just on the code line. Look at below example for proper use. 

// const isFullAge = ageSarah >= 14;

// console.log(now - 1990 > now - 2018);

/*
const now = 2022;
const ageMorayo = now - 1990;
const ageSarah = now - 2018;

console.log(now - 1990 > now - 2018);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageMorayo + ageSarah) / 2
console.log(ageMorayo, ageSarah, averageAge);


const firstName = 'Morayo';
const job = 'developer';
const birthYear = 1990;
const year = 2022;

// Old template strings before ES6
const introduction = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(introduction);

//Template strings ES6
const morayoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(morayoNew);

//We can use back ticks for any strings...
console.log(`just a regular string...`);

//Multiline strings before ES6
console.log('String with \n\
multiple \n\
lines');

//Multiline strings in ES6 using back ticks
console.log(`String with
multiple
lines`); 


------------------// If/Else Statements YAAAY!
const age = 14;

if (age>=16) {
    console.log(`You are old enough for a drivers license!`);
} else {
    const yearsLeft = 16 - age;
    console.log(`Only ${yearsLeft} years left before you'll be able to drive!`)
};

// IF/ELSE Control structure:

// if(){

// } else {

// };

const birthYear = 1990;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



------------------//Type Conversions
const inputYear = '1990'; //This is a string variable
const ageMorayo = (2022 - Number(inputYear));
console.log(Number(inputYear) + 18, (inputYear) + 18); // The Function (Number()) helps convert a string into a Number.

console.log(Number('Momo'));
console.log(typeof NaN);

console.log(String(44)); //Turning a Number to a string.

-------------//TYPE COERCION: Type Coercion (Automatic by JavaScript)
console.log(`I will be ${ageMorayo} years old in May of this year`);

//Please note... Minus, mutiplication, and division function overides the string function but plus operator does the exact opposite. For example:

console.log('23' - 10 ); //Answer is 13 because the "minus" turns the otherwise string value into a number value. 
console.log('23' / '2'); //11.5
console.log('23' * 10); //230


//The Plus operator coverts numbers to strings. 
 let n = '1' + 1; //'11'
 n = n - 1; //But because we are using a minus operator here, it converts the string '11' to a number 11 and subtracts it with the 1. Excellent. 
 console.log(n); //10

 //Don't forget to consider that JS reads it in the case from left to right. so,

 console.log(2+3+4+'5'); //'95' as a string (cause +)
 console.log('10'-'4'-'3'-2+'5'); //'15' as a string (cause +)
 console.log('10'+4-'104'); //0 as a number (cause -)



// These values will be converted to false we we attempt to convert them to a boolean
 // 5 Falsy Values: 0, '', undefined, null, NaN

 console.log(Boolean(0)); //false
 console.log(Boolean (undefined)); //false
 console.log(Boolean('Momo')); //true (Any string that's not an empty string is a 'True' Boolean value... apparently.)

const money = 0; //Zero is a falsy value in boolean terms. Which this no is cause (if/else).
if(money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job.');
};

let height; //Undefined is a falsy value... 
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is UNDEFINED')
};


//----------------EQUALITY OPERATORS

const age = 18;
if(age === 18) console.log('You are now an adult');

//'===' Strict equality operator
//'==' loose equality operator (It can reform type coersions.) ex:

console.log(18 == '18'); //True
console.log(18 === '18'); //False

//---------------------PROMPT!

//const favColor = prompt(`What's your favorite color?`);

const favNumber = Number(prompt(`What's your favorite number?`)); //Adding the "Number()" Function turns this prompt string to a number thus making it responsive to the log using "===".


// if (favColor == 'Red', 'red', 'RED') {
//     console.log(`My favoriet dress is red! We should be friends!`)
// };

if (favNumber === 23) {
    console.log(`Alright, 23 it is!`)
} else if (favNumber === 20) {
    console.log(`Twenties fan I see. Alright then!`)
} else {
    console.log (`mmm... can you pick another number?`)
};

if(favNumber !== 23) 
    console.log(`Why not 23?`);
*/

//-------------BOOLEAN LOGIC (True for all programming)
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //the 'and' operator in javascript is '&&'
console.log(hasDriversLicense || hasGoodVision); // the 'or' operator in javascript is '||'
console.log(!hasDriversLicense); // the 'not' operator in javascript is '!'

const shouldDrive = hasDriversLicense && hasGoodVision;
const isTired = false; 
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('She can drive o! Biko.');
} else {
    console.log('Not qualified to drive');
}
*/

//SWITCH STATEMENT EXAMPLE

//const day = 'friday';

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday': // day === 'tuesday'
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');   
//         break; 
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':  
//     case  'sunday':
//         console.log('Enjoy the weekend.');
//         break;
//         default:
//         console.log('Not a valid day!');
// }

const state = 'Abia';

switch(state) {
    case 'Umahia':
        console.log('South');
        break;
    case 'Adamawa':
        console.log('North');
        break;
    case 'Yola':
        console.log('North');
        break;
    case 'Anambra':
        console.log('North');
        break;
    case 'Oka':
        console.log('North');
        break;
        default:
        console.log('You are probably Yoruba. Congratulations!');

}

//IF ELSE STATEMENT EXAMPLE

// if (day === 'monday') {
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//     } else if (day === 'tuesday') {
//         console.log('Prepare theory videos');
//     } else if (day === 'wednesday' || day === 'thursday') {
//         console.log('Write code examples');
//     } else if (day === 'friday') {
//         console.log('Record videos');
//     } else if (day === 'saturday' || day === 'sunday') {
//         console.log('Enjoy the weekend');
//     } else {
//         console.log('Not a valid day!');
//     }

    //CONDITIONAL OPERATOR or TERNEAR OPERATOR

    // const age = 23;
    // age >= 18 ? console.log('I can drink wine🍷'): //CMD + CTRL + Space for emoji
    // console.log('I will go for water 💧');

    const age = 14;
    age >= 18 ? 'wine 🍷': 'water 💧';

    const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
    console.log(drink);

    let drink2;
    if(age >= 18) {
        drink2 = 'wine 🍷';
    } else {
        drink2 = 'water 💧';
    }
    console.log(drink2);

    console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


//My own example of CONDITIONAL OPERATOR or TERNEAR OPERATOR

    //const weather = 80;
    // weather >= 75 ? console.log('You can leave your jacket at home'):
    // console.log('Might wanna take a jacket out with you');

    // const temp = weather >= 75 ? 'You can leave your jacket at home' : 'Might wanna take a jacket out with you';
    // console.log(temp);