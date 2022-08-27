// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.


const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisible = numbers.filter(x => x % 10 === 0);
console.log(divisible);

// 3) Now do the same task of question 2. But do this using array.find()
// method. 

const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const divisible2 = numbers.find(x => x % 10 === 0);
console.log(divisible2);

//Then compare the output of question 2 & question 3.

//.filter return all result as an array and .find return only first result as a number.