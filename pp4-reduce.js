// You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

//using .reduce
const numbers = [1, 9, 17, 22];
const add = numbers.reduce((prev, current) => prev + current, 0);

console.log(add);


// using for loop
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    const index = numbers[i];
    sum = sum + index;
}
console.log(sum);
