//Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

 Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//Test Data 1:
let marksHeight = 1.69;
let marksMass = 78;
let johnsHeight = 1.95;
let johnsMass = 92;

let marksBmi = marksMass / marksHeight ** 2;
let johnsBmi = johnsMass / johnsHeight ** 2;
let markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi, markHigherBMI); //27.309968138370508 24.194608809993426 true

// Test Data 2:
marksHeight = 1.88;
marksMass = 95;
johnsHeight = 1.76;
johnsMass = 85;

marksBmi = marksMass / marksHeight ** 2;
johnsBmi = johnsMass / (johnsHeight * johnsHeight);
markHigherBMI = marksBmi > johnsBmi;

console.log(marksBmi, johnsBmi, markHigherBMI); //26.87867813490267 27.44059917355372 false 

//Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 
GOOD LUCK 😀
*/

if (marksBmi > johnsBmi) {
    console.log(`Mark's BMI of ${marksBmi} is higher than John's BMI of ${johnsBmi}!`)
} else {
    console.log(`John's BMI of ${johnsBmi} is higher than Mark's BMI of ${marksBmi}!`)
};


//Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your Task:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well 9draw means they have the same average score)
3. BONUS 1: Include a requirment for a minumum score of 100. With this rule, a team only wins if it has a higer score than the other team, and the same time a score of at least 100 pints. Hint: Use a logical operator to test for minumum score, as well as multiple else-if blocks.
4. Bonus 2: Minumum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA:
- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

GOOD LUCK 
*/
// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;
// console.log (dolphins, koalas);
// //console.log (dolphins > koalas);

// if (dolphins == koalas){
//     console.log (`It's a draw!`)
// } else if (dolphins > koalas){
//     console.log (`Dophins for the win!`)
// } else if(koalas > dolphins){
//     console.log (`Koalas win!`)
// };  

//Bonus 1 & 2: 

const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;
console.log (dolphins, koalas);
//console.log (dolphins > koalas);

if (dolphins == koalas && dolphins >= 100 && koalas >= 100){
    console.log (`It's a draw!`)
} else if (dolphins > koalas && dolphins >= 100){
    console.log (`Dophins for the win!`)
} else if(koalas > dolphins && koalas >= 100){
    console.log (`Koalas win!`)
} else{
    console.log (`No winners this time`);
}


 ///////////////////////////////////
 // Coding Challenge #4

 /*

 Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

 1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statment 😅 (If it's easier for you, you can start with an if/else stement, and then try to convet it to a ternary operator!)
 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
 Example: 'The bill was 275, the tip was 41.25, and the total value 316.25,

 TEST DATA: Test for bill values 275, 40 and 430

Hints: 
    - To calculate 20% of a value, simply multiply it by 20/100=0.2
    - Value x is between 50 and 300, if it's >= 50 && <= 300 😉

    GOOD LUCK 😃
*/

let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 :
bill * 0.2;
console.log (`For a bill of $${bill}, the tip should be $${tip}, which makes a total of $${bill + tip}.`);  

bill = 40;
console.log (`For a bill of $${bill}, the tip should be $${tip}, which makes a total of $${bill + tip}.`); 

bill = 430;
console.log (`For a bill of $${bill}, the tip should be $${tip}, which makes a total of $${bill + tip}.`); 