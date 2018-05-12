/*
let-var-const
*/

//ex1 - let
if (true) {
  let a = 40;
  console.log(a); //40
 }
 console.log(a); // undefined

 //ex2 - var/let

 let a = 50;
let b = 100;
if (true) {
  let a = 60;
  var c = 10;
  console.log(a/c); // 6
  console.log(b/c); // 10
}
console.log(c); // 10
console.log(a); // 50

//ex3 const

const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.

//another example.

const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
LANGUAGES = "Javascript"; // shows error. 
LANGUAGES.push('Java'); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']

/*
Default Parameters
*/

//ex1

let sum= (a, b = 10) => {
  return a + b; 
 }
 sum(20); // 20 + 10 = 30
 sum(20, 50) //70

//ex2

 let notWorkingFunction = (a = 10, b) => {
  return a + b;
 }
 notWorkingFunction(20); // NAN. Not gonna work.
 notWorkingFunction(20, 30); // 50 
 
 /**
  * For Of Loop
  */

 let iterable= [2,3,4,1];
 for (let value of iterable) {
  value+=1 
  console.log(value);
 }

/*
Static method
*/

class Square {
  static square(n) {
    return n * n;
  }
}

class Cube extends Square {
  static cube(n) {
    return super.square(n) * n;
  }
}

console.log(Square.square(2));       //4
console.log(Cube.cube(3));       // 27

var tp = new Cube();


console.log(tp.cube());
// 'tp.cube is not a function'.

/**
 * Exponentiation infix
 */

Math.pow(7,2);
console.log(7**2);


/**
 * padStart() & padEnd()
 */

const data = {
  Karachi: '78/50',
  Lahore: '88/52',
  Peshawar: '58/40'
}

Object.entries(data).map(([city, temp]) => {
  console.log(`City: ${city} Weather: ${temp}`)
});

Object.entries(data).map(([city, temp]) => {
  console.log(`City: ${city.padEnd(16)} Weather: ${temp}`)
});
