// Practice Problem map(), filter(), find()

//1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
//     numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
//     method. Hints: add one to any odd number and it will become an even
//     number.

//Using map()
const makeEvenNumbers = [1, 3, 5, 7, 9].map(x => x + 1);
console.log(makeEvenNumbers)


//using for loop.
const oddNum = [1, 3, 5, 7, 9];
let evenNum = [];
for (let i = 0; i < oddNum.length;i++) {
    let index = oddNum[i] + 1;
    evenNum.push(index);
}
console.log(evenNum);