
//Values adn Variables:

let country = 'Cameroon'
let continent = 'Africa'
let population = '26550000000'

console.log(country); //Cameroon
console.log(continent); //Africa
console.log(population); //26550000000


//Data Types

let isIsland = true;
let language = 'French';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//let, const and var

const capital = 'Yaoundé';
console.log(capital);


//Basic Operators
 //Question 1: If your country split in half, and each half would contain half the population, then how many people would live in each half?
console.log(population / 2); //13275000000

 //Question 2: Increase the population of your country by 1 and log the result to the console
population ++; 
console.log(population); //26550000001
 
 //Question 3: Finland has a population of 6 million. Does your country have more people than Finland? 
const finlandPop = 6000000000
console.log(population > finlandPop); //True Boolean statement.

 //Question 4: The average population of a country is 33 million people. Does your country have less people than the average country? 
const averagePop = 33000000000
console.log(population < averagePop); //True Boolean statment.
 
 //Question 5: Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description = `${country} is in ${continent}, and it's ${population} people speak ${language}` 

console.log(description); //Cameroon is in Africa, and it's 26550000001 people speak French
