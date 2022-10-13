const apples: number = 4;
let speed: string = "ds";
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when do you use annotations
//1) Function that return any type
const json = '{"x": 1, "y": 1}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) when we declare variable on one line and initialize it on another line

let words = ["a", "b", "c", "d", "e"];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "a") foundWords = true;
}

// 3) variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numbersAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) numbersAboveZero = numbers[i];
}
