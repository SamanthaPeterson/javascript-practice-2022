//https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PL3po6gAO5pQPUhCYdN85h1oa22S1wriZJ&index=2

let name = 'Sam'; //string literal
let age = 30; //number literal
let isApproved = false; //boolean literal
let firstName = undefined; //not sure
let selectedColor = null; //s

//Javascript is a dynamic languages - type of variables will be determined at run time
//other languages are static

//control L clears the consol 

//there are primitive types and reference types 

//what is an object = an object in real life for example multiple related variables can be put in an object

let person = {

}
//this is an object literal

let person = {
    name: 'Sam',
    age: 30
};
console.log(person);
//dot notation
person.name = 'Samantha';

//bracket notation
person['name'] = 'John';

console.log(person.name);